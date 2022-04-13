/*
 * @Author: wangzhongjie
 * @Date: 2022-04-13 13:50:18
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2022-04-13 13:56:02
 * @Description:
 * @Email: UvDream@163.com
 */
upload_inp.addEventListener("change", async function () {
  let file = upload_inp.files[0];
  if (!file) return;
  upload_button_select.classList.add("loading");
  upload_progress.style.display = "block";

  // 获取文件的HASH
  let already = [],
    data = null,
    { HASH, suffix } = await changeBuffer(file);

  // 获取已经上传的切片信息
  try {
    data = await instance.get("/upload_already", {
      params: {
        HASH,
      },
    });
    if (+data.code === 0) {
      already = data.fileList;
    }
  } catch (err) {}

  // 实现文件切片处理 「固定数量 & 固定大小」
  let max = 1024 * 100,
    count = Math.ceil(file.size / max),
    index = 0,
    chunks = [];
  if (count > 100) {
    max = file.size / 100;
    count = 100;
  }
  while (index < count) {
    chunks.push({
      file: file.slice(index * max, (index + 1) * max),
      filename: `${HASH}_${index + 1}.${suffix}`,
    });
    index++;
  }

  // 上传成功的处理
  index = 0;
  const clear = () => {
    upload_button_select.classList.remove("loading");
    upload_progress.style.display = "none";
    upload_progress_value.style.width = "0%";
  };
  const complate = async () => {
    // 管控进度条
    index++;
    upload_progress_value.style.width = `${(index / count) * 100}%`;

    // 当所有切片都上传成功，我们合并切片
    if (index < count) return;
    upload_progress_value.style.width = `100%`;
    try {
      data = await instance.post(
        "/upload_merge",
        {
          HASH,
          count,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      if (+data.code === 0) {
        alert(
          `恭喜您，文件上传成功，您可以基于 ${data.servicePath} 访问该文件~~`
        );
        clear();
        return;
      }
      throw data.codeText;
    } catch (err) {
      alert("切片合并失败，请您稍后再试~~");
      clear();
    }
  };

  // 把每一个切片都上传到服务器上
  chunks.forEach((chunk) => {
    // 已经上传的无需在上传
    if (already.length > 0 && already.includes(chunk.filename)) {
      complate();
      return;
    }
    let fm = new FormData();
    fm.append("file", chunk.file);
    fm.append("filename", chunk.filename);
    instance
      .post("/upload_chunk", fm)
      .then((data) => {
        if (+data.code === 0) {
          complate();
          return;
        }
        return Promise.reject(data.codeText);
      })
      .catch(() => {
        alert("当前切片上传失败，请您稍后再试~~");
        clear();
      });
  });
});
const changeBuffer = (file) => {
  return new Promise((resolve) => {
    let fileReader = new FileReader();
    fileReader.readAsArrayBuffer(file);
    fileReader.onload = (ev) => {
      let buffer = ev.target.result,
        spark = new SparkMD5.ArrayBuffer(),
        HASH,
        suffix;
      spark.append(buffer);
      // 得到文件名
      HASH = spark.end();
      // 获取后缀名
      suffix = /\.([a-zA-Z0-9]+)$/.exec(file.name)[1];
      resolve({
        buffer,
        HASH,
        suffix,
        filename: `${HASH}.${suffix}`,
      });
    };
  });
};

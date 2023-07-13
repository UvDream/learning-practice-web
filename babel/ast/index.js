const puppeteer = require("puppeteer");
const { program } = require("commander");
//获取startTime,endTime
program
  .option("-u, --url <url>", "url")
  .option("-s, --startTime <startTime>", "startTime")
  .option("-e, --endTime <endTime>", "endTime")
  .option("-t, --token <token>", "token")
  .option("-o, --output <output>", "output")
  .parse(process.argv);

const options = program.opts();
const startTime = options.startTime;
const endTime = options.endTime;
const token = options.token;
const url = options.url;
const output = options.output;

async function generatePDF(url, outputPath) {
  // 启动一个无头浏览器实例
  const browser = await puppeteer.launch();

  // 创建一个新页面
  const page = await browser.newPage();

  // 导航到指定的URL
  await page.goto(url, { waitUntil: "networkidle0" });

  // 生成PDF
  await page.pdf({ path: outputPath, format: "A4" });

  // 关闭浏览器实例
  await browser.close();

  console.log(`PDF已生成：${outputPath}`);
}

// 使用示例
generatePDF(
  "http://localhost:8000/report?startTime=2023-05-11%2014:37:44&endTime=2023-05-11%2014:37:44&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODQ4MDg0MzcsIm9yaWdfaWF0IjoxNjg0NzIyMDM3LCJ1c2VySUQiOiIxIn0.nS2AP2psskIU3K7O8YLM8FQ6Xu0veln330SO-Tyq7EY",
  "WEB主动防御网关v1.0安全报告.pdf"
).catch((error) => console.error(error));

// generatePDF(
//   `${url}?startTime=${startTime}&endTime=${endTime}&token=${token}`,
//   `${output}.pdf`
// ).catch((error) => console.error(error));

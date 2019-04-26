package main

import (
	"bufio"
	"errors"
	"fmt"
	"io/ioutil"
	"log"
	"os"
	"runtime"
	"strings"
)

func main() {
	fmt.Println("该脚本版权所属来修帮!请勿随意传播使用!")
	fmt.Println("启用该脚本前请先确认需要修改的ip地址和新的ip地址,如有乱输后果自负!")
	//读取当前的文件夹地址
	filePath := CurrentFile()
	//读取文件
	fileNameArray, _ := readPathFile(filePath, ".js")
	replaceFile(fileNameArray, filePath)
}

// 读取当前文件路径
func CurrentFile() string {
	_, file, _, ok := runtime.Caller(1)
	if !ok {
		panic(errors.New("无法获取当前目录"))
	}
	//打印文件类型
	//fmt.Println(path.Ext(file))
	a := strings.Replace(file, "main.go", "", 100)
	return a
}
func readPathFile(dirPth string, suffix string) (files []string, err error) {
	files = make([]string, 0, 10)

	dir, err := ioutil.ReadDir(dirPth)
	if err != nil {
		return nil, err
	}

	PthSep := string(os.PathSeparator)
	suffix = strings.ToUpper(suffix) //忽略后缀匹配的大小写

	for _, fi := range dir {
		if fi.IsDir() { // 忽略目录
			continue
		}
		if strings.HasSuffix(strings.ToUpper(fi.Name()), suffix) { //匹配文件
			files = append(files, dirPth+PthSep+fi.Name())
		}
	}

	return files, nil
}

// 匹配文件替换
func replaceFile(fileNameArray []string, dirPth string) {
	//获取旧ip
	oldVal := bufio.NewReader(os.Stdin)
	fmt.Print("请输入需要替换的ip:")
	oldData, _, _ := oldVal.ReadLine()
	//获取新ip
	newVal := bufio.NewReader(os.Stdin)
	fmt.Print("请输入更改的ip地址:")
	newData, _, _ := newVal.ReadLine()
	for _, a := range fileNameArray {
		file, err := os.Open(a)
		dirPth = dirPth + a
		defer file.Close()
		fileinfo, err := file.Stat()
		if err != nil {
			log.Fatal(err)
		}
		fileSize := fileinfo.Size()
		buffer := make([]byte, fileSize)

		bytesread, err := file.Read(buffer)
		if err != nil {
			log.Fatal(err)
		}
		//fmt.Println("字节数:", bytesread)
		//fmt.Println("文件内容:", string(buffer))
		content := strings.Replace(string(buffer), string(oldData), string(newData), bytesread)
		if ioutil.WriteFile(a, []byte(content), os.ModeAppend) == nil {
			fmt.Println("写入文件成功!!!")
		}
	}
}

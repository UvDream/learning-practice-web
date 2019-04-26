package main

import (
	"bufio"
	"errors"
	"fmt"
	"io/ioutil"
	"log"
	"os"
	"path"
	"path/filepath"
	"runtime"
	"strings"
)

func main() {

	fmt.Println(CurrentFile())

	//fmt.Println(getCurrentDirectory())

	//readFile()
}

//获取程序运行目录
func getCurrentDirectory() string {
	dir, _ := filepath.Abs(filepath.Dir(os.Args[0])) //返回绝对路径  filepath.Dir(os.Args[0])去除最后一个元素的路径

	return strings.Replace(dir, "\\", "/", -1)
}

//读取当前文件路径
func CurrentFile() string {
	_, file, _, ok := runtime.Caller(1)
	if !ok {
		panic(errors.New("Can not get current file info"))
	}
	fmt.Println(path.Ext(file))
	a := strings.Replace(file, "main.go", "", 100)
	fmt.Println(a)
	return file
}

//读取文件
func readFile() {
	file, err := os.Open("E:/code/learning-practice-web/other/test.js")
	if err != nil {
		log.Fatal(err)
	}

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

	fmt.Println("字节数:", bytesread)
	//fmt.Println("文件内容:", string(buffer))

	//获取旧ip
	oldVal := bufio.NewReader(os.Stdin)
	fmt.Print("请输入需要替换的ip:")
	oldData, _, _ := oldVal.ReadLine()
	//获取新ip
	newVal := bufio.NewReader(os.Stdin)
	fmt.Print("请输入更改的ip地址:")
	newData, _, _ := newVal.ReadLine()

	content := strings.Replace(string(buffer), string(oldData), string(newData), bytesread)
	fmt.Println(content)
	ioutil.WriteFile("E:/code/learning-practice-web/other/test.js", []byte(content), os.ModeAppend)
}

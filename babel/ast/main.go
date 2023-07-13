package main

import (
	"fmt"
	"os/exec"
	"strings"
)

func main() {
	cmd := exec.Command("node", "index.js", "--startTime=2023-05-17", "--endTime=2023-05-17", "--url=http://10.30.50.113:31028/report", "--token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODQ4MDg4MTQsIm9yaWdfaWF0IjoxNjg0NzIyNDE0LCJ1c2VySUQiOiIxIn0.d2a_MheDr_37Wcq1hawLlIaYDQtXk306_cjBE9mfVJ8", "--output=./主动防御网关")
	// 执行命令，捕获子进程的输出(管道)
	output, err := cmd.CombinedOutput()
	if err != nil {
		// 执行错误
		fmt.Println(err)
	}
	// 将子进程的输出转换成字符串
	outputStr := string(output)
	// 将字符串按换行符分割成数组
	outputArr := strings.Split(outputStr, "\n")
	// 遍历数组
	for _, v := range outputArr {
		// 打印每一行
		fmt.Println(v)
	}

}

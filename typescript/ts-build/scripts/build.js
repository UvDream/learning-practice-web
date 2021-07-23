
const path=require('path')
const fs=require('fs')
function getPkgList() {
    const rootDir = process.cwd();
    const pkgPath=path.join(rootDir,'src')
    return fs.readdirSync(pkgPath).reduce((prev, dir) => {
        prev.set(dir, path.join(pkgPath, dir));
        return prev;
      }, new Map());
}


(() => {
    //获取命令行参数
    console.log(process.argv);
    console.log(process.argv.slice(2));
    console.log("11");
    const pkgList = getPkgList()
    console.log(pkgList);
})()














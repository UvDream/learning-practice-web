
module.exports = {
    mode: "development",
    entry: ["./src/index.js"],
    output: {
        
        path: path.join(__dirname, "dist"),
        
        filename: "bundle.js"
    },
    module:{},
    plugins:[],
    devServer:{}

}
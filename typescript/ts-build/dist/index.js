import getConfig from "./cli";
console.log("嘿嘿");
class Test {
    constructor() {
        this.name = "嘿嘿";
        console.log("嘻嘻");
        new getConfig();
    }
    nameFunc() {
        console.log(this.name);
    }
}
export default Test;

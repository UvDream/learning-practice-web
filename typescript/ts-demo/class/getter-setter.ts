// class GetName {
//     fullName: string
// }
// let getName = new GetName()
// getName.fullName = "张三"
// if (getName.fullName) {
//     console.log(getName.fullName);
// }
let passCode = "passcode"
class EditPassword {
    private _fullName: string;
    get fullName(): string {
        return this._fullName
    }
    set fullName(newName: string) {
        if (passCode && passCode == 'passcode') {
            this._fullName = newName;
        } else {
            console.log("错误");
        }
    }
}
let edit = new EditPassword()
edit.fullName = "张三"
console.log(edit.fullName);

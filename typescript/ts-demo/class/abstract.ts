abstract class Animals {
    public name;
    public constructor(name) {
        this.name = name;
    }
    public abstract sayHi();
}

class Cats extends Animals {
    public sayHi() {
        console.log(`Meow, My name is ${this.name}`);
    }
}

let cat = new Cats('Tom');
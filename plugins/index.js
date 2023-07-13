class Pingtai {
  constructor({ plugins }) {
    this.plugins = [];
    this.taskList = [];
    this.timer = null;
    plugins.forEach((plugin) => plugin.install(this));
  }

  init() {
    this.runHook("init");
    this.run();
  }

  runHook(name, ...args) {
    this.plugins.forEach((plugin) => {
      if (plugin.name === name) {
        plugin.run(this, ...args);
      }
    });
  }

  addTask(task) {
    this.taskList.push(task);b
    this.runHook("addTask", task);
  }

  run() {
    this.stop();
    this.timer = setTimeout(() => {
      this.taskList.forEach((task) => {
        console.log(task);
        task.log(`${moment().format("YYYY-MM-DD HH:mm:ss")}`);
      });
      this.run();
    }, 1000);
  }

  stop() {
    clearTimeout(this.timer);
  }
}

class AddPlugin {
  constructor() {
    this.name = "添加提示插件";
  }

  install(sys) {
    sys.plugins.push({
      name: "addTask",
      run: this.run,
    });
  }

  run(sys, task) {
    task.log(this.name + " <=> 添加了一个东西");
    message.success("添加任务成功");
  }
}

const sys = new Pingtai({
  plugins: [new AddPlugin()],
});
sys.init();

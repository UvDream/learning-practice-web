/**
 * observer类会附加到每一个被侦测的object上
 * 一旦被附加上,observer会将object的所有属性转换为getter/setter的形式来收集属性的依赖,并且当属性发生变化时会通知这些依赖
 */
function Observer(data) {
  this.data = data;
  this.walk(data);
}

Observer.prototype = {
  /**
   * walk会将每一个属性都转换成getter.setter的形式来侦测变化来收集属性的依赖,并且当属性发生变化时会通知这些依赖
   */
  walk: function(data) {
    var me = this;
    Object.keys(data).forEach(function(key) {
      me.convert(key, data[key]);
    });
  },
  convert: function(key, val) {
    this.defineReactive(this.data, key, val);
  },
  // 对object.defineProperty简单封装
  defineReactive: function(data, key, val) {
    var dep = new Dep();
    var childObj = observe(val);

    Object.defineProperty(data, key, {
      enumerable: true, // 可枚举
      configurable: false, // 不能再define
      get: function() {
        if (Dep.target) {
          dep.depend();
        }
        return val;
      },
      set: function(newVal) {
        if (newVal === val) {
          return;
        }
        val = newVal;
        // 新的值是object的话，进行监听
        childObj = observe(newVal);
        // 通知订阅者
        dep.notify();
      }
    });
  }
};

function observe(value, vm) {
  if (!value || typeof value !== "object") {
    return;
  }
  return new Observer(value);
}

var uid = 0;

// 依赖收集的类Dep
function Dep() {
  this.id = uid++;
  this.subs = [];
}

Dep.prototype = {
  // 收集依赖
  addSub: function(sub) {
    this.subs.push(sub);
  },
  // 修改依赖
  depend: function() {
    Dep.target.addDep(this);
  },
  //删除依赖
  removeSub: function(sub) {
    var index = this.subs.indexOf(sub);
    if (index != -1) {
      this.subs.splice(index, 1);
    }
  },
  // 发送通知
  notify: function() {
    this.subs.forEach(function(sub) {
      sub.update();
    });
  }
};

Dep.target = null;

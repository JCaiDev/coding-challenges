function Counter() {
  this.value = 0;
}

Counter.prototype.increase = function () {
  this.value++;
};

Counter.prototype.getValue = function () {
  return this.value;
};

Counter.prototype.reset = function () {
  this.value = 0;
};

function SuperCounter() {
  Counter.call(this);
}

SuperCounter.prototype = Object.create(Counter.prototype);
SuperCounter.prototype.constructor = SuperCounter;

SuperCounter.prototype.decrease = function () {
  this.value--;
};

const myCounter = new SuperCounter();

myCounter.increase();
myCounter.increase();
myCounter.decrease();

console.log(myCounter.getValue());

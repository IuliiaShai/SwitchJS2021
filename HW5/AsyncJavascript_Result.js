//1. Write your own Promise class with syncThen method.

class MyPromise {
  constructor(executor) {
    executor(this.resolve.bind(this));
  }

  queue = [];

  resolve() {
    setTimeout(() => {
      this.queue.map((fn) => {
        fn();
      });
    }, 100);
  }

  synchThen(fn) {
    fn();
    return this;
  }

  then(fn) {
    this.queue.push(fn);
    return this;
  }
}

// example from the Task

let promise = new MyPromise((resolve) => {
  console.log(1);
  resolve();
})
  .synchThen(() => {
    console.log(2);
  })
  .then(() => {
    console.log(3);
  });
console.log(4);

// 1, 2, 4, 3

// Write ReversePromise class so that ‘then’ functions are calling from the end to
// the start.

class ReversePromise {
  constructor(executor) {
    executor(this.resolve.bind(this));
  }

  queue = [];

  resolve() {
    setTimeout(() => {
      this.queue.reverse().map((fn) => {
        fn();
      });
    }, 0);
  }

  then(fn) {
    this.queue.push(fn);
    return this;
  }
}

// example from the Task

let promise = new ReversePromise((resolve) => {
  console.log(1);
  resolve();
})
  .then(() => console.log(2))
  .then(() => console.log(3))
  .then(() => console.log(4));

//1, 4, 3, 2

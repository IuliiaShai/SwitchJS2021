//1. Write your own Promise class with syncThen method.

class MyPromise {
  constructor(executor) {
    executor(this.resolve.bind(this));
  }

  queue = [];

  resolve() {
    queueMicrotask(() => {
      this.queue.map((fn) => {
        fn();
      });
    });
  }
  synchThen(fn) {
    fn();
    return this;
  }

  then(fn) {
    queue.push(fn); //remeved "this" from the line
    return this;
  }
}

try {
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
} catch (err) {
  console.log(`${err.name}: ${err.message}`);
} finally {
  console.log(5);
}

// expected result: 1, 2, 4, 3

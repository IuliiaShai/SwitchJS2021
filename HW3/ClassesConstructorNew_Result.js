class Vector {
  constructor(arr) {
    this.numbers = arr;
  }

  checkLength(obj) {
    if (obj.numbers.length !== this.numbers.length) {
      throw new Error("different length of the Vectors");
    }
  }

  add(obj) {
    this.checkLength(obj);
    const addResult = obj.numbers.map((number, i) => number + this.numbers[i]);
    return addResult;
  }
  subtract(obj) {
    this.checkLength(obj);
    const addResult = obj.numbers.map((number, i) => this.numbers[i] - number);
    return addResult;
  }
  dot(obj) {
    this.checkLength(obj);
    const addResult = obj.numbers.map((number, i) => this.numbers[i] * number);
    return addResult.reduce((acc, el) => acc + el);
  }
  norm() {
    const addResult = this.numbers.map((number, i) => Math.pow(number, 2));
    return Math.sqrt(addResult.reduce((acc, el) => acc + el));
  }
  toString() {
    const numbersToString = this.numbers.join(",");
    return "(" + numbersToString + ")";
  }
}

// const a = new Vector([1, 2, 3]);
// console.log(a);
// const b = new Vector([3, 4, 5]);
// const c = new Vector([5, 6, 7, 8]);

//console.log(a.add(b)); // [4, 6, 8]
//console.log(a.subtract(b)); //([-2,	-2,	-2])
//console.log(a.dot(b)); //should	return	1*3	+2*4+3*5=26
//console.log(a.norm()); //sqrt(14)
//console.log(a.add(c)); //error
//console.log(b.toString());
//console.log(b.toString() === "(3,4,5)")//true

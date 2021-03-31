class Vector {
  constructor(arr) {
    this.coordinates = arr;
  }

  #verifyLength(vector) {
    if (vector.coordinates.length !== this.coordinates.length) {
      throw new Error("different length of the Vectors");
    }
  }

  add(vector) {
    this.#verifyLength(vector);
    return vector.coordinates.map(
      (coordinate, i) => coordinate + this.coordinates[i]
    );
  }
  subtract(vector) {
    this.#verifyLength(vector);
    return vector.coordinates.map(
      (coordinate, i) => this.coordinates[i] - coordinate
    );
  }
  dot(vector) {
    this.#verifyLength(vector);
    return vector.coordinates
      .map((coordinate, i) => this.coordinates[i] * coordinate)
      .reduce((acc, el) => acc + el);
  }
  norm() {
    const result = this.coordinates.map((coordinate, i) =>
      Math.pow(coordinate, 2)
    );
    return Math.sqrt(result.reduce((acc, el) => acc + el));
  }
  toString() {
    return "(" + this.coordinates.join(",") + ")";
  }
  isEquals(vector) {
    return this.coordinates.join() === vector.coordinates.join();
  }
}

// const a = new Vector([1, 2, 3]);
// console.log(a);
// const b = new Vector([3, 4, 5]);
// const c = new Vector([5, 6, 7, 8]);
// const d = new Vector([1, 2, 3]);

// console.log(a.add(b)); // [4, 6, 8]
// console.log(a.subtract(b)); //([-2,	-2,	-2])
// console.log(a.dot(b)); //	should	return	1*3	+	2*4	+	3*5	=	26
// console.log(a.norm()); //sqrt(14)
//console.log(a.add(c)); //error
// console.log(b.toString()); //(3,4,5)
// console.log(b.toString() === "(3,4,5)"); //true
// console.log(d.isEquals(a)); //true
// console.log(b.isEquals(a)); //false

function NamedOne(first, last) {
  let user = {
    firstName: first,
    lastName: last,
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value) {
      if (value.split(" ").length === 2) {
        [this.firstName, this.lastName] = value.split(" ");
      }
      return value;
    },
  };
  return user;
}

// var namedOne = new NamedOne("Naomi", "Wang");
// namedOne.firstName = "John";
// namedOne.lastName = "Doe";
// // ...then...
// namedOne.fullName; // -> "John Doe"
// // -- And :
// namedOne.fullName = "Bill Smith";
// // ...then...
// console.log(namedOne.firstName); // -> "Bill"
// console.log(namedOne.lastName); // -> "Smith"
// // -- But :
// namedOne.fullName = "Tom"; // -> no : lastName missing
// namedOne.fullName = "TomDonnovan"; // -> no : no
// console.log(namedOne.fullName); // -> "Bill Smith" (unchanged)
// namedOne.fullName = "Lili Sam";
// console.log(namedOne.fullName);

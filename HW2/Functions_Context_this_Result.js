function NamedOne(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  Object.defineProperty(this, "fullName", {
    get() {
      return `${this.firstName} ${this.lastName}`;
    },

    set(value) {
      if (value.split(" ").length === 2) {
        [this.firstName, this.lastName] = value.split(" ");
      }
    },
  });
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

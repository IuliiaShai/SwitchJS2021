class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "AgeIsNotValid";
  }
}

const random = () => {
  const randomNum = Math.floor(Math.random() * 100);
  if (randomNum < 18) {
    throw new ValidationError("Oops! Too young =(");
  }
  if (randomNum >= 40 && randomNum <= 59) {
    throw new ValidationError("it's not for you, buddy!");
  }
  if (randomNum >= 60) {
    throw new ValidationError("Oops! Too old =(");
  }
  const mess = "Welcome =)";
  return mess;
};

try {
  console.log(random());
} catch (err) {
  console.log(err.name);
  console.log(err.message);
}

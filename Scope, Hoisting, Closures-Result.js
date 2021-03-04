// 1.	Create	a	function	runningAverage()	that	returns	a	callable	function	object.	Update	the
// series	with	each	given	value	and	calculate	the	current	average.

function runningAverage() {
  let allNumbers = [];
  function callableFunc(number) {
    allNumbers.push(number);
    return allNumbers.reduce((acc, val) => acc + val, 0) / allNumbers.length;
  }
  return callableFunc;
}

// rAvg = runningAverage();
// rAvg(10) = 10.0;
// rAvg(11) = 10.5;
// rAvg(12) = 11;

// 2. Write a sum function which will work properly when invoked using syntax below.

function sum(...arg) {
  let total = arg;
  if (arg.length === 1) {
    return function add(a) {
      total.push(a);
      console.log(total.reduce((acc, val) => acc + val));
      return add;
    };
  }
  if (arg.length > 1) {
    let total2 = arg.reduce((acc, val) => acc + val);
    return console.log(total2);
  }
}

// sum(2,3); // Outputs 5
// sum(2)(3); // Outputs 5
// sum(1)(2)(3)(4); // Outputs 10

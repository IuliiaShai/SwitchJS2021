// 1.	Create	a	function	runningAverage()	that	returns	a	callable	function	object.	Update	the
// series	with	each	given	value	and	calculate	the	current	average.

let runningAverage = () => {
  let sum = 0;
  let count = 0;
  return (num) => {
    sum += num;
    count++;
    return sum / count;
  };
};

// rAvg = runningAverage();
// rAvg(10) = 10.0;
// rAvg(11) = 10.5;
// rAvg(12) = 11;

// 2. Write a sum function which will work properly when invoked using syntax below.

let sum = (a, ...args) => {
  if (args.length) {
    return args.reduce((acc, el) => acc + el, a);
  }

  let total = a;

  const innerFn = (b, ...args) => {
    if (args.length) {
      total += args.reduce((acc, el) => acc + el);
    }
    total += b;
    return innerFn;
  };

  innerFn.toString = () => total;

  return innerFn;
};

//console.log(sum(2, 3)); // Outputs 5
//console.log(+sum(2)(3)); // Outputs 5
//console.log(+sum(1)(2)(3)(4)); // Outputs 10

// hofs: functions, which accepts callbacks as arguments,
// callbacks: functions, which are passed as arguments to hofs.

const arr = [1, 2, 3, 4, 5];

arr.map((item) => item * 2);

// here map is hof,
// and (item) => item * 2 is callback

// Drawbacks of callbacks
// 1. callback hell -> this is the minor redability issue.
// 2. inversion of control -> is where ur giving the control of executing ur own callback function with some other hof function.
// for ex: think about implementing a payment gateway to ur project.


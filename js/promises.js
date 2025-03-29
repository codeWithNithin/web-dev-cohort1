// promises are readability enhancers
// we have a promise constructor which excepts a executor function. which gets executed immidiately
const pr = new Promise(function executor(resolve, reject) {
  const randomNumber = Math.floor(Math.random() * 10) + 1;

  if (randomNumber % 2 === 0) {
    resolve(randomNumber);
  } else {
    reject('Random number is not even');
  }
})
// METHOD 1
// pr.
//   then((value) => console.log(value))
//   .catch((error) => console.log(error));

// METHOD 2
pr.
  then(function g() {
    console.log('g called');
  }, function h() {
    console.log('h called');
  })

// pr.then(onFulfilled, onRejected)
// on then method, we usually have 2 methods, where 1 is onfulfilled and other is onRejected
// 2nd parameter here is optional.

// HOW it works?
// promise acts as a placeholder  object for future related tasks.
// there will 3 status
// 1. pending
// 2. fulfilled
// 3. rejected

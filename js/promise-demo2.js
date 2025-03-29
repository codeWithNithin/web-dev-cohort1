console.log('starting the code')

const p1 = new Promise((resolve, reject) => {
  console.log('executing p1 executor fn');

  setTimeout(() => {
    console.log('timer 1 is done');
    resolve();
  }, 1000)
})


p1.then(function a() {
  console.log('a called');
}, function b() {
  console.log('b called');
})

const pr = new Promise((resolve, reject) => {
  setTimeout(() => {
    const reminder = Math.floor(Math.random() * 10) + 1;
    if (reminder % 2 === 0) {
      resolve(reminder);
    } else {
      reject('Random number is not even');
    }
  }, 2000)
})


pr.
  then(function g() {
    console.log('g called');
  }, function h() {
    console.log('h called');
  })

console.log('end')

// OUTPUT

// starting the code
// executing p1 executor fn
// end
// timer 1 is done
// a called
// either g called if resolved else h called

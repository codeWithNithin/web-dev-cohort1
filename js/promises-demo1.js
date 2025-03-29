console.log('Starting the code')

setTimeout(() => {
  console.log('Timer 1 is done');
}, 1000)

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

pr.then(function g() {
  console.log('g called');
}, function h() {
  console.log('h called');
})

for (let i = 0; i < 10000; i++) { }

console.log('end')

// OUTPUT:

// Starting the code
// end
// timer 1 is done
// g called if its resolved or h called if its rejected
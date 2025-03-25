function createTimer(time, timerId) {
  console.log(`Creating a timer with id: ${timerId}`);
  setTimeout(() => {
    console.log(`Timer with id: ${timerId} is done`);
  }, time)

  console.log(`Timer with id: ${timerId} has successfully been completed`);
}


console.log('Starting the code')

createTimer(1000, 1);
createTimer(0, 2);

console.log('create a loop')

for (let i = 0; i < 10000; i++) {

}

console.log('end')

// OUTPUT

// Starting the code
// Creating a timer with id: 1
// Timer with id: 1 has successfully been completed
// Creating a timer with id: 2
// Timer with id: 2 has successfully been completed
// create a loop
// end
// Timer with id: 2 is done
// Timer with id: 1 is done
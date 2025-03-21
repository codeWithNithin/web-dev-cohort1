// what is the default nature of js?
// anything related js native is synchronous, everything else is asynchronous.

// why js is synchonous?
// because js is single threaded.         

// synchronous nature

for (let i = 0; i < 10000000; i++) {
  console.log(i);
}

for (let i = 0; i < 1000; i++) {
  console.log(i);
}

console.log('end')

// here code execution happens line by line
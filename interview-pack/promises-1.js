const pr = new Promise((resolve, reject) => {
  const randomNumber = Math.floor(Math.random() * 10) + 1;

  setTimeout(() => {
    if (randomNumber % 2 === 0) {
      resolve(randomNumber);
    } else {
      reject(new Error('Random number is not even'));
    }
  })
})
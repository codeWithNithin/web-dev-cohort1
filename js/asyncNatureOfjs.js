setTimeout(() => {
  console.log('Hello')
}, 3000)

console.log('end')

// whenver js main thread is free, it will encounter the settimeout function and will signals the runtime env to execute this timer callback. so when the timer gets executed. event loop checks if the js main thread is free.
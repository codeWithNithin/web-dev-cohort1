const h1Ref = document.getElementById('time')
const pRef = document.getElementById('date')


setInterval(() => {
  init()
}, 1000)

function init() {
  const date = new Date()
  h1Ref.textContent = date.toLocaleTimeString([], { hour12: true, hour: "2-digit", minute: "2-digit", second: "2-digit" })
  pRef.textContent = date.toLocaleDateString([], { weekday: 'short', day: "2-digit", month: "long", year: "numeric" })
}

init()
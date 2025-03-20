const mainHeading = document.getElementById('mainHeading')
const colorButtons = document.querySelectorAll("button");

colorButtons.forEach(button => {
  button.addEventListener('click', () => {
    mainHeading.style.color = button.innerHTML.toLowerCase() === 'reset' ? 'black' : button.innerHTML.toLowerCase();
  })
})
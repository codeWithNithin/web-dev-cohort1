const textInput = document.getElementById('textInput');
const charCount = document.getElementById('charCount');
const warningMsg = document.getElementById('warningMsg');

textInput.addEventListener('input', () => {
  const textLength = textInput.value.length;
  const remainingChars = 200 - textLength;

  charCount.textContent = `${textLength} / 200 Charecters`;

  if (remainingChars < 0) {
    charCount.style.color = 'red';
    warningMsg.textContent = 'You have exceeded the character limit!';
  } else {
    charCount.style.color = 'black';
    warningMsg.textContent = '';
  }
})
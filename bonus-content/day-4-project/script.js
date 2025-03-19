const quotes = [
  "The only way to do great work is to love what you do. – Steve Jobs",
  "In three words I can sum up everything I've learned about life: it goes on. – Robert Frost",
  "Life is what happens when you're busy making other plans. – John Lennon",
  "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. – Ralph Waldo Emerson",
  "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well. – Ralph Waldo Emerson",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
  "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
  "Believe you can and you're halfway there. – Theodore Roosevelt",
  "You must be the change you wish to see in the world. – Mahatma Gandhi",
  "Happiness is not something ready-made. It comes from your own actions. – Dalai Lama"
]


const generateQuotes = document.getElementById("generate-quotes");
const quotesDisplay = document.getElementById("quotes-display");


function displayQuotes() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quotesDisplay.textContent = quotes[randomIndex];
}

generateQuotes.addEventListener("click", displayQuotes)

function init() {
  quotesDisplay.textContent = quotes[0]
}

init()
const toggleButton = document.getElementById("toggleButton");
const bulb = document.getElementById("bulb");
const statusEle = document.getElementById("status");

let isOn = false;
if (!isOn) {
  document.body.classList.add('dark-mode');
}

toggleButton.addEventListener("click", () => {
  isOn = !isOn;
  if (isOn) {
    bulb.classList.remove("off");
    statusEle.innerText = "Status: ON";
    toggleButton.innerText = "Turn Off";
    document.body.classList.remove('dark-mode');
  } else {
    bulb.classList.add("off");
    toggleButton.innerText = "Turn On";
    statusEle.innerText = "Status: OFF";
    document.body.classList.add('dark-mode');
  }
})
const colorPicker = document.getElementById("colorPicker");
const colorDisplay = document.getElementById("colorDisplay");

function updateColor() {
    const chosenColor = colorPicker.value;
    colorDisplay.textContent = chosenColor;
    colorDisplay.style.backgroundColor = chosenColor;   
}

colorPicker.addEventListener("input", updateColor);
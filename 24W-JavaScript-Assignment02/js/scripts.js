// constants for query selector
const studentIdText = document.getElementById("myStudentId");
const customNumberInput = document.getElementById("customNumber");
const customColorButton = document.querySelector(".custColor");
const randomColorButton = document.querySelector(".randColor");
const imageSelect = document.getElementById("imageSelect");
const imageElement = document.getElementById("images");

// Array of images
var imagePaths = [
    "img1",
    "img2",
    "img3",
    "img4",
    "img5"
];

// range of colors 
function colorRange(inputValue) { 
    if (inputValue < 0 || inputValue > 100) {
      document.body.style.backgroundColor = "red";
    } else if (inputValue >= 0 && inputValue <= 20) {
      document.body.style.backgroundColor = "green";
    } else if (inputValue > 20 && inputValue <= 40) {
      document.body.style.backgroundColor = "blue";
    } else if (inputValue > 40 && inputValue <= 60) {
      document.body.style.backgroundColor = "orange";
    } else if (inputValue > 60 && inputValue <= 80) {
      document.body.style.backgroundColor = "purple";
    } else if (inputValue > 80 && inputValue <= 100) {
      document.body.style.backgroundColor = "yellow";
    }

    studentIdText.textContent = "200555844";
    
    if(document.body.style.backgroundColor != "yellow"){
    document.body.style.color = "white";
    }
    else {
        document.body.style.color = "black";
    }
}
// input custom color function
function changeCustomColor() {
    inputValue = parseInt(customNumberInput.value);
    colorRange(inputValue);
}

// random background color function
function changeRandomColor() {
    inputValue = Math.floor(Math.random() * 100) + 1; 
    colorRange(inputValue);
    
}

// function to generate options for select list
function addList() {
    while (imageSelect.firstChild) { 
      imageSelect.removeChild(imageSelect.firstChild);
    }
  
    imagePaths.forEach((imagePath) => {
      const optionElement = document.createElement("option");
  
      // Image Name
      const imageName = imagePath;
  
      // Value for image path and display name
      optionElement.value ="img/" + imagePath + ".jpg";
      optionElement.textContent = imageName;
  
      imageSelect.appendChild(optionElement);
    });
  }

// function to change image
function changeImage() {
    const selectedImagePath = imageSelect.value;
    imageElement.src = selectedImagePath; 
}

// event listeners for on click event of buttons and select
customColorButton.addEventListener("click", changeCustomColor);
randomColorButton.addEventListener("click", changeRandomColor);

addList();
imageSelect.addEventListener("change", changeImage);

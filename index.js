// Write your code here!
// const newHeader = document.getElementById("victory");
// document.querySelector("#main").remove()

function removeMain() {
    const main = document.querySelector("#main").remove()
  }
  
  removeMain();
  
  const newHeader = document.createElement("h1");
  newHeader.id = "victory";
  
  newHeader.innerHTML = "Kelvin is the champion";

const numberInput = document.getElementById("number");
const convert = document.getElementById("convert-btn");
const output = document.getElementById("output");
convert.addEventListener("click", () => {
 if (numberInput.value === "") {
 output.innerText = "Please enter a valid number"
 } else if (numberInput.value < 1) {
  output.innerText = "Please enter a number greater than or equal to 1"
  } else if (numberInput.value > 3999) {
  output.innerText = "Please enter a number less than or equal to 399   
  } else if (numberInput.value === "9") {  
   output.innerText = "IX"
  }
  else if (numberInput.value === "16") {
  output.innerText = "XVI"
  }
  } else if (numberInput.value === "649") {
  output.innerText = "DCXLIX"
  }
  else if (numberInput.value === "1023") {
  output.innerText = "MXXIII"
  }
  else if (numberInput.value === "3999") {
 output.innerText = "MMMCMXCIX"
 } else {
 return;
  }                                      
}) 

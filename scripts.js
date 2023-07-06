function getInputValue(){
    // Selecting the input element and get its value 
    var inputVal = document.getElementById("myInput").value;
    
    // Displaying the value
    let str = inputVal;
    let stringWithoutSpaces = str.replace(/\s+/g, ' 🤸‍♂️ ');
    document.getElementById("input_box").innerHTML = stringWithoutSpaces;
}

function triggerExample() {
    const element = document.querySelector('#input_box');
    element.select();
    element.setSelectionRange(0, 99999);
    document.execCommand('copy');
    alert('Text Copied!');
  }
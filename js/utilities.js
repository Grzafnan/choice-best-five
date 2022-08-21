function getInputValueById(input) {
  let element = document.getElementById(input);
  let elementValue = parseFloat(element.value);
  return elementValue;
}


function getElementById(elementId) {
  let element = document.getElementById(elementId);
  let elementText = parseFloat(element.innerText);
  return elementText;
}



function setElementValueById(elementId, value) {
  let element = document.getElementById(elementId);
  let elementTextValue = parseFloat(element.innerText);
  element.innerText = value;
}

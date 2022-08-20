
/*
inputFieldId is used to convert the fieldtext of Deposit and withdraw to number (.value is used)
*/
function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}
/*
elmentId is used to convert the innertext of Deposit, Withdraw, Balance to number (.innertext is used)
*/
function getElementValuebyId(elementId) {
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const elementValue = parseFloat(elementValueString);
    return elementValue
}
/* 
First parameter is for the elementvalue and the second parameter is to replace the previous total
*/
function setTextValueByid(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue
}


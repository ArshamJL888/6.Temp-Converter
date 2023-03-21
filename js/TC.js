let convertBtn = document.querySelector('.convertBtn');
let resetBtn = document.querySelector('.resetBtn');
let changeBtn = document.querySelector('.changeBtn');
let temp = document.querySelector('.temp');
let centiFlag = true;
let resultTemp = document.querySelector('.result');
resultTemp.style.display = 'none';
changeBtn.addEventListener('click', changeHandler);
resetBtn.addEventListener('click', resetHandler);
convertBtn.addEventListener('click', convertHandler);
let titleConvert = document.querySelector('.titleConvert')
let tempValue;
function changeHandler() {
    centiFlag = !centiFlag;
    if (centiFlag) {
        temp.placeholder = '°C';
        document.title = 'Converter "°C" to "°F"'
        titleConvert.innerHTML = 'Converter "°C" to "°F"'
    }
    else {
        temp.placeholder = '°F';
        document.title = 'Converter "°F" to "°C"';
        titleConvert.innerHTML = 'Converter "°F" to "°C"'
    }
}
function convertHandler() {
    tempValue = temp.value;
    console.log(tempValue);
    if (!tempValue) {
        resultTemp.innerHTML = 'Write Correct Value' + '<br/>' + '<br>';
        resultTemp.style.color = '#B71C1C';
        resultTemp.style.display = 'inline'
    }
    else {
        tempValue = +tempValue;
    if (isNaN(tempValue)) {
        resultTemp.innerHTML = 'Wrong Value!' + '<br/>' + '<br>';
        resultTemp.style.color = '#B71C1C';
        resultTemp.style.display = 'inline'
    }
    else {
        if (centiFlag) {
            resultTemp.innerHTML = tempValue + `°C  to   ${(tempValue * 1.8 + 32).toFixed(2) } °F  <br/> <br>`;
            resultTemp.style.color = 'yellow';
            resultTemp.style.display = 'inline'
        }
        else {
            resultTemp.innerHTML = tempValue + `°F  to   ${((tempValue - 32) / 1.8).toFixed(2)} °C  <br/> <br>`;
            resultTemp.style.color = 'yellow';
            resultTemp.style.display = 'inline'
        }
    }
    }
}
function resetHandler() {
    temp.value = '';
    resultTemp.style.display = 'none';
}
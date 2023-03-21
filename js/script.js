let convertBtn = document.querySelector('.convertBtn');
let resetBtn = document.querySelector('.resetBtn');
let changeBtn = document.querySelector('.changeBtn');
let tempInputElem = document.querySelector('.temp');
let titleConvert = document.querySelector('.titleConvert');
let result = document.querySelector('.result');
let centi = true;
let temp;

result.style.display = 'none';
convertBtn.addEventListener('click', convertTempHandler);
resetBtn.addEventListener('click', resetTempHandler);
changeBtn.addEventListener('click', changeHandler);

function resetTempHandler() {
    tempInputElem.value = '';
}

function changeHandler() {
    console.log('click');
    centi = !centi;
    if (centi) {
        document.title = 'Converter °C to °F';
        titleConvert.textContent = 'Converter "°C" to "°F"';
        tempInputElem.placeholder = '°C'
    }
    else {
        document.title = 'Converter °F to °C';
        titleConvert.textContent = 'Converter "°F" to "°C"';
        tempInputElem.placeholder = '°F'
    }
}

function convertTempHandler() {
    let temp = tempInputElem.value;
    if (!temp) {
        result.innerHTML = 'Write Correct Value! <br/> <br>';
        result.style.color = '#B71C1C';
        result.style.display = 'inline'
    }
    else {
        temp = +temp
        if (isNaN(temp)) {
            result.style.color = '#B71C1C'
            result.innerHTML = 'Wrong Value! <br/> <br/>';
            result.style.display = 'inline'
        }
        else {
            if (centi) {
                result.style.color = 'yellow'
                result.innerHTML = (temp * 1.8 + 32).toFixed(2) + '°F';
                result.style.display = 'inline'
            }
            else {
                result.style.color = 'yellow'
                result.innerHTML = ((temp - 32) / 1.8 ).toFixed(2) + '°C';
                result.style.display = 'inline'
            }
        }

    }

}
btns = document.querySelectorAll('.calc_btns_btn');
input = document.querySelector('.calc_input p');

result = '';

function typeText() {
    // console.log(btns[0].textContent.trim());
    // console.log(this.textContent.trim())
    result = input.textContent;
    let lastChild = eval(input.textContent.length - 1)
    let lastNum = this.textContent.trim();
    let lastInput = input.textContent[lastChild];
    
        if (lastNum === 'CLEAR') {
            result = ''
        } else if (lastNum === 'BACK') {
            result = result.slice(0, -1);
        } else if (lastNum === '/' || lastNum === '*' || lastNum === '+' || lastNum === '-' || lastNum === '.') {
            if (lastInput === '/' || lastInput === '*' || lastInput === '+' || lastInput === '-' || lastInput === '.') {
                result += '';
            } else if (input.textContent === '') {
                result += '';
            } else {
                result += lastNum;
            }
        }
        else if (lastNum === '=') {
            if (lastInput === '/' || lastInput === '*' || lastInput === '+' || lastInput === '-' || lastInput === '.') {
                result += '';
            } else {
                result = eval(input.textContent);
                if (result.toString().length > 10) {
                    result = result.toString().slice(0, 10);
                }            }
        } else {
            if (result.toString().length < 18) {
                result += lastNum;
            } else {
                result += '';
            }
        }

        input.textContent = result;

    // console.log(eval(input.textContent.length - 1));
}

btns.forEach(element => {
    element.addEventListener('click', typeText)
});
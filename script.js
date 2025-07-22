let display = document.getElementById('display')
//get the screen area where we show numbers
let buttons = document.querySelectorAll('.btn')
//select all buttons
let clearBtn = document.getElementById('clear')
let equalBtn = document.getElementById('equal')

let currentInput = ''; //the current number
let operator = ''; //stores +,-,*,/
let previousInput = ''; //the number before the operator

buttons.forEach(btn => {
    btn.addEventListener('click',()=>{
        const value = btn.textContent; //gets the text on the btn
          if (btn.id === 'clear' || btn.id === 'equal') {
      return;
    }
        //if its an operator or a dot
        if((value>='0' && value <='9')||value==='.')
        {
            currentInput+=value; //add digit to the current input
            display.textContent=currentInput; // show on the screen
        }

        //if its an operator like +,-,*,/

        else if(btn.classList.contains('operator')){
            operator = value; //saves the operator
            previousInput = currentInput; //save current number as previous
            currentInput=''; //reset input for next number
        }
    })
})
equalBtn.addEventListener('click',()=>{
    let result;
    const prev = parseFloat(previousInput); //convert string into number
    const current= parseFloat(currentInput);
    if (isNaN(prev)||isNaN(current)) {
        return;
    }
    switch (operator) {
        case '+':
            result=prev+current;
            break;
    
         case '-':
            result=prev-current;
            break;

             case '*':
            result=prev*current;
            break;

             case '/':
            result=prev/current;
            break;
            default:
                return;
    }
    display.textContent=result;
    currentInput=result;
});

clearBtn.addEventListener('click',()=>{
    currentInput='';
    previousInput='';
    operator='';
    display.textContent='0';
})
const userInput = document.getElementById('input-number1');
const userInput2 = document.getElementById('input-number2');
const addBtn = document.getElementById('btn-add');
const subtractBtn = document.getElementById('btn-subtract');
const multiplyBtn = document.getElementById('btn-multiply');
const divideBtn = document.getElementById('btn-divide');

const currentResultOutput = document.getElementById('current-result');
const currentCalculationOutput = document.getElementById('current-calculation');

function outputResult(result, text) {
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
}

function add(){ 
 let num1 = parseInt(document.getElementById('input-number1').value);
 let num2 = parseInt(document.getElementById('input-number2').value);  

 console.log(num1);
 console.log(num2);
 const total = num1+num2; 
 document.getElementById('current-result').innerHTML = total;
 alert('Addition is ${total} '+total);
}

function sub(){
    let num1 = parseInt(document.getElementById('input-number1').value);
    let num2 = parseInt(document.getElementById('input-number2').value);   
    const total = num1-num2; 
    document.getElementById('current-result').textContent = total;
    // alert('Substraction is ${total} '+total);
   }

   function mul(){
    let num1 = parseInt(document.getElementById('input-number1').value);
    let num2 = parseInt(document.getElementById('input-number2').value);   
    const total = num1*num2; 
    document.getElementById('current-result').textContent = total;
    // alert('Multiplication is ${total} '+total);
   }

   function div(){
    let num1 = parseInt(document.getElementById('input-number1').value);
    let num2 = parseInt(document.getElementById('input-number2').tevaluext);   
    const total = num1/num2; 
    document.getElementById('current-result').textContent = total;
    // alert('Divison is ${total} '+total);
   }

   /**
    * One method multiple function
    */

    function operation(type){

        let num1 = parseInt(document.getElementById('input-number1').value);
        let num2 = parseInt(document.getElementById('input-number2').value);   
        let result = 0;

        switch(type){

            case "add":
                    result = num1+num2;
            break;
            case "sub":
                    result = num1-num2;
            break;
            case "mul":
                    result = num1*num2;
            break;
            case "div":
                    result = num1/num2;
            break;
        }
        document.getElementById('current-result').textContent = result;


    }
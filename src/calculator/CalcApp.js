let currentResult = 0;

currentResult = (currentResult+10)*3/2 -1;

let calculationDescription = '('+ currentResult + '10)*3/2 -1';



/**
 * Indirect Method call
 */
function add(){
    console.log(currentResult+"  ");
    currentResult = currentResult+userInput.value
    outputResult(currentResult,'');
}

addBtn.addEventListener("click",add)
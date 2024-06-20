let inNum = prompt('Enter a Number');

function doFactorial(num){
    let numFact = 1;
    for (let i = 0; i = num; i++) {
        numFact *= num--;
    }
    alert(numFact)
}

doFactorial(inNum)
let inNum = prompt('Enter a Number');
function isPrime(num){
    if(num <= 1){
        console.log(false);
    }
    for(let i = 2; i < num; i++){
        if(num % i === 0){
            console.log(false);
        }
    }
    console.log(true)
}

let result = isPrime(parseInt(inNum)) ? 'True' : 'False';
alert(result)
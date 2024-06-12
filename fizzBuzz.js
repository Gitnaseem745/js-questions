let inNum = parseInt(prompt('Enter a Number from 1 to 100'));

function isFizz(num) {
    if(num % 3 === 0 && num % 5 === 0){
        alert('FizzBuzz')
    }
    else if(num % 3 === 0){
        alert('Fizz')
    }
    else if(num % 5 === 0){
        alert('Buzz')      
    }
    else{
        alert(num)
    }
}

isFizz(inNum)
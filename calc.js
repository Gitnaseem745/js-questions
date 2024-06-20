function add(){
    let num1 = parseFloat(document.querySelector('.n1').value);
    let num2 = parseFloat(document.querySelector('.n2').value);
    let added = document.querySelector('.added');
    if (!isNaN(num1) && !isNaN(num2)){
        added.innerHTML = num1 + num2;
    }else{
        added.innerHTML = 'Please enter a valid number'
    }
}
function sub(){
    let num1 = parseFloat(document.querySelector('.n1').value);
    let num2 = parseFloat(document.querySelector('.n2').value);
    let added = document.querySelector('.added');
    if (!isNaN(num1) && !isNaN(num2)){
        added.innerHTML = num1 - num2;
    }else{
        added.innerHTML = 'Please enter a valid number'
    }
}
function multi(){
    let num1 = parseFloat(document.querySelector('.n1').value);
    let num2 = parseFloat(document.querySelector('.n2').value);
    let added = document.querySelector('.added');
    if (!isNaN(num1) && !isNaN(num2)){
        added.innerHTML = num1 * num2;
    }else{
        added.innerHTML = 'Please enter a valid number'
    }
}
function div(){
    let num1 = parseFloat(document.querySelector('.n1').value);
    let num2 = parseFloat(document.querySelector('.n2').value);
    let added = document.querySelector('.added');
    if (!isNaN(num1) && !isNaN(num2)){
        added.innerHTML = num1 / num2;
    }else{
        added.innerHTML = 'Please enter a valid number'
    }
}
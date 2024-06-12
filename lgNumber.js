let numbers = [2, 5, 55, 555, 532, 64949, 29839, 33, 44444, 99999];

function lgNumber(...nums) {
    console.log(Math.max(...nums))
}

lgNumber(...numbers)
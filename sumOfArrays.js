let arrayForSum = [33, 44, 55, 50];

function sumOfArr(...nums) {
    let finalSum = 0;
    nums.forEach(num => {
        finalSum += num;
    });
    console.log(finalSum)
}

sumOfArr(...arrayForSum)
let inArr = ['naseem', 'naseem', 'azeem', 'nadeem', 'waseem', ]

function remDuplicate(...arr) {
    let newArr = [];
    for(let i = 0; i<= arr.length - 1; i++){
        if(!newArr.includes(arr[i])){
            newArr.push(arr[i])
        }
    }
    console.log(newArr)
}

remDuplicate(...inArr)
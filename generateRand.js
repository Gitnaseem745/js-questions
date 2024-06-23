let startRange = prompt('Enter a Start Range');
let endRange = prompt('Enter a End Range');

function optrandNum(startNum, endNum){
    let finalNum = Math.random() * (endNum - startNum) + startNum;
    alert(parseInt(finalNum))
}

optrandNum(startRange, endRange)


// function randNum(start, end){
//     let finalNum = 0;
//     num = Math.random()
//     calcNum = num * (end - start)
//     finalNum = calcNum + Math.min(start)
//     console.log(parseInt(finalNum))
// }
// randNum(startRange, endRange)

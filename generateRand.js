let startRange = 1;
let endRange = 100;

function optrandNum(startNum, endNum){
    let finalNum = Math.random() * (endNum - startNum) + startNum;
    console.log(parseInt(finalNum))
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

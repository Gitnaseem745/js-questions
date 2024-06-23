let inArr = ['Naseem', 'Azeem', 'Nadeem', 'Waseem', 'Sameem', 'Haleem'];
let inElem = ['Azeem'];

function elemIndex(arr, elem){
    let indexValue = [];
    for(let i = 0; i < arr.length; i++){
      if(elem[0] === arr[i]){
        indexValue = i
      }
    }
    console.log(indexValue)
}

elemIndex(inArr, inElem)
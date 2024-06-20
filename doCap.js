let inStr = prompt('Enter a String');

function capitalize(str) {
    return console.log(str.replace(/\b\w/g,
    function cap(str){
        return str.toUpperCase()
    }))
}

capitalize(inStr)
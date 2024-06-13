let inWords = prompt('Enter the Words')

function isLong(orgSen) {
    let splited = orgSen.split(' ')
    let longWord = '';
    for (let i = 0; i < splited.length; i++) {
        if(splited[i].length > longWord.length){
            longWord = splited[i]
        }
    }
 alert(longWord)
}

isLong(inWords) 
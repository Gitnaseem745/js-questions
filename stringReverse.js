function reverseString(orgString) {
    let revString = '';
    for (let i = orgString.length - 1; i >=0; i--) {
        revString += orgString[i];
    }
    return alert(revString);
};

let input = prompt('Enter a String');

reverseString(input)



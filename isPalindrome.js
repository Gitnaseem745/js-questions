let word = prompt('Enter a Word');

function isPalindrome(word) {
    let revWord = '';
    for (let i = word.length - 1; i >= 0; i--) {
        revWord += word[i];       
    }
    if(word == revWord){
        alert(word + ' ' + 'is a Palindrome')
    } else{
        alert(word + ' ' + 'is not a Palindrome')
    }
    
}

isPalindrome(word)
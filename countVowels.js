let inSen = prompt('Enter a Sentence')

function isVowel(sen) {
    sen = sen.toLowerCase();
    let vowelCount = '';
    for (let i = 0; i < sen.length; i++) {
        if( sen[i] == 'a' || sen[i] == 'e' || sen[i] == 'i' || sen[i] == 'o' || sen[i] == 'u' ){
        vowelCount += sen[i]
    }
  }
  alert(vowelCount.length)
}

isVowel(inSen)
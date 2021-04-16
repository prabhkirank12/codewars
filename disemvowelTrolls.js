// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

function disemvowel(str) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var newStr = '';
  
  for ( let i = 0; i <= str.length - 1; i++){
    let char = str[i];
    if(!vowels.includes(char.toLowerCase())){
      newStr+= char;
    }
  }
  return newStr;
}
// 1.SUM ZERO
let array = [28, 43, -12, 30, 4, 0, 12]

let value = "False"
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    if (i !== j) {
      if (array[i] + array[j] === 0) {
        value = "True"
      } 
    }
  }
}

console.log(value);
// RUNTIME OF CODE IS O(n2)

// 2.UNIQUE CHARACTERS
function hasUniqueChars(word) {
    let uniqueChars = new Set([])
    for (let i = 0; i < word.length; i++) {
      uniqueChars.add(word[i])
    }
    return uniqueChars.size === word.length
  }
  
  console.log(hasUniqueChars('Moonday'))
  //RUNTIME OF CODE IS O(n)

// 3.PANGRAM SENTENCE
  const pangram = (str) => {

    const lower = str.toLowerCase();
    const letters = lower.match(/[a-z]/gi);
    const uniques = new Set(letters);
    
    if (uniques.size == 26) return "Pangram";
    else return "Not pangram";
  
  };
  
  console.log(pangram("The quick brown fox jumps over the lazy dog"));
  console.log(pangram("Not a pangram lol"));
  //RUNTIME OF CODE IS O(n)
  
//4. LONGEST WORD
function findLongestWord(arr) {
    let longest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > longest.length) {
            longest = arr[i];
        }
    }
    return longest.length;
}

let arr = ["hi", "hello", "greetings", "salutations"];

console.log(findLongestWord(arr));
//RUNTIME OF CODE IS O(n2)
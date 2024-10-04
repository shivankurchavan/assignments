/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // Function to clean and sort a string
  const cleanString = (str) => {
    return str
        .toLowerCase()               
        .split('')                    
        .sort()           
        .join('');                
};

const sortedStr1 = cleanString(str1);
const sortedStr2 = cleanString(str2);

return sortedStr1 === sortedStr2;
}

module.exports = isAnagram;

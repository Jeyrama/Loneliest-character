/*
Complete the function which accepts a string and return an array of 
character(s) that have the most spaces to their right and left.

Notes:
  the string can have leading/trailing spaces - you should not count them.
  the strings contain only unique characters from a to z.
  the order of characters in the returned array doesn't matter.

Examples:
  "a b  c"                        -->  ["b"]
  "a bcs           d k"           -->  ["d"]
  "    a b  sc     p     t   k"   -->  ["p"]
  "a  b  c  de"                   -->  ["b", "c"]
  "     a  b  c de        "       -->  ["b"]
  "abc"                           -->  ["a", "b", "c"]
*/


// Solution

const loneliest = (str) => {
  str = str.trim();
  let result = []; let maxSpace = 0;
  for(let i = 0; i < str.length; i++) {
      let countSpace = 0;
      if(str[i] === " ") continue;
      for(let j = i - 1;j>=0;j--) {
          if(str[j]!=" ") break;
          countSpace++;
      }
      for(let j = i + 1;j < str.length;j++) {
          if(str[j]!=" ") break;
          countSpace++;
      }
      if(countSpace > maxSpace) {
          result = [str[i]];
          maxSpace = countSpace;
      } 
      else if(countSpace === maxSpace) {
          result.push(str[i]);
      }
  }
  return result;
}

// or
/**
 * Problem: 1.3 URLify | Page 90 | Cracking the Coding Interview 6th
 * Algorithm author: Harold Gonzalez
 * Twitter: @haroldcng
 * Questions: harold.gonzalez.tech@gmail.com
 */

/* This approach is different from the author's, but I think is
   easier because of the language. If you have another approach,
   JUST PUSH IT! ... and I'll check it ;) */

'use strict';

let urlify = (str, trueLength) => {
  let answer = "";
  for(let i=0; i<str.length; i++){
    if(i !== trueLength ){
      if(str[i] === ' '){
        answer += '%20';
      }else{
        answer += str[i];
      }
    }else{
      break;
    }
  }
  return answer;
};

// Run it!
console.log(urlify("Mr John Smith    ", 13));
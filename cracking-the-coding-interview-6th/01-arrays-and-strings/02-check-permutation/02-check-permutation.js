/**
 * Problem: 1.2 Check permutation | Page 90 | Cracking the Coding Interview 6th
 * Algorithm author: Harold Gonzalez
 * Twitter: @haroldcng
 * Questions: harold.gonzalez.tech@gmail.com
 */

'use strict';

let checkPermutation = (baseStr, comparedStr) => {

    // Length should be the same to be a permutation
    if(baseStr.length !== comparedStr.length){
        return false;
    }

    let hashString = new Array();

    // Convert string into hash mapping frequencies
    for(let i=0; i<baseStr.length; i++){
        hashString[baseStr[i]] = hashString[baseStr[i]] === undefined ? 1 : hashString[baseStr[i]] + 1;
    }
    
    // Check
    for(let i=0; i<comparedStr.length; i++){
        if(hashString[comparedStr[i]] !== undefined){
            hashString[comparedStr[i]] = hashString[comparedStr[i]] - 1;
            if(hashString[comparedStr[i]] < 0){
              return false
            }
        }else{
            return false;
        }
    }
    return true;
}

// Run it!
console.log(checkPermutation("abbc","bbca"));  // true
console.log(checkPermutation("abbc","bbda"));  // false

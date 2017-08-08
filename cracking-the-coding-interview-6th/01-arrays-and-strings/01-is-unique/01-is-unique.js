/**
 * Problem: 1.1 Is unique | Page 90 | Cracking the Coding Interview 6th
 * Algorithm author: Harold Gonzalez
 * Twitter: @haroldcng
 * Questions: harold.gonzalez.tech@gmail.com
 */
'use strict';

let isUnique =  (inputStr) => {

    let hashTable = new Array();

    for(let i=0; i<inputStr.length; i++){
        if(hashTable[inputStr[i]] === undefined){
            hashTable[inputStr[i]] = true;
        }else if(hashTable[inputStr[i]]){
            return false;
        }
    }
    return true;
};

// Run it !
console.log(isUnique("hello")); // true
console.log(isUnique("world")); // false
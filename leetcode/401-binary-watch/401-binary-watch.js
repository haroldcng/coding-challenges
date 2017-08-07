/**
 * 401. Binary Watch:  https://leetcode.com/problems/binary-watch/
 * Author: Harold Gonzalez
 * Twitter: @haroldcng
 * Questions -> harold.gonzalez.tech@gmail.com
 */

'use strict';

let readBinaryWatch = (num) => {    
    let answer = new Array();    
    for(let h=0; h<12; h++){
       for(let m=0; m<60; m++){
            if( (countOnes(h) + countOnes(m)) == num ){
               // Adds a leading zero for the minutes if needed
               answer.push(m<10 ? h + ":0" + m : h + ":" + m);
            }
        } 
    }    
    return answer;    
};

/* This function counts the ones in a binary number using bitwise operations. 
   It works for positive whole numbers less than 32-bit, which is the scope of the challenge. */

let countOnes = (num) => {    
    let counter = 0;
    while(num !== 0){        
        if( (num & 1) === 1){
           counter++;
        }
        num = num >> 1;
    }
    return counter;                
};

// Run it!
console.log(readBinaryWatch(1));
/**
 * 002. Add two numbers:  https://leetcode.com/problems/add-two-numbers/
 * Difficulty: Medium
 * Author: Harold Gonzalez
 * Twitter: @haroldcng
 * Questions: harold.gonzalez.tech@gmail.com
 */

'use strict';

 /* Definition for singly-linked list. */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

let addTwoNumbers = (l1, l2) => {

    let av1 = l1;
    let av2 = l2;
    
    let carry = 0;
    
    let answer = new ListNode(l1.val + l2.val);
    let answerRoot = answer;
    
    while(true){
        if((av1.next !== null) && (av2.next !== null)){
            if( (av1.next.val + av2.next.val) > 9){
                answer.next = new ListNode(  ((av1.next.val + av2.next.val) % 10) + carry );
                carry = 1;
            }else{
                answer.next = new ListNode(av1.next.val + av2.next.val + carry);
                carry = 0;
            }            
            av1 = av1.next;
            av2 = av2.next;
            answer = answer.next;
        }else if((av1.next !== null) && (av2.next === null)){
            answer.next = new ListNode(av1.next.val + carry);
            av1 = av1.next;
            carry = 0;
        }else if((av1.next === null) && (av2.next !== null)){
            answer.next = new ListNode(av2.next.val + carry);
            av2 = av2.next;
            carry = 0;
        }else{
            break;
        }
    }
    return answerRoot;
};

/* Proposed test case */
let l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

let l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

console.log(addTwoNumbers(l1,l2));
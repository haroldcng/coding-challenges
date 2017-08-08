/**
 * Problem: 2.2 Return Kth to last | Page 94 | Cracking the Coding Interview 6th
 * Algorithm author: Harold Gonzalez
 * Twitter: @haroldcng
 * Questions: harold.gonzalez.tech@gmail.com
 */
'use strict';

/* Data Structure Definition */
function ListNode(v){
    this.val = v;
    this.next = null;
}

/* NOTE: This answer is ITERATIVE.
   We're assuming index as a clean input beetween 0 and the size of the list.
   When index = 0 -> Returns all the list.
   When index = list size -> Returns null */
let returnKthToLast = (head, index) => {
    let node = head;
    for(let i=0; true; i++){
        if(i === index){
            return node;
        }
        node = node.next;
    }
};

/* Sample List */
let head = new ListNode(0);
head.next = new ListNode(1);
head.next.next = new ListNode(2);
head.next.next.next = new ListNode(3);
head.next.next.next.next = new ListNode(4);
head.next.next.next.next.next = new ListNode(5);

// Run it!
console.log(returnKthToLast(head,3));

/**
 * Problem: 2.1 Remove dups | Page 94 | Cracking the Coding Interview 6th
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

let removeDups = (head) => {
    let elements =  new Set();
    let node = head;
    while(node.next !== null){
        elements.add(node.val);
        if(elements.has(node.next.val)){
            node.next = node.next.next;
        }else{
            node = node.next;
        }        
    }
    return head;
};

/* Sample List */
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(2);
head.next.next.next = new ListNode(3);

// Run it!
console.log(removeDups(head));
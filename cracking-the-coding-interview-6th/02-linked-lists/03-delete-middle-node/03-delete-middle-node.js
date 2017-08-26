/**
 * Problem: 2.3 Delete middle node | Page 94 | Cracking the Coding Interview 6th
 * Algorithm author: Harold Gonzalez
 * Twitter: @haroldcng
 * Questions: harold.gonzalez.tech@gmail.com
 */

'use strict';

let printLinkedList = require('../../lib/linked-lists').printLinkedList;
let ListNode = require('../../lib/linked-lists').ListNode;

let deleteMiddleNode = (node) => {
    if( (node === null) || (node.next === null) || (node.next.next === null) ){
        console.error("Cannot solve");
        return;
    }else{
        node.next = node.next.next
    }
}

/* Sample List */
let head = new ListNode(0);
head.next = new ListNode(1);
head.next.next = new ListNode(2);
head.next.next.next = new ListNode(3);
head.next.next.next.next = new ListNode(4);
head.next.next.next.next.next = new ListNode(5);

deleteMiddleNode(head.next.next.next);
printLinkedList(head);
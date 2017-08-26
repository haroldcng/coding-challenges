/**
 * Linked lists utilities
 * Algorithm author: Harold Gonzalez
 * Twitter: @haroldcng
 * Questions: harold.gonzalez.tech@gmail.com
 */

'use strict';

/**
 * Definition of Linked List Node Data Structure
 */
module.exports.ListNode = function(v){
    this.val = v;
    this.next = null;
};

 /**
  * Prints a linked list from the given node to the end
  */
 module.exports.printLinkedList = (node) => {

        while(node !== null){
            process.stdout.write(node.val + " -> ");
            node = node.next;
        }
        console.log("NULL");
 };
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
    let temp = head;
    let previous = head;

    if (temp && temp.next) {
        temp = temp.next;
    } else {
        return head;
    }
    console.log(previous!.next);

    while (previous!.next) {
        if (temp!.val === previous!.val) {
            console.log();
            previous!.next = temp!.next;
            temp = temp!.next;
        }
        else {
            previous = temp;
            temp = temp!.next;
        }
    }
    return head;
};
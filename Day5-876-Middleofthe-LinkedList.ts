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

function middleNode(head: ListNode | null): ListNode | null {
    const middle: number = findMiddle(head);

    if (!head!.next) {
        return head;
    }
    let curr: ListNode | null = head!.next;
    let prev: ListNode | null = head;

    for (let i = 1; i < middle; i++) {
        prev = curr;
        curr = curr!.next;
    }

    prev!.next = null;
    head = curr;


    function findMiddle(head: ListNode | null): number {
        let len = 1;
        let temp = head;
        while (temp!.next) {
            temp = temp!.next;
            len++;
        }

        if (len % 2 === 0) {
            return (len / 2 + 1) - 1;
        } else {
            return Math.ceil(len / 2) - 1;
        }
    }

    return head;
};
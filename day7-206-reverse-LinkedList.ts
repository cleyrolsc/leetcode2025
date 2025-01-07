// Definition for singly-linked list.
class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

function reverseList(head: ListNode | null): ListNode | null {
    let temp = head;
    let prev: ListNode | null = null;
    let next: ListNode | null = temp?.next || null;

    while (temp !== null) {
        temp.next = prev;
        prev = temp;
        temp = next;
        next = next?.next || null;
    }

    return prev; // Return the new head of the reversed list
}


//Definition for singly-linked list.
class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}


function removeElements(head: ListNode | null, val: number): ListNode | null {
    let temp = head?.next;
    let prev = head;

    if (head?.next === null && head?.val === val || head === null) return null;

    while (prev !== null) {
        if (prev.val === val) {
            prev.next = null;
            this.head = temp;
            this.prev = temp;
            temp = temp?.next;

        }
        else if (temp?.val === val) {
            prev.next = temp.next;
            temp.next = null;
            temp = prev.next;
        } else {
            this.prev = temp;
            temp = temp?.next;
        }
    }

    return head;
};
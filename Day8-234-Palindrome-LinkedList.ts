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

function isPalindrome(head: ListNode | null): boolean {

    if (head === null || head.next === null) {
        return true;
    }

    let dummy: ListNode | null | undefined = new ListNode(head.val);
    let dummyHead = dummy;
    let current: ListNode | null = head.next;
    while (current) {
        dummy.next = new ListNode(current.val);
        dummy = dummy.next;
        current = current.next;
    }
    dummy = dummyHead;

    let temp: null | ListNode = head;
    let prev: null | ListNode | undefined = null;
    let next = temp?.next;
    let len = 0;

    while (temp !== null) {
        temp.next = prev;
        prev = temp;
        temp = next;
        if (next) {
            next = next.next;
        }
        len++;
    }

    while (len > 0) {
        if (dummy?.val !== prev?.val) {
            return false;
        }
        dummy = dummy?.next;
        prev = prev?.next;
        len--;
    }

    return true;
}
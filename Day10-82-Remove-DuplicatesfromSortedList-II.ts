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

function deleteDuplicates(head: ListNode | null): ListNode | null {
    if (!head) return null;
    let dummyNode = new ListNode(0, head);
    let current = dummyNode;
    while (current.next && current.next.next) {
        if (current.next.val === current.next.next.val) {
            let duplicateVal = current.next.val;
            while (current.next && current.next.val === duplicateVal) {
                current.next = current.next.next;
            }
        } else {
            current = current.next;
        }
    }
    return dummyNode.next;
};
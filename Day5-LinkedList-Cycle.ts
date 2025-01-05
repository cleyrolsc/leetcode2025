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

function hasCycle(head: ListNode | null): boolean {
    const mySet: Set<ListNode> = new Set();
    if (!head || !head.next) return false;

    function found(head: ListNode | null): boolean {
        let temp = head;

        while (temp !== null) {
            if (mySet.has(temp)) {
                return true;
            } else {
                mySet.add(temp);
            }
            temp = temp.next;
        }
        return false;
    }
    return found(head);
}


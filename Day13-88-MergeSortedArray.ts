/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let mergedArray: number[] = [];
    let i = 0;
    let j = 0;
    while (i < m && j < n) {
        if (nums1[i] < nums2[j]) {
            mergedArray.push(nums1[i]); i++;
        } else {
            mergedArray.push(nums2[j]); j++;
        }
    }
    while (i < m) {
        mergedArray.push(nums1[i]); i++;
    }
    while (j < n) {
        mergedArray.push(nums2[j]); j++;
    }
    for (let k = 0; k < mergedArray.length; k++) {
        nums1[k] = mergedArray[k];
    }
};
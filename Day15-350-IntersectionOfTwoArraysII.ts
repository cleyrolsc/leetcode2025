function intersect(nums1: number[], nums2: number[]): number[] {
    let result: number[] = [];
    let nums2Copy = [...nums2];  // Make a copy so we don't modify the original

    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2Copy.length; j++) {
            if (nums1[i] === nums2Copy[j]) {
                result.push(nums1[i]);
                nums2Copy[j] = undefined;  // Mark as used
                break;
            }
        }
    }

    return result;
};
function removeDuplicates(nums: number[]): number {
    let mySet: Set<number> = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (mySet.has(nums[i])) {
            nums.splice(i, 1);
            i--;
        } else {
            mySet.add(nums[i]);
        }

    }

    let count = 0;
    mySet.forEach((item) => count++);
    return count;
};
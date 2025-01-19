function singleNumber(nums: number[]): number {
    let mySet: Set<number> = new Set();
    let number;

    for (let i = 0; i < nums.length; i++) {
        if (mySet.has(nums[i])) {
            mySet.delete(nums[i]);
        } else {
            mySet.add(nums[i]);
        }
    }

    for (let number of mySet) {

        return number;
    }
    return -1;

};
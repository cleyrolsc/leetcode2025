function majorityElement(nums: number[]): number {
    let count = 0;
    let maxNum = 0;

    for (let i = 0; i < nums.length; i++) {
        if (count === 0) {
            maxNum = nums[i];
        }
        count += (nums[i] === maxNum) ? 1 : -1;
    }

    return maxNum;

};
function maxAdjacentDistance(nums: number[]): number {
    let max = Math.abs(nums[0] - nums[nums.length - 1]);
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i === nums.length - 1) {
            return max;
        } else {
            sum = Math.abs(nums[i] - nums[i + 1]);
        }

        max = max > sum ? max : sum;
    }
    return max;
};
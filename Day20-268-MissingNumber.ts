function missingNumber(nums: number[]): number {
    nums.sort((a, b) => a - b);
    console.log(nums);
    if (!nums.includes(0)) return 0;
    if (!nums.includes(1)) return 1;
    for (let i = 1; i < nums.length; i++) {
        let result = nums[i + 1] - nums[i];
        if (result > 1) {
            return nums[i] + 1;
        }
    }
    return nums.length;
};
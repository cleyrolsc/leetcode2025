function isArraySpecial(nums: number[]): boolean {

    if (nums.length === 1) return true;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] % 2 === 0 && nums[i + 1] % 2 !== 0) {
            continue;
        } else if (nums[i] % 2 !== 0 && nums[i + 1] % 2 === 0) {
            continue;
        } else {
            return false;
        }


    }
    return true;
};
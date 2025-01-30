function smallerNumbersThanCurrent(nums: number[]): number[] {
    let count = 0;
    let numbers = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (j != i && nums[j] < nums[i]) {
                count++;
            }
        }
        numbers.push(count);
        count = 0;
    }
    return numbers;
};
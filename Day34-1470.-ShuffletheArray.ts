function shuffle(nums: number[], n: number): number[] {
    let myArr = [];
    for (let i = 0; i < n; i++) {
        myArr.push(nums[i]);
        myArr.push(nums[i + n]);
    }
    return myArr;
};

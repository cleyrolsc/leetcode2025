function twoSum(numbers: number[], target: number): number[] {
    let myArr = [];
    let start = 0;
    let end = numbers.length - 1;
    while (start < end) {
        const sum = numbers[start] + numbers[end];

        if (sum === target) {
            myArr.push(start + 1);
            myArr.push(end + 1);
            return myArr;
        } else if (sum < target) {
            start++;
        } else {
            end--;
        }
    }
    return [];
};
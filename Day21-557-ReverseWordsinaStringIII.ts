function reverseWords(s: string): string {
    let reverseArr: string[] = [];
    let joinArr = s.split(" ");
    for (let i = 0; i < joinArr.length; i++) {
        reverseArr.push(joinArr[i].split('').reverse().join(''));
    }
    return reverseArr.join(" ");
};

reverseWords("Let's take LeetCode contest");
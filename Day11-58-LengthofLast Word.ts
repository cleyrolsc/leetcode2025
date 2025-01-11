function lengthOfLastWord(s: string): number {
    let myArr: string[] = [];
    s = s.trim();
    myArr = s.split(' ');
    return myArr[myArr.length - 1].length;;
};
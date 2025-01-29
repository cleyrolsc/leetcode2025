function scoreOfString(s: string): number {
    let sum = 0;
    for (let i = 0; i < s.length - 1; i++) {
        let result = Math.abs(s[i].charCodeAt(0) - s[i + 1].charCodeAt(0));
        sum += result;
    }
    return sum;
};
function shortestToChar(s: string, c: string): number[] {
    let myArr: number[] = [];

    for (let i = 0; i < s.length; i++) {
        let closest = s.length;
        for (let j = 0; j < s.length; j++) {
            if (s[j] === c) {
                let distance = Math.abs(i - j);
                if (distance < closest) {
                    closest = distance;
                }
            }
        }
        myArr.push(closest);
    }
    return myArr;
};
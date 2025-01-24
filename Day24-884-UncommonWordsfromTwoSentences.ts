function uncommonFromSentences(s1: string, s2: string): string[] {
    let myMap = new Map();
    let result = [];

    let newS1 = s1.split(" ");
    let newS2 = s2.split(" ");
    let greater = newS1 < newS2 ? newS2 : newS1;
    for (let i = 0; i < newS1.length; i++) {
        myMap.set(newS1[i], (myMap.get(newS1[i]) || 0) + 1);
    }
    for (let i = 0; i < newS2.length; i++) {
        myMap.set(newS2[i], (myMap.get(newS2[i]) || 0) + 1);
    }

    myMap.forEach((value: number, key) => {
        if (value === 1) {
            result.push(key);
        }
    });
    return result;
};
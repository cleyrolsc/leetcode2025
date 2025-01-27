function checkIfPangram(sentence: string): boolean {
    let mySet = new Set();
    for (let i = 0; i < sentence.length; i++) {
        mySet.add(sentence[i]);
    }

    return mySet.size === 26;
}
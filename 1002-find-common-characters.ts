function commonChars(words: string[]): string[] {
    let common = words[0].split('');

    for (let i = 1; i < words.length; i++) {
        let newCommon: string[] = [];
        let word = words[i].split('');
        for (let char of common) {
            let index = word.indexOf(char);
            if (index !== -1) {
                newCommon.push(char);
                word.splice(index, 1);
            }
        }
        common = newCommon;
    }

    return common;
};
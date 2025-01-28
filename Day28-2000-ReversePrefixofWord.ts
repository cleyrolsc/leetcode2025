function reversePrefix(word: string, ch: string): string {
    let needReverse = '';
    let reverse = "";
    let index = word.indexOf(ch);
    for (let i = 0; i <= index; i++) {
        needReverse += word[i];
    }

    let newWord = word.split("").slice(index + 1).join("");

    let newWord2 = newWord.split("");

    for (let i = 0; i <= index; i++) {
        newWord2.unshift(needReverse[i]);
    }

    return newWord2.join("");
};
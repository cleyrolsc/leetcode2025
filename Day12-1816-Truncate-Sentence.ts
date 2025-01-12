function truncateSentence(s: string, k: number): string {
    let newArr = s.split(" ");
    return newArr.splice(k).join(" ");
};
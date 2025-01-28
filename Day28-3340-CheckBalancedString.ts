function isBalanced(num: string): boolean {
    let even = 0;
    let odd = 0;

    for (let i = 0; i < num.length; i++) {
        let number = parseInt(num[i]);

        if (i % 2 === 0) {
            even += number;
        } else {
            odd += number;
        }
    }
    return even === odd;
}
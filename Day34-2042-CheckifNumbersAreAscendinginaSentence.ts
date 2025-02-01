function areNumbersAscending(s: string): boolean {
    let c = s.split(" ");
    let count = 0;

    for (let i = 0; i < c.length; i++) {
        if (!isNaN(Number(c[i]))) {
            let num = Number(c[i]);
            if (num <= count) { 
                return false;
            }
            count = num;
        }
    }

    return true;
}

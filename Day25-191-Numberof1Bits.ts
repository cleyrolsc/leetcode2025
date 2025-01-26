function hammingWeight(n: number): number {
    let number = n;
    let binaryNumber = [];
    function myFunction(n: number) {
        binaryNumber.push(n % 2);

        if (n > 0) {
            myFunction(Math.floor(n / 2));
        }


    }
    myFunction(number);
    let count = 0;
    for (let i = 0; i < binaryNumber.length; i++) {
        if (binaryNumber[i] === 1) count++;
    }
    console.log(binaryNumber);
    return count;
};
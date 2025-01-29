function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    let result: boolean[] = [];
    let greatest = 0;
    for (let i = 0; i < candies.length; i++) {
        greatest = candies[i] > greatest ? candies[i] : greatest;
    }

    for (let i = 0; i < candies.length; i++) {
        let calculation = candies[i] + extraCandies;
        if (calculation >= greatest) {
            result.push(true);
        } else {
            result.push(false);

        }

    }
    return result;
};
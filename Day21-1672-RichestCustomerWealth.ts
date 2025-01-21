function maximumWealth(accounts: number[][]): number {
    let rich = 0;
    let richest = 0;
    for (let i = 0; i < accounts.length; i++) {
        for (let j = 0; j < accounts[i].length; j++) {
            rich += accounts[i][j];
        }
        if (richest <= rich) {
            richest = rich;
        }
        rich = 0;
    }
    return richest;
};
function stableMountains(height: number[], threshold: number): number[] {
    let count = [];
    for (let i = 1; i < height.length; i++) {
        if (height[i - 1] > threshold) {
            count.push(i);
        }
    }
    return count;
};
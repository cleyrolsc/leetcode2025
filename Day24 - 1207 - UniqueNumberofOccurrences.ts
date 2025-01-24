function uniqueOccurrences(arr: number[]): boolean {
    const myMap = new Map();
    let mySet: Set<number> = new Set();

    for (let i = 0; i < arr.length; i++) {
        myMap.set(arr[i], (myMap.get(arr[i]) || 0) + 1);
    }

    const ocurrences = Array.from(myMap.values());

    for (let i = 0; i < ocurrences.length; i++) {
        mySet.add(ocurrences[i]);
    }

    return ocurrences.length === mySet.size;
};
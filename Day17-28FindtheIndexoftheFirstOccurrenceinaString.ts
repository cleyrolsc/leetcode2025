function strStr(haystack: string, needle: string): number {
    console.log(needle[0]);
    if (haystack.includes(needle)) {
        return haystack.indexOf(needle);
    }

    return -1;
};
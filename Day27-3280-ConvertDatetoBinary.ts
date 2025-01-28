function convertDateToBinary(date: string): string {
    let myArray = date.split("-");
    let newDate = "";
    let binaryNumber;
    let binaryString = [];
    for (let i = 0; i < myArray.length; i++) {
        let num = Number(myArray[i]);
        binaryNumber = num.toString(2);
        binaryString.push(binaryNumber.toString());
    }
    return binaryString.join("-");
};
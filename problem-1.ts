{
    // Problem = 1;
    // Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.
    function sumArray(numbers: number[]): number {

        const reduceNumber = numbers.reduce((accumulator, currentValue) => {
            const sum = accumulator + currentValue;
            return sum;
        })
        return reduceNumber;

    }



    // const inputNumber = [1,2,3, 4, 5];
    // const res = sumArray(inputNumber)
    // console.log(res);
}
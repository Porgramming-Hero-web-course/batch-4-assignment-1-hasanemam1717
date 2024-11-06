{
    // Problem = 1;
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
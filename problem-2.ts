{
    // Problem =2;
    // Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

    
    function removeDuplicates(numbers: number[]): number[] {
        const result =numbers.filter((element, index) => numbers.indexOf(element) === index);
        return result;
    }

    // console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
}
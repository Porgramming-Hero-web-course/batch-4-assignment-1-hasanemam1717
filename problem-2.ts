{
    // Problem =2;
    function removeDuplicates(numbers: number[]): number[] {
        return numbers.filter((element, index) => numbers.indexOf(element) === index);
    }

    // console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
}
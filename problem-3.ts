{
    //Problem-3

    function countWordOccurrences(sentence: string, word: string): number {
        const lowerCaseSentence = sentence.toLowerCase();
        const lowerCaseWord = word.toLowerCase();

        const words = lowerCaseSentence.split(/\b/);
        const result = words.filter(word => word === lowerCaseWord).length;
        return result;
    }

    // console.log(countWordOccurrences("TypeScript is great. I love typescript!", "typescript")); 

}
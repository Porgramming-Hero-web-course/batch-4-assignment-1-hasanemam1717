{
    //Problem-3

    function countWordOccurrences(sentence: string, word: string): number {
        const lowerSentence = sentence.toLowerCase();
        const lowerWord = word.toLowerCase();

        const words = lowerSentence.split(/\b/);
        const result = words.filter(word => word === lowerWord).length;
        return result;
    }

    // console.log(countWordOccurrences("TypeScript is great. I love typescript!", "typescript")); 

}
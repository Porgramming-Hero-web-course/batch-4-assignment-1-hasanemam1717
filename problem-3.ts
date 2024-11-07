{
    //Problem-3
    // Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.

    function countWordOccurrences(sentence: string, word: string): number {
        const Sentence = sentence.toLowerCase();
        const Word = word.toLowerCase();
        const words = Sentence.split(" ");
        const count = words.filter(w => w === Word).length;
        return count;
    }

    // const res= countWordOccurrences("I love typescript", "typescript");
    // console.log(res);




}
{
    //Problem-3

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
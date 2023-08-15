export default function wordLengths(theSentence) {
    var sum = 0;
    var theWords = theSentence.split(' ');
    for (let i = 0; i < theWords.length; i++) {
        sum = sum + theWords[i].length;
    }
    return sum;
}
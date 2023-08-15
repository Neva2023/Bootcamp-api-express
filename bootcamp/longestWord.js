export default function longestWord(sentence) {
    var words = sentence.split(' ');
    let longWord = '';
    for (var i = 0; i < words.length; i++) {
        if (words[i].length >= longWord.length) {
            longWord = words[i]
        };
    }
    return longWord;
}
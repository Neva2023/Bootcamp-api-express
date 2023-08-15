export default function shortestWord(sentence2) {
    var theWords = sentence2.split(' ');
    let shortestWordy = theWords[0];
    for (var i = 0; i < theWords.length; i++) {
        if ((theWords[i].length) <= shortestWordy.length) {
            shortestWordy = theWords[i];
        }
    }
    return shortestWordy;
}

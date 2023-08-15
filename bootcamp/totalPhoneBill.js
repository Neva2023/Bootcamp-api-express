export default function totalPhoneBill(theString) {
    var totalCost = 0;
    var theList = theString.split(', ');
    for (var i = 0; i < theList.length; i++) {
        if (theList[i] === ('call')) {
            totalCost = totalCost + 2.75;
        }
        else if (theList[i] === ('sms')) {
            totalCost = totalCost + 0.65;
        }
    }
    return 'R' + totalCost.toFixed(2);
}


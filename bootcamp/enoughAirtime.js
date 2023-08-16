export default function enoughAirtime(usage, availAirtime) {
    var totalCost = 0;
    var theList = usage.split(',');
    for (var i = 0; i < theList.length; i++) {
        if (theList[i] === ('call')) {
            totalCost = totalCost + 1.88;
        }
        else if (theList[i] === ('sms')) {
            totalCost = totalCost + 0.75;
        }
        else if (theList[i] === ('data')) {
            totalCost = totalCost + 12;
        }
    }
    if (totalCost < availAirtime) {
        return 'R' + (availAirtime - totalCost).toFixed(2);
    }
    else if (totalCost >= availAirtime) {
        return "R" + 0.000.toFixed(2);
    }
}
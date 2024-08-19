const repeatString = function(str, numTimes) {
    if (numTimes < 0) {
        return 'ERROR';
    }

    let result = "";
    for (let i = 0; i < numTimes; i++) {
        result = result + str;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;

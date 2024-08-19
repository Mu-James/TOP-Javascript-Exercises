const sumAll = function(numOne, numTwo) {
    if ((typeof numOne != 'number' || typeof numTwo != 'number') ||
        (numOne < 0 || numTwo < 0) || 
        (!Number.isInteger(numOne) || !Number.isInteger(numTwo))) {
        return 'ERROR';
    }

    let result = 0;
    const minNum = Math.min(numOne, numTwo);
    const maxNum = Math.max(numOne, numTwo);
    for (let i = minNum; i <= maxNum; i++) {
        result = result + i;
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;

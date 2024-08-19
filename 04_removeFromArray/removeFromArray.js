const removeFromArray = function(arr, ...elementsToRemove) {
    const resultArray = [];
    arr.forEach((item) => {
        if (!elementsToRemove.includes(item)) {
            resultArray.push(item);
        }
    })
    return resultArray;
};

// Do not edit below this line
module.exports = removeFromArray;

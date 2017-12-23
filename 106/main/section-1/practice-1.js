'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
    var i, j;
    var result = [];
    for (i = 0; i < collectionA.length; i++)
    {
        for (j = 0; j < collectionB.length; j++)
            if (collectionA[i] === collectionB[j])
                result.push (collectionA[i]);
    }
    return result;
};

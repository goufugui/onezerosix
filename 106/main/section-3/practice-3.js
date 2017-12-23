'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    var i, j = 0, x;
    var collectionC = [];
    collectionC[0] = new Object();
    collectionC[0].key = 'a';
    collectionC[0].count = 1;


    for (i = 1; i < collectionA.length; i++)
    {
        if (collectionA[i] === collectionA[i-1])
            collectionC[j].count++;
        else
        {
            j++;
            collectionC[j] = new Object();
            collectionC[j].key = collectionA[i];
            collectionC[j].count = 1;
        }
    }
    for (i = 0; i < collectionC.length; i++) {
        for (j = 0; j < objectB.value.length; j++) {
            if (collectionC[i].key === objectB.value[j]) {
                if (collectionC[i].count >= 3) {
                    x = parseInt(collectionC[i].count / 3);
                    collectionC[i].count -= x;
                }
            }
        }
    }
    return collectionC;
}

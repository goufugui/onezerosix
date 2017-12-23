'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    var i, j;
    for (i = 0; i < collectionA.length; i++)
    {
        for (j = 0; j < objectB.value.length; j++)
        {
            if (collectionA[i].key === objectB.value[j])
                collectionA[i].count--;
        }
    }
    return collectionA;
}

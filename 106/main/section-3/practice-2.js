'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    var i, j, x;
    for (i = 0; i < collectionA.length; i++)
    {
        for (j = 0; j < objectB.value.length; j++)
        {
            if (collectionA[i].key === objectB.value[j])
            {
                if (collectionA[i].count >= 3)
                {
                    x = parseInt(collectionA[i].count / 3);
                    collectionA[i].count -= x;
                }
            }
        }
    }
    return collectionA;
}

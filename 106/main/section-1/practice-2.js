'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
    var i, j, s;
    var result = [];
    for (i = 0; i < collectionA.length; i++)
    {
        for (j = 0; j < collectionB.length; j++)
        {
          for (s = 0; s < collectionB[j].length; s++)
          {
              if (collectionA[i] === collectionB[j][s])
                  result.push (collectionA[i]);
          }
        }
    }
    return result;
}

'use strict';

module.exports = function countSameElements(collection) {
    var i, j = 0;
    var result = [];
    result[0] = new Object();
    result[0].key = 'a';
    result[0].count = 1;
    for (i = 1; i < collection.length; i++)
    {
       if (collection[i] === collection[i-1])
         result[j].count++;
       else
       {
         j++;
         result[j] = new Object();
         result[j].key = collection[i];
         result[j].count = 1;
       }
    }
    return result;
}

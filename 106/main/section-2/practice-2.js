'use strict';

module.exports = function countSameElements(collection) {
    var i, j = 0, m = 0;
    var result = [];
    result[0] = new Object();
    result[0].key = 'a';
    result[0].count = 1;
    for (i = 1; i < collection.length; i++)
    {
      if (collection[i].length == 1)
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
      else
      {
          for (m = 0; m < collection[i].length; m++)
          {
              if (collection[i][m] === collection[i-1])
              {
                while (collection[i][m] != '-')
                  m++;
                result[j].count = collection[i][m+1];
                break;
              }
              else
              {
                  j++;
                  result[j] = new Object();
                  result[j].key = collection[i][m];
                  while (collection[i][m] != '-')
                    m++;
                  result[j].count = parseInt(collection[i][m+1]);
                  break;
              }
          }
      }
    }
    return result;
};

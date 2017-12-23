'use strict';

module.exports = function countSameElements(collection) {
    var i, j = 0, m = 0;
    var result = [];
    result[0] = new Object();
    result[0].name = 'a';
    result[0].summary = 1;
    for (i = 1; i < collection.length; i++)
    {
        if (collection[i].length == 1)
        {
            if ((collection[i] === collection[i-1]) && collection[i-1].length == 1)
                result[j].summary++;
            else if (collection[i] === collection[i-1][0])
                result[j].summary++;
            else
            {
                j++;
                result[j] = new Object();
                result[j].name = collection[i];
                result[j].summary = 1;
            }
        }
        else
        {
            for (m = 0; m < collection[i].length; m++)
            {
                if ((collection[i-1].length == 1) && (collection[i][m] === collection[i-1]))
                {
                    while ((collection[i][m] != '-') && (collection[i][m] != ':')&& (collection[i][m] != '['))
                        m++;
                    if (collection[i][m] == '-' || collection[i][m] == ':')
                    {
                        result[j].summary += collection[i][m + 1];
                        result[j].summary = parseInt (result[j].summary);
                    }
                    else
                    {
                        var v = m;
                        while (collection[i][v] != ']')
                            v++;
                        for (m++; m < v; m++)
                            result[j].summary += parseInt(collection[i][m]);
                    }
                    break;
                }
                else if((collection[i-1].length != 1) && (collection[i][m] === collection[i-1][0]))
                {
                    while ((collection[i][m] != '-') && (collection[i][m] != ':') && (collection[i][m] != '['))
                        m++;
                    if (collection[i][m] == '-' || collection[i][m] == ':')
                        result[j].summary += parseInt(collection[i][m+1]);
                    else
                    {
                        var v = m;
                        while (collection[i][v] != ']')
                            v++;
                        for (m++; m < v; m++)
                            result[j].summary += parseInt(collection[i][m]);
                    }
                    break;
                }
                else
                {
                    j++;
                    result[j] = new Object();
                    result[j].name = collection[i][m];
                    while ((collection[i][m] != '-') && (collection[i][m] != '[') && (collection[i][m] != ':'))
                        m++;
                    result[j].summary =  parseInt(collection[i][m+1]);
                    break;
                }
            }

        }
    }
    return result;
};

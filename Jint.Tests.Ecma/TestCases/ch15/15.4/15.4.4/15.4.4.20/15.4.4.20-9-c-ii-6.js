/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.20/15.4.4.20-9-c-ii-6.js
 * @description Array.prototype.filter - arguments to callbackfn are self consistent
 */


function testcase() {

        var obj = { 0: 11, length: 1 };
        var thisArg = {};

        function callbackfn() {
            return this === thisArg &&
                arguments[0] === 11 &&
                arguments[1] === 0 &&
                arguments[2] === obj;
        }

        var newArr = Array.prototype.filter.call(obj, callbackfn, thisArg);

        return newArr.length === 1 && newArr[0] === 11;
    }
runTestCase(testcase);

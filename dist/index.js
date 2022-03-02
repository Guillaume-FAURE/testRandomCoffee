"use strict";
function compareString(string1, string2) {
    var string1Array = Array.from(string1); //string1 decomposed in characters
    var commonChar = []; //string to return
    for (var i = 0; i < string1.length; i++) {
        var tempRegex = new RegExp("".concat(string1Array[i])); //return all the character, we could have add another regex comparison if we wanted just the letter
        var tempChar = string2.match(tempRegex);
        if (tempChar !== null && commonChar.includes(string1Array[i]) === false) {
            commonChar.push(tempChar[0]);
        }
    }
    commonChar.sort(); //if we want to have the common characters in alphabetical order
    console.log(commonChar);
    return commonChar;
}
var firstObject = { x: 0, y: 1, z: 2, a: 10, b: 20, e: 30 }, secondObject = { x: 0, y: 1, z: 2, a: 10, c: 20, d: 30 };
function intersection(o1, o2) {
    return Object.keys(o1).filter({}.hasOwnProperty.bind(o2));
}
console.log(intersection(firstObject, secondObject));
//Test function
compareString("Episthelmoz", "Episteme");

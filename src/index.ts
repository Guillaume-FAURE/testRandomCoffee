/**
 * @description Return the common characters of 2 strings, this function use RegExp to verify if the second string contain character of the first one.
 * @param {string} string1 First string
 * @param {string} string2 Second string
 * @returns {Array<string>} the common characters of the 2 strings passed in parameters
 */

export function compareString(string1: string, string2: string): Array<string> {
  const string1Array = Array.from(string1); // string1 decomposed in characters
  const commonChar: Array<string> = []; // string to return
  for (let i = 0; i < string1.length; i++) {
    const tempRegex = new RegExp(`${string1Array[i]}`); // return all the character, we could have add another regex comparison if we wanted just the letter
    const tempChar = string2.match(tempRegex);
    if (tempChar !== null && commonChar.includes(string1Array[i]) === false) {
      commonChar.push(tempChar[0]);
    }
  }
  commonChar.sort(); // if we want to have the common characters in alphabetical order
  // console.log(commonChar);
  return commonChar;
}

/**
 * @description Return the common characters of 2 strings, this function use the prototype includes() of the strings to verify if the second string contain character of the first one.
 * @param {string} string1 First string
 * @param {string} string2 Second string
 * @returns {Array<string>} the common characters of the 2 strings passed in parameters
 */
export function compareStringBis(
  string1: string,
  string2: string,
): Array<string> {
  const string1Array = Array.from(string1); // string1 decomposed in characters
  const commonChar: Array<string> = []; // string to return
  for (let i = 0; i < string1.length; i++) {
    if (
      string2.includes(string1Array[i]) &&
      commonChar.includes(string1Array[i]) === false
    ) {
      commonChar.push(string1Array[i]);
    }
  }
  commonChar.sort(); // if we want to have the common characters in alphabetical order
  // console.log(commonChar);
  return commonChar;
}

/**
 * @param {Array<unknown>} array1 first array of objects
 * @param {Array<unknown>} array2 second array of objects
 * @returns {Array<unknown>} the common objects of 2 array of objects
 */
export function filteredList(
  array1: Array<unknown>,
  array2: Array<unknown>,
): Array<unknown> {
  return array1.filter((object) =>
    array2.some(
      (object2) => JSON.stringify(object2) === JSON.stringify(object),
    ),
  );
}

/**
 * @description this function will push new value into the suite by iteration with while
 * @param {number} n number of iterations for the suite
 * @returns {Array<number>} an array of the n first number of the fibonnaci suite
 */
export function fibonnaciSuite(n: number): number {
  const res: Array<number> = [0, 1];
  for (let i = 0; i < n; i++) {
    const tmp = res[0];
    res[0] = res[1];
    res[1] = tmp + res[1];
  }
  return res[1];
}

/**
 * @description recursive function to calculate the nth number of the fibonnaci suite
 * @param {number} n number of iteration of the function
 * @param {number} min minimum of the 2 values of the function : f(n-2)
 * @param {number} max maximum of the 2 values of the function : f(n-1)
 * @returns {number} the nth number of the fibonnaci suite
 */
export function fibonnaciSuiteOptimized(n: number, min = 0, max = 1): number {
  return n === 0 ? max : fibonnaciSuiteOptimized(n - 1, max, min + max);
}

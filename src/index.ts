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

export function fibonnaciSuite(n: number): Array<number> {
  let a = 0;
  let b = 1;
  const res: Array<number> = [a, b];
  while (n > 0) {
    if (a < b) {
      a = a + b;
      res.push(a);
    } else {
      b = a + b;
      res.push(b);
    }
    n--;
  }
  return res;
}

export function fibonnaciSuiteOptimized(n: number, min = 0, max = 1): number {
  return n === 0 ? max : fibonnaciSuiteOptimized(n - 1, max, min + max);
}

# [Software Engineer] Technical Test -  Guillaume FAURE
## Algorithm
### 1. Write a function that takes two strings as arguments and returns a string containing only the characters found in both strings. How would you test it?
```ts
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
```
### 2. Given two different lists of objects, come up with an efficient solution to find the intersection of the two lists.
```ts
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
```
### 3. Implement this function:
```ts
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
```
I tested all the 5 functions with jest, the file is pretty big, you can see it in the file test/index.test.ts.

## SQL
### 1. What is a primary key?
A primary key is an unique key not null which can identify a table.
We can link this key to other table.
### 2. You know that data is in a particular table but you don’t know what the schema is for that table. How could you figure it out?
We can figure the schema of the data of a table by selecting all the data of the table :
```sql
SELECT *
FROM table;
```
### 3. What are some different kinds of joins? How do they work? Can you give examples?
There is 4 differents join, the words in parenthesis aren't mandatory:
- (INNER) JOIN : The inner join return intersection of 2 tables
- LEFT (OUTER) JOIN : the left outer join return the first entire table and the intersection of the 2 tables
- RIGHT (OUTER) JOIN : the right outer join return the second entire table and the intersection of the 2 tables
- FULL (OUTER) JOIN : the full outer join return the 2 entire tables.
Example with images with the tables created :
INNER JOIN
```sql
SELECT *
FROM friends
JOIN gender ON friends.gender_id = gender.id;
```
LEFT JOIN
```sql
SELECT *
FROM friends
LEFT JOIN gender ON friends.gender_id = gender.id;
```
RIGHT JOIN
```sql
SELECT *
FROM friends
RIGHT JOIN gender ON friends.gender_id = gender.id;
```
FULL OUTER JOIN
```sql
SELECT *
FROM friends
FULL OUTER JOIN gender ON friends.gender_id = gender.id;
```

### 4. What is the difference between GROUP BY and ORDER BY?
ORDER BY order the tables in function of value, number or character (order alphabetical) ascendant or descendant with the keyword ASC or DESC
Example : to have the database of some persons order by alphabetical order
```sql
SELECT * 
FROM persons
ORDER BY name ASC
```
GROUP BY will permit to group all the persons with a same characteristic
Example : we want to count the persons in the IMT in function of their origin's city.
We can combinate ORDER BY and GROUP BY.
```sql
SELECT COUNT(name), city
FROM friends
GROUP BY city
ORDER BY city ASC
```
### 5. Write a query to delete duplicate rows from a table.
To delete duplicate rows from a table we can use the keyword PARTITION BY, a CTE (Common Table Expression).
Example: We have a database of persons with characteristic name, surname, email.
```sql
WITH count_duplicate AS
(SELECT *, ROW_NUMBER() OVER (
PARTITION BY name, city, age ORDER BY name,city, age) 
AS row_num FROM friends) 
DELETE FROM count_duplicate
WHERE row_num > 1
```

## Systems Design
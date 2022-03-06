# [Software Engineer] Technical Test -  Guillaume FAURE
## Algorithm
### 1. Write a function that takes two strings as arguments and returns a string containing only the characters found in both strings. How would you test it?
```ts
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
```
### 2. Given two different lists of objects, come up with an efficient solution to find the intersection of the two lists.
```ts
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
```
### 3. Implement this function:
```python
f(0) = 0
f(1) = 1
f(n) = f(n-1) + f(n-2)
```
```ts
/**
 * @description this function will push new value into the suite by iteration with while
 * @param {number} n number of iterations for the suite
 * @returns {Array<number>} an array of the n first number of the fibonnaci suite
 */
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

Example is worth a thousand words :

The tables we will use in the 4 examples:
![Tables](https://user-images.githubusercontent.com/75898072/156549021-74db25bb-68e5-41d7-84d6-fb9d175003f7.png)

INNER JOIN
```sql
SELECT *
FROM friends
JOIN gender ON friends.gender_id = gender.id;
```
![INNER JOIN](https://user-images.githubusercontent.com/75898072/156549025-0bc8bf94-71e1-4af2-a922-6f4c528228cc.png)

LEFT JOIN
```sql
SELECT *
FROM friends
LEFT JOIN gender ON friends.gender_id = gender.id;
```
![LEFT JOIN](https://user-images.githubusercontent.com/75898072/156549027-d2503452-5fe2-4c34-9465-ddcac4560795.png)

RIGHT JOIN
```sql
SELECT *
FROM friends
RIGHT JOIN gender ON friends.gender_id = gender.id;
```
![RIGHT JOIN](https://user-images.githubusercontent.com/75898072/156549029-2c6944c5-9e61-48ff-87fb-5e3235c88df0.png)

FULL OUTER JOIN
```sql
SELECT *
FROM friends
FULL OUTER JOIN gender ON friends.gender_id = gender.id;
```
![FULL OUTER JOIN](https://user-images.githubusercontent.com/75898072/156549032-08b7ec9b-0a52-48ad-91e1-149460e43a58.png)

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
### 1. If you are a web administrator, and you receive an **DDoS Attack**, where there are “N millions” of hits at the same time, how do you avoid the servers going down?
A good practice to have the time to react in case of DDoS Attack is to Overprovision bandwith than we are likely to use.
In case of DDoS Attack, we can also buy more time if :
- We rate limit our server to prevent the server to be overwhelmed
- Timeout connections more aggressively
- Add filter to the router to drop packets from the sources of attack we detect

Call our ISP(Internet Service Provider) of Hosting Provider will surely help.
They can null route our traffic to avoid the HTTP request (the most common attack on web server is overwhelming quantity of HTTP request).

We can also call a DDoS Mitigation company with better infrastructure and technology to keep the website online during the DDoS Attack.

The precedent steps can be automated by a DDoS playbook, by knowing our typical inbound traffic profile, a program will detect the anomaly of DDoS Attack directly (it can include AI).

To rate limit our server, it exist the npm module express-rate-limit :
https://www.npmjs.com/package/express-rate-limit 
```js
import rateLimit from 'express-rate-limit'

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

// Apply the rate limiting middleware to all requests
app.use(limiter)
```

### 2. How would you design a link shortening URL system?
For a link shortening URL system, we need to create short URL that redirect the user to the original page.
This URL generated will have a certain lifespan and will be store in a dataBase.
A table URL will have:
- the URL generated
- the original URL
- an expiration date
- possibly an user ID to link the table URL with a table Person

There will be no relation link between table so it's more interesting to have a dataBase written in noSQL to have better performance such as MongoDB.

By using minuscule, majuscule and number [A-Z,a-z,0-9] we have 62 possibility by character
The length of the URL we generate will depends of our needs, with 6 characters, we will have :
62**6 possilité soit 56 billions of possibilities.
We could take the X first character of the hash constant to have our short URL.

The generation of URL will be 4 steps :
- User ask to shorten an URL
- Server send URL to encoding program (random suite of 6 characters)
- Program store short URL into dataBase
- Database verify no duplication and send the URL or an error to the server
- Server send the short URL to the user or ask for another URL to the encoding program in case of error

To avoid the need of verification of duplicate, we could assignate a number to a given URL, 0 for the first, 1 for the second...etc and encode this number (from 0 to 56 billions) to have our hash code. This manner of doing can imply a security threat because we use a sequential manner of generating URL.
The problem is we will need a counter server to associate our URL to a number and a large number of server will send request to this server to encode the number and store it in a dataBase.

To avoid this problem of request to a single server and the dependance to a single point of failure, we can add a distributed systems manager as Zookeeper and have each systems take the counter part of a millions of number for example.
That way, if a server die, we lose 1 millions keys and not 56 billions.

To improve efficience of our shortening URL system we can add :
- A load balancer, a system we will see what servers (all linked to our Zookeeper counter) is the less occupied one, the one link with the less URL.
- A cache of the most use URL to have faster access to the most demanded URL, we can put in the cache the X% the most demanded URL and update it each time a URL is more demanded.

## Javascript
### 1. What JavaScript libraries (or frameworks if you would prefer) have you used?
Reactjs and Nextjs, Expressjs for node, also TypeScript but it's not really a framework.

### 2. Explain AJAX in as much detail as possible. How does it work? What have you used it for in the past?
AJAX or Asynchronous JavaScript and XML uses a combination of XMLHttpRequest and JavaScript and the DOM to display data to users.
AJAX not have the obligation to use XML data, it can use plain text or JSON.
AJAX asunchronous nature permit to communicate with a server, exchange data and update the webpage without having to refresh the page.
An user will send a HTTPRequest to the server, the server will process the HTTPRequest, create a response and send it back to the browser which will process it and update the webpage.

In my precedent internship, I had to fetch a big XML file with PDF info to show a PDF representation in the web browser.

### 3. You want to get a query string parameter from the browser’s URL, how would you do it?
```js
const queryString = window.location.search; // Get the query string parameters
const urlParams = new URLSearchParams(queryString); // Parse the query string and return a URLSearchParams object
const parameters1 = urlParams.get('parameters1'); // return the value of the parameter1 in the browser's URL
```

### 4. What are ways to write object oriented JavaScript? For example, explain how inheritance works.
In JavaScript, it's possible to work only with functions but also to use OOP with classes.
This classes work like in java with a constructor, functions and parameters.
In TypeScript, it's possible to replace this classes with interface to have objects with parameters and with functions that take in parameters this objects.
With classes, it's possible to have inheritance, for example a classe imtStudents can inherit the parameters and the functions of the classe persons
```js
class persons{
    name;
    age;
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    function gettingOlder(){
        this.age++;
    }
}

class imtStudents extends persons {
    promo;
    UV;
    constructor(name,age,promo,UV){
        super(name,age);
        this.promo=promo;
        this.age=age;
    }
    function repeatYear(){
        this.promo++;
    }
}
const me = new imtStudents('Guillaume',21,2023,'NU')
me.gettingOlder();
```
In our example me can use the inherit the parameters of persons but also its functions.

### 5. What is a "closure" and how/why use one?
A closure is a function enclosed in another function, the local variables of the functions will be reusable. It's possible to build funny and flexible functions.
```js
function buildSentence(string){
    return (stringToAdd) => {
        console.log(string.concat(' ',stringToAdd));
        return buildSentence(string.concat(' ',stringToAdd));
    }
}

const sentence1 = buildSentence("I'm");
const sentence2 = sentence1('your');
const sentence3 = sentence2('father');
const sentence4 = sentence3('Luc');
// Also possible with sentence = buildSentence("I'm")('your')('father')('Luc')
```
It's also possible to keep in memory the impact of the precedent function to manipulate a variable.
```js
let counter = (() => {
    let privateCounter = 0;
    return {
      add: (n) => {
        privateCounter += n;
      },
      value: () => {
        return privateCounter;
      }
    };
})();
counter.add(12);
console.log(counter.value()) // 12
counter.add(43)
console.log(counter.value()) // 55
```
### 6. Make this work:
```js
Array.prototype.duplicator = function() { 
    this.forEach((val)=>{
        this.push(val)
    })
}
const test = [1,2,3,4,5]
test.duplicator();
console.log(test); // [1,2,3,4,5,1,2,3,4,5]
```

## Regular Expressions
### 1. Write a regular expression to match a machine's MAC address.
```js
const regexMacAddress = /[0-9A-F][0-9A-F][-:][0-9A-F][0-9A-F][-:][0-9A-F][0-9A-F][-:][0-9A-F][0-9A-F][-:][0-9A-F][0-9A-F][-:][0-9A-F][0-9A-F]/gi;
const macAddress='9c:da:3e:c6:1c:77'
console.log(regexMacAddress.test(macAddress));
```
The only problem with the RegExp is that if an address combine - and : it will accept it while it's not a MAC address.
### 2. Write a simple regex for email validation?
```js
const regexEmail = /[a-z0-9-.]+@[a-z0-9-.]+\.[a-z0-9-.]+/gi;
const email1='guillome.fore@gmail.com'
const email2='rando-92648e585ff2599af7f7d3fc@candidates.welcomekit.co'
console.log(regexEmail.test(email1));
console.log(regexEmail.test(email2));
```

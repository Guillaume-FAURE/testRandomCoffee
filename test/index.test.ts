import {
  compareString,
  compareStringBis,
  filteredList,
  fibonnaciSuite,
  fibonnaciSuiteOptimized,
} from '../src/index';

test('compare 2 strings and return the common characters', () => {
  expect(compareString('Philippe Poutou', 'Jean-Marie Bigard')).toStrictEqual([
    ' ',
    'e',
    'i',
  ]);
  expect(compareString('Episteme', 'Episthelmoz')).toStrictEqual([
    'E',
    'e',
    'i',
    'm',
    'p',
    's',
    't',
  ]);
  expect(compareString('Philippe Poutou', 'Jean-Marie Bigard')).toEqual(
    compareStringBis('Philippe Poutou', 'Jean-Marie Bigard'),
  );
});
test('Get the intersection of 2 lists of objects', () => {
  const list1 = [
    {
      name: 'guillaume',
      job: 'web dev',
      school: 'IMT',
    },
    {
      name: 'romain',
      job: 'web dev',
      school: 'IMT',
    },
  ];
  const list2 = [
    {
      name: 'guillaume',
      job: 'web dev',
      school: 'IMT',
    },
    {
      name: 'julie',
      job: 'lawyer',
      school: 'universite de nanterre',
    },
  ];
  expect(filteredList(list1, list2)).toStrictEqual([
    {
      name: 'guillaume',
      job: 'web dev',
      school: 'IMT',
    },
  ]);
  compareString;
  expect(fibonnaciSuite(14)).toStrictEqual([
    0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610,
  ]);
  expect(fibonnaciSuiteOptimized(13)).toStrictEqual(377);
  expect(fibonnaciSuite(14)[13]).toEqual(fibonnaciSuiteOptimized(12));
});

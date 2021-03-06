// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1
// Some data we can work with
const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];
const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
  const fifteen = inventors.filter(inventor => inventor.year <= 1599 && inventor.year >= 1500);

  let fifteenHTML = '';
  for(i = 0; i < fifteen.length; i++) {
    fifteenHTML += `<li>${fifteen[i].first} ${fifteen[i].last}, ${fifteen[i].year} - ${fifteen[i].passed}</li>`
  }
  document.getElementById('fifteen').innerHTML = fifteenHTML

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
  const firstLast = inventors.map(inventor => `${inventor.first} ${inventor.last}`);

  let firstLastHTML = '';
  for(i = 0; i < firstLast.length; i++) {
    firstLastHTML += `<li>${firstLast[i]}</li>`;
  }
  document.getElementById('inventor-names').innerHTML = firstLastHTML;

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
  const birthdaySort = inventors.sort(function(a, b){
    return a.year - b.year;
  });

  console.log(birthdaySort)

  let birthdaySortHTML = '';
  for(i = 0; i < birthdaySort.length; i++) {
    birthdaySortHTML += `<li>${birthdaySort[i].first} ${birthdaySort[i].last}, ${birthdaySort[i].year} - ${birthdaySort[i].passed}</li>`
  }
document.getElementById('birthday').innerHTML = birthdaySortHTML;

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
  const allYears = inventors.reduce((total, inventor) => {
        return total + (inventor.passed - inventor.year);
      }, 0);

  document.getElementById('years').innerHTML = `${allYears} years`;

// 5. Sort the inventors by years lived
  const yearsLived = inventors.sort((a, b) => {
    const oldest = a.passed - a.year;
    const next = b.passed - b.year;
    return  oldest > next ? -1 : 1;
  })

  let yearsLivedHTML= '';
  for(i = 0; i < yearsLived.length; i++) {
    yearsLivedHTML += `<li>${yearsLived[i].first} ${yearsLived[i].last} - ${yearsLived[i].passed - yearsLived[i].year} years</li>`
  }

  document.getElementById('years-lived').innerHTML = yearsLivedHTML;

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// Run these commands in console on this page ^

  // const category = document.querySelector('.mw-category');
  // const links = Array.from(category.querySelectorAll('a'));
  //
  // const streetNames = links.map(linkText => { return linkText.textContent; })
  // const de = streetNames.filter( de => { return de.includes('de'); } )
  //
  // console.log(de);

// 7. sort Exercise
// Sort the people alphabetically by last name

const peopleSort = people.sort((lastPerson, nextPerson) => {
  const[aLast, aFirst] = lastPerson.split(', ');
  const[bLast, bFirst] = nextPerson.split(', ');

  return nextPerson > lastPerson ? -1 : 1;
})

let personList = '';
for (i = 0; i < peopleSort.length; i ++) {
  personList += `<li>${peopleSort[i]}</li>`
}

document.getElementById('people').innerHTML = personList;

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

const countedData = data.reduce((allData, dataItem) => {
  if (dataItem in allData) {
    allData[dataItem]++;
  } else {
    allData[dataItem] = 1;
  }
  return allData;
}, {});

console.log(countedData);

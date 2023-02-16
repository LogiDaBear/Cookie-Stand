
//Function to generate random number of customers per hour
// function getRandomCust(min,max){
//   return Math.floor(Math.random() * (max - min + 1) + min)
//   console.log(getRandomCust)
// }

//Globals Lab 6
// let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
// let cityLocation = ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima'];
// let salesPage = document.getElementById("salesPage");

// *************Globals Lab 7**************
let hoursSection = document.getElementById('hours');
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let citySales = []; //storing city location, sales and objects
let table = document.createElement('table');
// *************Constructor Functions Lab 7**************
function City(location, minCust, maxCust, avgcookieSale){
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgcookieSale = avgcookieSale;
  this.cookieBought = [];
  this.dailyTotal = 0;
}

//*************Helper Functions/Utilities for random customer Lab 7 */
function randomCust(min,max) {

  return Math.floor(Math.random() * (max - min + 1) + min);
}

//************Prototype Methods Lab 7 */
City.prototype.getdailyTotal = function(){
      for (let i = 0; i < hours.length; i++) {
      
        // console.log(cust);
      let cookieHours = Math.floor(randomCust(this.minCust, this.maxCust) * this.avgcookieSale);
      // console.log(cookieHours);
      this.cookieBought.push(cookieHours);
      this.dailyTotal += cookieHours
  }
 
};

City.prototype.render = function(){

 

  let articleElem = document.querySelector('article');
  let pElem = document.querySelector('p');
  let head = document.querySelector('header');

  let tHead = document.createElement('tHead');
  head.appendChild(tHead);


  articleElem.appendChild(table);
  



  let row3 = document.createElement('tr');


  
  let row2 = document.createElement('tr');
  table.appendChild(row2);


  let th1Elem = document.createElement('th');
  th1Elem.textContent = this.location;
  row2.appendChild(th1Elem);

  for (let i = 0; i < this.cookieBought.length; i++) {
    let td1Elem = document.createElement('td');
    td1Elem.textContent = `${this.cookieBought[i]}`;
    row2.appendChild(td1Elem);
  }
  
  let td2Elem = document.createElement('td');
  pElem.textContent = `Total: ${this.dailyTotal}`;
  row3.appendChild(td2Elem);
  

  // let ulElem = document.createElement('ul');
  // article.appendChild(ulElem);

  // let pElem = document.createElement('p');
  // pElem.textContent = `Total: ${this.dailyTotal}`;
  // article.appendChild(pElem);
//**Lab 7 Guide below *** Lab 6 Original above/  

  //let table = document.createElement('table');
  // articleElem.appendChild(table);

  // let row1 = document.createElement('tr');
  // salesPage.appendChild(row1);
  
  // let th1Elem = document.createElement('th');
  // row1.appendChild(th1Elem);
  
  // let th2Elem = document.createElement('th');
  // row1.appendChild(th2Elem);
  
  // let th3Elem = document.createElement('th');
  // row1.appendChild(th3Elem);
  
  // let row2 = document.createElement('tr');
  // salesPage.appendChild(row2);
  
  // let td1Elem = document.createElement('td');
  // row2.appendChild(td1Elem);
  
  // for (let i = 0; i < this.cookieBought.length; i++) {
  //   let liElem = document.createElement('li');
  //   liElem.textContent = `${hours[i]}: ${this.cookieBought[i]} Cookies`;
  //   ulElem.appendChild(liElem);
  // }
};



function makeHeader(){
  let row1 = document.createElement('tr');
  table.appendChild(row1);

  let tdBlank =document.createElement('td');
  row1.appendChild(tdBlank);

  for (let i = 0; i < hours.length; i++){
    let tdHour = document.createElement('td');
    tdHour.textContent = hours[i];
    row1.appendChild(tdHour);

  }
}

//**********Executable Code Lab7 */
// push new city information to the array
let seattle = new City('seattle', 23, 65, 6.3);
let tokyo = new City('tokyo', 3, 24, 1.2);
let dubai = new City('dubai', 11, 38, 3.7);
let paris = new City('paris', 20, 38, 2.3);
let lima = new City('lima', 2, 16, 4.6);

citySales.push(seattle, tokyo, dubai, paris, lima);
console.log(citySales);

//helper function that calls needed methods
function renderAll(){
  makeHeader();
  for (let i = 0; i < citySales.length; i++){
    citySales[i].getdailyTotal();
    citySales[i].render();
  }
}



renderAll();

//Object literals
// let seattle = {
//   location: 'Seattle',
//   minCust: 23,
//   maxCust: 65,
//   avgcookieSale: 6.3,
//   cookieBought: [],
//   dailyTotal: 0,
//   getCust: function () {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },

//   // Reece Renninger helped me figure this out because he is a blessing:

  // cookieCount: function () {
  //   for (let i = 0; i < hours.length; i++) {
  //     let cookieHours = Math.floor(this.getCust() * this.avgcookieSale);
  //     this.cookieBought.push(cookieHours);
  //     this.dailyTotal += cookieHours
//       //Long version of ^
//       //this.dailyTotal = this.dailyTotal + this.cookieHours[i]
//     }

//   },



//   render: function () {
//     let article = document.createElement('article');
//     salesPage.appendChild(article);

//     let h2 = document.createElement('h2');
//     h2.textContent = this.location;
//     article.appendChild(h2);



//     let ulElem = document.createElement('ul');
//     article.appendChild(ulElem);





//     for (let i = 0; i < this.cookieBought.length; i++) {
//       let liElem = document.createElement('li');
//       liElem.textContent = `${hours[i]}: ${this.cookieBought[i]} Cookies`;
//       ulElem.appendChild(liElem);
//     }
//     let pElem = document.createElement('p');
//     pElem.textContent = `Total: ${this.dailyTotal}`;
//     article.appendChild(pElem);
//   }
// };


// let tokyo = {
//   location: 'Tokyo',
//   minCust: 3,
//   maxCust: 24,
//   avgcookieSale: 1.2,
//   cookieBought: [],
//   dailyTotal: 0,
//   getCust: function () {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },

//   cookieCount: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let cookieHours = Math.floor(this.getCust() * this.avgcookieSale);
//       this.cookieBought.push(cookieHours);
//       this.dailyTotal += cookieHours
//       //Long version of ^
//       //this.dailyTotal = this.dailyTotal + cookieHours
//     }

//   },



//   render: function () {
//     let article = document.createElement('article');
//     salesPage.appendChild(article);

//     let h2 = document.createElement('h2');
//     h2.textContent = this.location;
//     article.appendChild(h2);



//     let ulElem = document.createElement('ul');
//     article.appendChild(ulElem);





//     for (let i = 0; i < this.cookieBought.length; i++) {
//       let liElem = document.createElement('li');
//       liElem.textContent = `${hours[i]}: ${this.cookieBought[i]} Cookies`;
//       ulElem.appendChild(liElem);
//     }
//     let pElem = document.createElement('p');
//     pElem.textContent = `Total: ${this.dailyTotal}`;
//     article.appendChild(pElem);
//   }
// };


// let dubai = {
//   location: 'Dubai',
//   minCust: 11,
//   maxCust: 38,
//   avgcookieSale: 3.7,
//   cookieBought: [],
//   dailyTotal: 0,
//   getCust: function () {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },
//   cookieCount: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let cookieHours = Math.floor(this.getCust() * this.avgcookieSale);
//       this.cookieBought.push(cookieHours);
//       this.dailyTotal += cookieHours
//       //Long version of ^
//       //this.dailyTotal = this.dailyTotal + cookieHours
//     }

//   },



//   render: function () {
//     let article = document.createElement('article');
//     salesPage.appendChild(article);

//     let h2 = document.createElement('h2');
//     h2.textContent = this.location;
//     article.appendChild(h2);



//     let ulElem = document.createElement('ul');
//     article.appendChild(ulElem);





//     for (let i = 0; i < this.cookieBought.length; i++) {
//       let liElem = document.createElement('li');
//       liElem.textContent = `${hours[i]}: ${this.cookieBought[i]} Cookies`;
//       ulElem.appendChild(liElem);
//     }
//     let pElem = document.createElement('p');
//     pElem.textContent = `Total: ${this.dailyTotal}`;
//     article.appendChild(pElem);
//   }
// };

// let paris = {
//   location: 'Paris',
//   minCust: 20,
//   maxCust: 38,
//   avgcookieSale: 2.3,
//   cookieBought: [],
//   dailyTotal: 0,
//   getCust: function () {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },

//   cookieCount: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let cookieHours = Math.floor(this.getCust() * this.avgcookieSale);
//       this.cookieBought.push(cookieHours);
//       this.dailyTotal += cookieHours
//       //Long version of ^
//       //this.dailyTotal = this.dailyTotal + cookieHours
//     }

//   },



//   render: function () {
//     let article = document.createElement('article');
//     salesPage.appendChild(article);

//     let h2 = document.createElement('h2');
//     h2.textContent = this.location;
//     article.appendChild(h2);



//     let ulElem = document.createElement('ul');
//     article.appendChild(ulElem);





//     for (let i = 0; i < this.cookieBought.length; i++) {
//       let liElem = document.createElement('li');
//       liElem.textContent = `${hours[i]}: Cookies ${this.cookieBought[i]}`;
//       ulElem.appendChild(liElem);
//     }
//     let pElem = document.createElement('p');
//     pElem.textContent = `Total: ${this.dailyTotal}`;
//     article.appendChild(pElem);
//   }
// };

// let lima = {
//   location: 'Lima',
//   minCust: 2,
//   maxCust: 16,
//   avgcookieSale: 4.6,
//   cookieBought: [],
//   dailyTotal: 0,
//   getCust: function () {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },
//   cookieCount: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let cookieHours = Math.floor(this.getCust() * this.avgcookieSale);
//       this.cookieBought.push(cookieHours);
//       this.dailyTotal += cookieHours
//       //Long version of ^
//       //this.dailyTotal = this.dailyTotal + cookieHours
//     }

//   },



//   render: function () {
//     let article = document.createElement('article');
//     salesPage.appendChild(article);

//     let h2 = document.createElement('h2');
//     h2.textContent = this.location;
//     article.appendChild(h2);



//     let ulElem = document.createElement('ul');
//     article.appendChild(ulElem);





//     for (let i = 0; i < this.cookieBought.length; i++) {
//       let liElem = document.createElement('li');
//       liElem.textContent = `${hours[i]}: Cookies ${this.cookieBought[i]}`;
//       ulElem.appendChild(liElem);
//     }
//     let pElem = document.createElement('p');
//     pElem.textContent = `Total: ${this.dailyTotal}`;
//     article.appendChild(pElem);
//   }
// };
// //Executable Code
// seattle.cookieCount();
// seattle.render();

// tokyo.cookieCount();
// tokyo.render();

// dubai.cookieCount();
// dubai.render();

// paris.cookieCount();
// paris.render();

// lima.cookieCount();
// lima.render();
// DOM Manipulation
// let body = document.querySelector('body');
// let ulElem = document.createElement('ul');
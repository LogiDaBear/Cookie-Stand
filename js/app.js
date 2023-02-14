
//Function to generate random number of customers per hour
// function getRandomCust(min,max){
//   return Math.floor(Math.random() * (max - min + 1) + min)
//   console.log(getRandomCust)
// }

//Globals
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let cityLocation = ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima'];
let salesPage = document.getElementById("salesPage");


//Object literals
let seattle = {
  location: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgcookieSale: 6.3,
  cookieBought: [],
  dailyTotal: 0,
  getCust: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },

  // Reece Renninger helped me figure this out because he is a blessing:

  cookieCount: function () {
    for (let i = 0; i < hours.length; i++) {
      let cookieHours = Math.floor(this.getCust() * this.avgcookieSale);
      this.cookieBought.push(cookieHours);
      this.dailyTotal += cookieHours
      //Long version of ^
      //this.dailyTotal = this.dailyTotal + cookieHours
    }

  },



  render: function () {
    let article = document.createElement('article');
    salesPage.appendChild(article);

    let h2 = document.createElement('h2');
    h2.textContent = this.location;
    article.appendChild(h2);



    let ulElem = document.createElement('ul');
    article.appendChild(ulElem);





    for (let i = 0; i < this.cookieBought.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${hours[i]}: ${this.cookieBought[i]} Cookies`;
      ulElem.appendChild(liElem);
    }
    let pElem = document.createElement('p');
    pElem.textContent = `Total: ${this.dailyTotal}`;
    article.appendChild(pElem);
  }
};


let tokyo = {
  location: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgcookieSale: 1.2,
  cookieBought: [],
  dailyTotal: 0,
  getCust: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },

  cookieCount: function () {
    for (let i = 0; i < hours.length; i++) {
      let cookieHours = Math.floor(this.getCust() * this.avgcookieSale);
      this.cookieBought.push(cookieHours);
      this.dailyTotal += cookieHours
      //Long version of ^
      //this.dailyTotal = this.dailyTotal + cookieHours
    }

  },



  render: function () {
    let article = document.createElement('article');
    salesPage.appendChild(article);

    let h2 = document.createElement('h2');
    h2.textContent = this.location;
    article.appendChild(h2);



    let ulElem = document.createElement('ul');
    article.appendChild(ulElem);





    for (let i = 0; i < this.cookieBought.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${hours[i]}: ${this.cookieBought[i]} Cookies`;
      ulElem.appendChild(liElem);
    }
    let pElem = document.createElement('p');
    pElem.textContent = `Total: ${this.dailyTotal}`;
    article.appendChild(pElem);
  }
};


let dubai = {
  location: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgcookieSale: 3.7,
  cookieBought: [],
  dailyTotal: 0,
  getCust: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  cookieCount: function () {
    for (let i = 0; i < hours.length; i++) {
      let cookieHours = Math.floor(this.getCust() * this.avgcookieSale);
      this.cookieBought.push(cookieHours);
      this.dailyTotal += cookieHours
      //Long version of ^
      //this.dailyTotal = this.dailyTotal + cookieHours
    }

  },



  render: function () {
    let article = document.createElement('article');
    salesPage.appendChild(article);

    let h2 = document.createElement('h2');
    h2.textContent = this.location;
    article.appendChild(h2);



    let ulElem = document.createElement('ul');
    article.appendChild(ulElem);





    for (let i = 0; i < this.cookieBought.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${hours[i]}: ${this.cookieBought[i]} Cookies`;
      ulElem.appendChild(liElem);
    }
    let pElem = document.createElement('p');
    pElem.textContent = `Total: ${this.dailyTotal}`;
    article.appendChild(pElem);
  }
};

let paris = {
  location: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgcookieSale: 2.3,
  cookieBought: [],
  dailyTotal: 0,
  getCust: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },

  cookieCount: function () {
    for (let i = 0; i < hours.length; i++) {
      let cookieHours = Math.floor(this.getCust() * this.avgcookieSale);
      this.cookieBought.push(cookieHours);
      this.dailyTotal += cookieHours
      //Long version of ^
      //this.dailyTotal = this.dailyTotal + cookieHours
    }

  },



  render: function () {
    let article = document.createElement('article');
    salesPage.appendChild(article);

    let h2 = document.createElement('h2');
    h2.textContent = this.location;
    article.appendChild(h2);



    let ulElem = document.createElement('ul');
    article.appendChild(ulElem);





    for (let i = 0; i < this.cookieBought.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${hours[i]}: Cookies ${this.cookieBought[i]}`;
      ulElem.appendChild(liElem);
    }
    let pElem = document.createElement('p');
    pElem.textContent = `Total: ${this.dailyTotal}`;
    article.appendChild(pElem);
  }
};

let lima = {
  location: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgcookieSale: 4.6,
  cookieBought: [],
  dailyTotal: 0,
  getCust: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  cookieCount: function () {
    for (let i = 0; i < hours.length; i++) {
      let cookieHours = Math.floor(this.getCust() * this.avgcookieSale);
      this.cookieBought.push(cookieHours);
      this.dailyTotal += cookieHours
      //Long version of ^
      //this.dailyTotal = this.dailyTotal + cookieHours
    }

  },



  render: function () {
    let article = document.createElement('article');
    salesPage.appendChild(article);

    let h2 = document.createElement('h2');
    h2.textContent = this.location;
    article.appendChild(h2);



    let ulElem = document.createElement('ul');
    article.appendChild(ulElem);





    for (let i = 0; i < this.cookieBought.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${hours[i]}: Cookies ${this.cookieBought[i]}`;
      ulElem.appendChild(liElem);
    }
    let pElem = document.createElement('p');
    pElem.textContent = `Total: ${this.dailyTotal}`;
    article.appendChild(pElem);
  }
};
//Executable Code
seattle.cookieCount();
seattle.render();

tokyo.cookieCount();
tokyo.render();

dubai.cookieCount();
dubai.render();

paris.cookieCount();
paris.render();

lima.cookieCount();
lima.render();
// DOM Manipulation
// let body = document.querySelector('body');
// let ulElem = document.createElement('ul');
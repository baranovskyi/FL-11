const data = [
    {
      '_id': '5b5e3168c6bf40f2c1235cd6',
      'index': 0,
      ' birthday ': '2016-03-18T00:00:00',
      'eyeColor': 'green',
      'name': 'Stein',
      'favoriteFruit': 'apple'
    },
    {
      '_id': '5b5e3168e328c0d72e4f27d8',
      'index': 1,
      ' birthday ': '1991-02-11T00:00:00',
      'eyeColor': 'blue',
      'name': 'Cortez',
      'favoriteFruit': 'strawberry'
    },
    {
      '_id': '5b5e3168cc79132b631c666a',
      'index': 2,
      ' birthday ': '1984-04-17T00:00:00',
      'eyeColor': 'blue',
      'name': 'Suzette',
      'favoriteFruit': 'apple'
    },
    {
      '_id': '5b5e31682093adcc6cd0dde5',
      'index': 3,
      ' birthday ': '1994-04-17T00:00:00',
      'eyeColor': 'green',
      'name': 'George',
      'favoriteFruit': 'banana'
    }
  ];
  
function getNumbers(a) {
    let numbersArray = [];
    for(let i = 0; i < a.length; i++) {
      if (!isNaN(a[i])) {
        numbersArray.push(parseInt(a[i]));
      }
    }
    return numbersArray;
  }
console.log(getNumbers('lkas23ll23l2'));

function findTypes() {
    let type;
    let mass = {};
    for (let i = 0; i < arguments.length; i++) {
      type = typeof arguments[i];
      if(mass.hasOwnProperty(type)) {
        mass[type] += 1;
      } else {
        mass[type] = 1;
      }
    }
    return mass;
  }
console.log(findTypes('1asdf', 1, [1]));

function executeforEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
      callback(arr[i]);
    }
  }

function mapArray(arr, func) {
    let array = [];
    executeforEach(arr, function (el) {
      array.push(func(el));
    });
    return array;
  }
  
  function filterArray(arr, callback){
    let array = [];
    executeforEach(arr, function(filter) {
        if(callback(filter)) {
            array.push(filter)
        }
    });
    return array;
}

function showFormattedDate(date) {
    let newDate = date.toDateString();
    let formattedDate = newDate.substr(newDate.indexOf(' '));
    return 'Date:' + formattedDate;
  }
console.log(showFormattedDate(new Date()));

function canConvertToDate(date){
    let inputDate = new Date(date);
    return !isNaN(inputDate);
  } 
console.log(canConvertToDate('2016-03-18T00:00:00') );

function daysBetween(firstDate, secondDate) {
    let divide = 86400000;
    let difference = secondDate.getTime() - firstDate.getTime();
    let amount = Math.round(difference / divide);
    return amount;
}
console.log(daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00')));

function getAmountOfAdultPeople(data) {
    const yearDays = 365;
    const adultYears = 18;
    let adults = filterArray(data, function (el) {
      let data2 = new Date();
      let data1 = new Date(el[' birthday ']);
      let yearsBetween = daysBetween(data1, data2);
      let personYears = Math.floor(yearsBetween / yearDays);
      return personYears > adultYears;
    });
    return adults.length;
  }
console.log(getAmountOfAdultPeople(data));

function keys(object){
    let array = [];
    for(let i in object){
      if(object.hasOwnProperty(i)){
          array.push(i)
      }
    }
    return array;
}

function values(object) {
    const array = [];
    for (let key in object) {
      if (object.hasOwnProperty(key)) {
        array.push(object[key]);
      }
    }
    return array;
  }

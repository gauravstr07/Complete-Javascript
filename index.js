const myObj = {
  name: "Gaurav",
  email: "gauravstr05@gmail.com",
  age: 26,
};

const anotherObj = {
  alive: true,
  wifeAge: 23,
  hobbies: ["Coocking", "Drowing", "Well-Settle"],
  beverage: {
    morning: "Coffie",
    night: "Milk",
    timepass: "Sirioul",
    time: "3hr",
  },
  action: function () {
    return `Time for make ${this.beverage.morning}`;
  },
};

console.log(anotherObj.action());




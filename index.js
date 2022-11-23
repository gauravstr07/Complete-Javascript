const vahicle = {
  wheels: 4,
  engine: function () {
    return "Vrooooommm...";
  },
  model: {
    color: "Red",
    brand: "Tata",
  },
};

const truck = Object.create(vahicle);
truck.door = 2;
//console.log(truck.model);

const car = Object.create(vahicle);
car.door = 4;
car.model = {
  color: "Black",
  brand: "Ferrari",
};
car.engine = function () {
  return "Booommmbooomm";
};
console.log(car.engine());


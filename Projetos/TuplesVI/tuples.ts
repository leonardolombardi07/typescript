const drink = {
  color: "brown",
  carboneted: true,
  sugar: 40,
};

type Drink = [string, boolean, number];
const pepsi: Drink = ["brown", true, 40];

// Tuples vs Objects
const carSpecs: [number, number] = [400, 3354];
const carStats = {
  horsepower: 400,
  weight: 3354,
};

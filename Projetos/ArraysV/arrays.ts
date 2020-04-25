const carMakers = ["ford", "toyoto", "chevy"];
const dates = [new Date(), new Date()];

const carsByMake = [["f150"], ["corolla"], ["camaro"]];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Help with 'map'
carMakers.map((car: string): string => {
  return car;
});

// Flexible Types
const importantDates = [new Date(), "2030-10-10"];

const annotationImportantDates: (Date | string)[] = [new Date()];

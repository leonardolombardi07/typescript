let apples: number = 5;
let speed: string = "fast";
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

let now: Date = new Date();

//Arrays
let colors: string[] = ["red", "green", "blue"];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, false, false];

//Classes
class Car {}

let car: Car = new Car();

// Object Literal

let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

//Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// Quando usar Type Annotations
//1) Funções que retornam o type 'any'
const json = '{"x": 10, "y": 2 }';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates); // {x: 10, y: 20}

//2) Quando declaramos uma variável numa linha e a utilizamos posteriormente
let words = ["red", "green", "blue"];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
  }
}

//3) Quando existe mais de um type possível
let numbers: number[] = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}

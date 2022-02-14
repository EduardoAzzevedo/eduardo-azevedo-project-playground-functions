// Desafio 1

function compareTrue(value1, value2) {
  if (value1 > 0 && value2 > 0){
  return true;
  }else {
    return false;
  }
}

// Desafio 2

function calcArea(base, height) {
 let area = ((base * height) / 2);
 return area;
}

// Desafio 3
// Para separar a frase e ou as strings: .split()
function splitSentence(text) {
    let splitText = text.split(' ');
  return splitText;
}

// Desafio 4
// Para concatenar : `$ {} , ${}`
function concatName(names) {
    let finalName = names.length - 1;
  return `${names[finalName]}, ${names[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = 0;
  let winsPoints = wins * 3;
  let tiesPoints = ties * 1;
  points += (winsPoints + tiesPoints);
  return points
}

// Desafio 6
// Para achar o maior valor, o uso do primeiro for/in e 
//depois para contar o segundo for/in.)
function highestCount(arrayNumber) {
  let highestNumber = arrayNumber[0];
  let counting = 0;
  for (let keys in arrayNumber) {
    if (arrayNumber[keys] > highestNumber) {
      highestNumber = number[keys]
    } 
  }
  for (let key in arrayNumber) {
    if (arrayNumber[key] === highestNumber) {
      counting += 1;
    }
  }
  return counting;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};

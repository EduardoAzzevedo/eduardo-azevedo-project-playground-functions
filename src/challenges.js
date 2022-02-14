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

function highestCount(numeros) {
  let maiorNumero = numeros[0];
  let contador = 0;
  for (keys in numeros) {
    if (numeros[keys] > maiorNumero) {
      maiorNumero = numeros[keys]
    }
  }
  for (key in numeros) {
    if (numeros[key] === maiorNumero) {
      contador += 1
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)) {
    return 'os gatos trombam e o rato foge';
  }else  if (Math.abs(cat2 - mouse) < Math.abs(cat1 - mouse)) {
    return 'cat2';
  }else {
    return 'cat1';
  }
}

// Desafio 8
function fizzBuzz(numArray) {
  for (let index = 0; index < numArray.length; index += 1) {
    if (numArray[index] % 3 === 0 && numArray[index] % 5 === 0) {
      numArray[index] = 'fizzBuzz';
    } else if (numArray[index] % 3 === 0) {
      numArray[index] = 'fizz';
    } else if (numArray[index] % 5 === 0) {
      numArray[index] = 'buzz';
    } else {
      numArray[index] = 'bug!';
    }
  }
  return numArray;
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

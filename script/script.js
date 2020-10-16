'use strict';
const minRange = 1;
const maxRange = 100;

const isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

function getRandomArbitrary(min, max) {
  return parseInt(Math.random() * (max - min) + min);
}

const gameBot = function () {
  const secretNumber = getRandomArbitrary(minRange,maxRange);
	console.log(secretNumber);
	
  return function gameBotClosure() {
  	let chosenNumber = prompt(`Угадай число от ${minRange} до ${maxRange}`);
  	if (chosenNumber === null){
  		alert("Игра окончена");
  		return;
  	}
  	else if (!isNumber(chosenNumber)){
  		alert("Введите число!");
  		gameBotClosure();
  		return;
  	}
  	else if (chosenNumber < minRange || chosenNumber > maxRange){
  		alert(`Число не в диапазоне от ${minRange} до ${maxRange}`);
  		gameBotClosure();
  		return;
  	}
  	else if (chosenNumber > secretNumber){
  		alert("Загаданное число меньше");
  		gameBotClosure();
  		return;
  	}
  	else if (chosenNumber < secretNumber){
  		alert("Загаданное число больше");
  		gameBotClosure();
  		return;
  	}
  	else {
  		alert("Поздравляю, вы угадали!");
  		return;
  	}
  };
};

const test = gameBot();
test();
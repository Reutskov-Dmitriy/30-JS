"Use strict"
// Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.
const age = prompt('Сколько вам лет?', '');
const message = (age > 0 && age < 12) ? 'ребенок' :
	(age > 11 && age < 18) ? 'подросток' :
		(age > 17 && age < 60) ? 'взрослый' :
			(age > 59) ? 'пенсионер' :
				'неправильный возраст';

alert(message);

// Запитай у користувача 2 числа і знайди найбільший спільний дільник.

const randomArray = [];
const size = 2;
for (let i = 0; i < size; i++) {
	randomArray[i] = prompt('enter array element' + (i + 1));
}
console.log(randomArray);
if (randomArray[0] === randomArray[1]) {
	const greatestCommonDivisor = randomArray[0];
	alert(greatestCommonDivisor);
} else if (randomArray[0] > randomArray[1]) {
	let quotientMultipliedElemArr = (Math.floor(randomArray[0] / randomArray[1]) * randomArray[1]);
	let residual = randomArray[0] - quotientMultipliedElemArr;
	const randomArray2 = [randomArray[1], residual];
	alert(randomArray2)

} else {
	let quotientMultipliedElemArr = (Math.floor(randomArray[1] / randomArray[0]) * randomArray[0]);
	let residual = randomArray[1] - quotientMultipliedElemArr;
	const randomArray2 = [randomArray[0], residual];
}


// Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.
// let weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// for (i = 0; ; i++) {
// 	answer = confirm(`${weekDays[i]}.  Хочеш побачити наступний день?`);
// 	if (!answer) break;
// 	if (i >= 6) {
// 		i = -1;
// 	}

// }

// let weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// for (i = 0; ; i = (i + 1) % weekDays.length) {
// 	answer = confirm(`${weekDays[i]}.  Хочеш побачити наступний день?`);
// 	if (!answer) break;

// }


// let weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// for (i = 0; i <= weekDays.length; i++) {
// 	answer = confirm(`${weekDays[i]}.  Хочеш побачити наступний день?`);
// 	if (answer === true) {
// 		continue;
// 	} else {
// 		break;
// 	}
// }

let weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

for (i = 0; ; i++) {
	if (i >= weekDays.length) i = 0;
	answer = confirm(`${weekDays[i]}.  Хочеш побачити наступний день?`);
	if (!answer) break;

}


/*Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.
Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена (ESC).
Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых строк в этой задаче необязательно.*/
let numberOverHundred

do {
	numberOverHundred = prompt('enter number over one hundred', 0);
} while (numberOverHundred <= 100 && numberOverHundred);

// ВЫЧИСЛЯЕМ ФАКТОРИАЛ
const numberRand = prompt('Calculate Factorial.  Enter number:');

function factorial(n) {
	let fact = 1;
	if (n == 0) return fact;
	for (let i = 1; i <= n; i++) {
		fact *= i;
	}
	return fact;
}

let result = factorial(numberRand);
alert('Factorial number: ' + result);

// Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.

const numberInput = document.getElementById('inputPal');
let palinButton = document.querySelector(`.btn_palindrom`);

palinButton.onclick = checkPalindrom;

function checkPalindrom() {
	const digits = [...numberInput.value].reverse();

	if (digits.join('') === numberInput.value) {
		document.getElementById("answer").innerHTML = 'Palindrom'
	} else {
		document.getElementById("answer").innerHTML = "It's not a Palindrom"
	}
}

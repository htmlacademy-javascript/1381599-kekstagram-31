// Функция для проверки длины строки
const stringLengthCheck = (string = '', maxSymbols = 1) => string.length <= maxSymbols;

stringLengthCheck();
// console.log(stringLengthCheck('проверяемая строка', 20)); true
// console.log(stringLengthCheck('проверяемая строка', 18)); true
// console.log(stringLengthCheck('проверяемая строка', 10)); false


// Функция Палиндром?
const isPalindrome = (string = '') => {
  string = string.replaceAll(' ', '').toLowerCase();

  let reversed = '';

  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
  }
  return string === reversed;
};

// console.log(isPalindrome('топот'));
isPalindrome();


// Дополнительное задание "Извлечение цифр из строки"

const extractNumbers = (string) => {
  let result = '';

  string = string.toString();

  for (let i = 0; i <= string.length - 1; i++) {
    if (Number.isNaN(parseInt(string[i], 10)) === false) {
      result += string[i];
    }
  }
  return result === '' ? NaN : Number(result);
};

extractNumbers();

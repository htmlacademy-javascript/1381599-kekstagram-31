// Функция для проверки длины строки
const stringLengthCheck = (string = '', maxSymbols = 1) => string.length <= maxSymbols;

stringLengthCheck();

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

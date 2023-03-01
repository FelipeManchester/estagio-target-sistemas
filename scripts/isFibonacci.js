export default function isFibbonacci(num) {
  let fib1 = 0;
  let fib2 = 1;
  while (fib2 < num) {
    [fib1, fib2] = [fib2, fib1 + fib2];
  }
  return fib2 === num;
}

const numberInput = document.getElementById('number-input');
const checkButton = document.getElementById('check-button');
const result = document.getElementById('result');

checkButton.addEventListener('click', () => {
  const num = parseInt(numberInput.value);
  if (isNaN(num)) {
    result.textContent = 'Por favor, digite um número válido';
  } else if (isFibbonacci(num)) {
    result.textContent = `${num} Faz parte da sequência Fibonacci`;
  } else {
    result.textContent = `${num} Não faz parte da sequência Fibonacci`;
  }
});

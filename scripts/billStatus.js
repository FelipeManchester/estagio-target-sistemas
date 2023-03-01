export default async function fetchData() {
  const res = await fetch('./dados.json');
  const data = await res.json();
  handleData(data);
}

const handleData = (data) => {
  const total = document.getElementById('total');
  const dayMost = document.getElementById('dayMost');
  const dayLeast = document.getElementById('dayLeast');
  const monthlyAvg = document.getElementById('monthlyAvg');

  let numbers = data.map((element) => element.valor);
  let highest = Math.max(...numbers);
  let positiveNumbers = numbers.filter((number) => number > 0);
  let lowest = Math.min(...positiveNumbers);
  let sum = numbers.reduce((total, number) => total + number, 0);
  let average = sum / 30;
  let numbersGreaterThanAverage = numbers.filter((number) => number > average);

  total.lastChild.textContent = sum;
  dayMost.lastChild.textContent = highest;
  dayLeast.lastChild.textContent = lowest;
  monthlyAvg.children[0].textContent = numbersGreaterThanAverage.length;
  console.log();
};

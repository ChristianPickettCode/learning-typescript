function add(n1: number, n2: number, showResult: boolean) {
  const result = n1 + n2;
  if (showResult) {
    console.log(result);
  } else {
    return result;
  }
}

const num1 = 5;
const num2 = 3.4;
const printResult = true;

add(num1, num2, printResult);

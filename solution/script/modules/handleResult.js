import sumValues from "./sumValues.js";

export default function handleResult (number) {

  const resultElement = document.querySelector("#result");

  const resultValue = sumValues(number);

  if (resultElement) {
    resultElement.innerText = resultValue;
  }
}
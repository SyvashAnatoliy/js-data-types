const btn = document.getElementById("btn");
btn.onclick = main;

function adding() {
  const num1 = 0.1;
  const num2 = 0.2;
  const result = (num1 + num2).toFixed(1);
  alert(result);
}

function stringPlusNumber() {
  let str = "1";
  const num = 2;
  str = Number(str);
  const result = str + num;
  alert(result);
}

function calculateFilesAmount() {
  let flashCapacity = prompt("Enter flash capacity in GB");
  flashCapacity *= 1024;
  const fileSize = prompt("Enter file size in MB");
  const result = (flashCapacity / fileSize).toFixed(1);
  alert(result);
}

function calculateChocolateAmount() {
  const moneyAmount = prompt("Enter the amount of money you have");
  const chocolatePrice = prompt("Enter the price of a chocolate bar");
  const result = (moneyAmount / chocolatePrice).toFixed(1);
  alert(result);
}

function numberReverse() {
  let number = prompt("Enter a three-digit number:");
  number = Number(number);
  let lastDigit = number % 10;
  let middleDigit = Math.floor((number % 100) / 10);
  let firstDigit = Math.floor(number / 100);
  let reversed = `${lastDigit}${middleDigit}${firstDigit}`;
  alert(`Reversed number: ${reversed}`);
}

function deposit() {
  const depositAmount = prompt("Enter the amount you want to deposit for 2 months: ");
  const depositPercent = 5;
  const depositEarnings = (depositAmount * depositPercent) / 100;
  alert("Your deposit earnings for 2 months is: " + depositEarnings);
}

function main() {
  adding();
  stringPlusNumber();
  calculateFilesAmount();
  calculateChocolateAmount();
  numberReverse();
  deposit();
}
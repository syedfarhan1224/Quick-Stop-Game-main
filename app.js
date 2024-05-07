var number_html = document.getElementById("number");
var start_btn = document.getElementById("start_btn");
var user_input = document.getElementById("user_input");
var result = document.getElementById("result");
var num = document.getElementById("num")

var runningNumber = 0;
var interval;

function start() {
  if (user_input.value) {
    interval = setInterval(function () {
      if (runningNumber >= 1000) {
        clearInterval(interval);
        runningNumber = 0;
        number_html.innerText = runningNumber;
        result.innerText = "You are late";
        start_btn.disabled = false;
      } else {
        runningNumber++;
        number_html.innerText = runningNumber;
      }
    }, 10);
    start_btn.disabled = true;
  } else {
    alert("Please Enter the number");
  }
}
function stop() {
  console.log(user_input.value);
  console.log(runningNumber);
  num.innerText = runningNumber
  clearInterval(interval);
  if (user_input.value == runningNumber) {
    result.innerText = "You Win";
  } else {
    result.innerText = "You Lose";
  }
  runningNumber = 0;
  number_html.innerText = 0;
  start_btn.disabled = false;
}

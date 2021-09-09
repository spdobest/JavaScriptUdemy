console.log("Loading anonyous function");
let x = function () {
  console.log("It is an anonymous function");
};
x();

console.log("Use Of anonyous function");
setTimeout(function () {
  console.log("Calling after 1 seconds");
}, 1000);

console.log("Immediete anonyous function execution");
(function () {
  console.log("Hello");
})();

console.log("========Save anonymous function to Constant============");

const fun = function (a, b) {
  console.log("Sum of " + a + " and " + b + " is " + a + b);
};

fun(1, 2);

const startButton = document.getElementById("startButton");

const start = function () {
  console.log("Start Game 1");
};

startButton.addEventListener("click", start);

startButton.addEventListener("click", function () {
  console.log("Start Game 2");
});

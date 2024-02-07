
function clearScreen() {
    document.getElementById("result").value = "";
}
 
function display(value) {
    document.getElementById("result").value += value;
}
 
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}

function clearScreen() {
    document.getElementById("result").value = "";
}

function display(value) {
    document.getElementById("result").value += value;
}

function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}

  var colors = ['#8be7e3', '#f5c064', '#dfd8cc'];
  var currentIndex = 0;

  setInterval(function () {
      var calculator = document.querySelector('.calculator');

      calculator.style.borderColor = colors[currentIndex];

      currentIndex = (currentIndex + 1) % colors.length;
  }, 2000); 
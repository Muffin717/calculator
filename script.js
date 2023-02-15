let result = document.getElementById("result");

function appendToResult(val) {
  result.value += val;
}

function clearResult() {
  result.value = "";
}

function calculate() {

    try {
        let expr = result.value;
        if (expr.includes('/0')) {
          throw new Error('Cannot divide by zero');
        }
        result.value = eval(expr);
      } catch (e) {
        result.value = e.message;
      }

  try {
    result.value = eval(result.value);
  } catch (e) {
    result.value = "Error";
  }

 

}

const result = document.getElementById('result');

function appendValue(value) {
  result.value += value;
}

function clearResult() {
  result.value = '';
}

function calculate() {
  result.value = eval(result.value);
}

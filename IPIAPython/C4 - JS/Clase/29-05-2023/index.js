let temporal = 0;
let operacion = "";
let memory = "";
var input = document.getElementById("result");

function add(num) {
  if (num == 0) {
    if (input.value[input.value.length - 1] != "0" || input.value.length > 1) {
      input.value = input.value + num;
    }
  } else if (num == ".") {
    if (input.value[input.value.length - 1] != "." && input.value != "") {
      input.value = input.value + num;
    }
  } else {
    input.value = input.value + num;
  }
}

function operacionFunction(operador) {
  operacion = operador;
  temporal = input.value;
  input.value = "";
}

function igual() {
  if (operacion != "") {
    input.value = eval(temporal + operacion + input.value);
  }
}

function inverso() {
  input.value = input.value * -1;
}

function porciento() {
  input.value = input.value / 100;
}

function cuadrado() {
  input.value = input.value ** 2;
}

function cubo() {
  input.value = input.value ** 3;
}

function raiz() {
  input.value = input.value ** 0.5;
}

function pi() {
  input.value = 3.14159265359;
}

function cleanInput() {
  if (input.value != "") {
    input.value = "";
  } else {
    temporal = 0;
    operacion = "";
  }
}
/*********************************************[MEMORY]***************************************************/

function operacionMemorys(operador) {
  switch (operador) {
    case "+":
      memory = memory + input.value;
      break;
    case "-":
      memory = memory - input.value;
      break;
    case "r":
      input.value = memory;
      break;
    case "c":
      memory = "";
      break;

    default:
      break;
  }
}

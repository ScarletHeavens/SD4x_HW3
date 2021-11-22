let current, result;
let arr = [];
let display = "";

let calculate = function (arr) {
  let mathOp = {
    addButton: function (x, y) {
      return x + y;
    },
    subtractButton: function (x, y) {
      return x - y;
    },
    multiplyButton: function (x, y) {
      return x * y;
    },
    divideButton: function (x, y) {
      return (x / y).toFixed(1);
    },
  };

  return mathOp[arr[1]](Number(arr[0]), Number(arr[2]));
};

$(".number").click(function () {
  if (arr.length == 1 || arr.length == 3) {
    arr = [];
    display = "";
  }

  display += $(this).val();
  current = display;
  $("#display").val(display);
});

$("#clearButton").click(function () {
  display = "";
  arr = [];
  current = "";
  $("#display").val(display);
});

$(".operation").click(function () {
  if (!arr.length && current != undefined) {
    arr = [current, this.id];
    current = undefined;
    display = "";
  }

  if (arr.length == 2) {
    if (current == undefined) {
      arr[1] = this.id;
    } else {
      arr.push(current);
      result = calculate(arr);
      current = undefined;
      stack = [result, this.id];
      display = "";
      $("#display").val(result);
    }
  }

  if (arr.length == 3 && current == undefined) {
    result = calculate(arr);
    arr = [];
    display = "";
    arr = [result, this.id];
  }
});

$("#equalsButton").click(function () {
  if (arr.length == 3) {
    result = calculate(arr);
    display = "";
    $("#display").val(result);
  }
  if (arr.length == 2) {
    if (Number(current)) {
      arr.push(current);
      current = undefined;
      display = "";
      result = calculate(arr);
      $("#display").val(result);
    }
  }
});

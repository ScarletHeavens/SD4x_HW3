let current, result;
let arr = [];
let display = "";

/*A function to perform basic math calculations. 
I mapped the methods in an object, in order to avoid huge floats, limited to one digit after the point.
**/

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
      if (x == 0) {
        return (x / y);
      }
      return (x / y).toFixed(1);
    },
  };

  return mathOp[arr[1]](Number(arr[0]), Number(arr[2]));
};

$(".number").click(function () {
  if (arr.length == 3) { //a new operation 
    display = "";
    arr = [];
  }
  display += $(this).val();
  current = display;  //keep the inserted num in current
  $("#display").val(display);
});

$("#clearButton").click(function () { //brings all to initial state
  display = "";
  arr = [];
  current = "";
  $("#display").val(display);
});

$(".operation").click(function () {
  if (!arr.length && current != undefined) { //if current has a value, push the num and operand to the arr.
    arr = [current, this.id];
    current = undefined;
    display = "";
  }

  if (arr.length == 2) {
    if (current == undefined) { // if two operands inserted in a row, choose the last one
      arr[1] = this.id;
    } else {
      arr.push(current); //otherwise, push the current num, calculate the result.
      result = calculate(arr);
      arr = [result, this.id];
      current = undefined;
      display = "";
      $("#display").val(result);
    }
  }

  if (arr.length == 3 && current == undefined) { //if an operand comes after the last digit, calculate the prev result and continue. 
    result = calculate(arr);
    arr = [];
    display = "";
    arr = [result, this.id];
  }
});

$("#equalsButton").click(function () { //shows the result if the arr is complete.
  if (arr.length == 3) {
    result = calculate(arr);
    display = "";
    $("#display").val(result);
  }
  if (arr.length == 2) { //if incomplete, check if there is a num in memo. Push it and calculate.
    if (current != undefined) {
      arr.push(current);
      current = undefined;
      display = "";
      result = calculate(arr);
      $("#display").val(result);
    }
  }
});

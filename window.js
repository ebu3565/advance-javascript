const names = "Afzal";
function add (num1, num2 ){
  window.result = num1 + num2;
  console.log('Name:'+ names + ' ' + result);

  function double(num){
    return num * 2;
  }
  var total = double(result);
  return total;
}

var sum = add(12, 13);
console.log(sum, names);
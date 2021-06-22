var no3 = prompt("An example of a number:");
alert(no3);

var add = function(no1, no2) {
  return no1 + no2;
};
var no1 = parseInt(prompt("Enter a number:"));
var no2 = parseInt(prompt("Enter another number:"));
alert("Their sum is " + add(no1, no2));
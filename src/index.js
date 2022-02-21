module.exports = function reverse (n) {

  n = Math.abs(n);

  let arr1 = n.toString().split('');

  let revers = arr1.reverse();

  let num2 = revers.join('');

  num2 = Number(num2);

  return num2;

}

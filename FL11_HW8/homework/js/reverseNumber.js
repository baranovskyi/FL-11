function reverseNumber (a) {
let b, sum = 0;
while(a) {
  b = a % 10;
  sum = sum * 10 + b;
  a = parseInt(a / 10);
}
return sum;
}
console.log(reverseNumber(1490001));
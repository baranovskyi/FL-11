function addOne (x) {
    return x + 1;
  }   
function pipe(a) {
    for (let i = 1; i < arguments.length; i++) {
      a = arguments[i](a);
}
    return a;
}
console.log(pipe(1, addOne, addOne, addOne));

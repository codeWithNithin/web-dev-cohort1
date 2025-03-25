function fun() {
  var a = 10;
  function inner() {
    console.log(a);
  }
  return inner;
}

// function fun, has called here and we got 
var g = fun();
g();

// OUTPUT
// 10

// closure is a mechanism using which a function remembers the variable present in the oute function scope, even when the outer function execution is completed.

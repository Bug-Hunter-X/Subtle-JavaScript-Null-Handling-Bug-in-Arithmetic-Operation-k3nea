function foo(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 0; // or another appropriate default value
  } 
  if (a === null || b === null) {
    return 0; // or handle null in a more meaningful way
  }

  return a + b;
}

console.log(foo(1, 2)); // 3
console.log(foo(null, 2)); // 0
console.log(foo(1, null)); // 0
console.log(foo(null, null)); // 0
console.log(foo('a',2)); // 0
console.log(foo(1, 'b')); // 0
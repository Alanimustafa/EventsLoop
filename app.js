

// 308A-1 LAB Assignment | Part 1: Stack Overflow
var counter = 0;

function counterIncrement () {
  counter++ ;
  console.log(counter);
  counterIncrement ();
}

try {
  counterIncrement();
  
} catch (error) {
  console.error("An error accurred: ", error.message); 
}



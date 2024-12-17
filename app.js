

// 308A-1 LAB Assignment | Part 1: Stack Overflow
// var counter = 0;

// function counterIncrement () {
//   counter++ ;
//   console.log(counter);
//   counterIncrement ();
// }

// try {
//   counterIncrement();
  
// } catch (error) {
//   console.error("An error accurred: ", error.message); 
// }


// 308A-1 LAB Assignment | Part 2: Trampolines


let theArray = [[1,2,3,4,5],[1,2,3,4,5]]
let flatArray = [];

function flatTheArray (theArray) {
  let flatArray = theArray.flat(); 
  console.log(flatArray);
  //flatTheArray(theArray); // After calling the function an Error Occurred
  }

  
try {
  flatTheArray(theArray);
  console.log("try : No Errors were Found")
} catch (error) {
  console.error ("An Error Occaurred");
}


// To trampoline the above function 
let trampoline  = function TrampolineTheFlatArry (theArray) {
  let flatArray = theArray.flat();
  console.log (flatArray);
}

trampoline(theArray);



// Part 3: Deferred Execution

// The function to find the prime number 
function findPrimeNumbers (startNumber, endNumber) {
  let allPrimeNumbers = [];
    if (startNumber >=3) {
      for (let i = startNumber; i <= Math.sqrt(startNumber) && i <= endNumber ; i++) { 
        if (startNumber % i === 0) { return false}
      allPrimeNumbers.push(startNumber);  
    } 
    
     allPrimeNumbers;

    }

    console.log (`All prime numbers between ${startNumber} and ${endNumber} are `,allPrimeNumbers);
}



findPrimeNumbers(1,100);
const htmlElement = document.createElement('div');
htmlElement.textContent = ""







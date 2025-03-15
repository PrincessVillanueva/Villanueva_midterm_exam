//function that takes an array of numbers as input
function sumArray(numbers) {
    //to accumu the sum of all numbers in the array
    return numbers.reduce(function(accumulator, currentValue) {

      return accumulator + currentValue;
    }, 0); 
  }
  
  // Example usage:
  console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
  
/*
Max
Given an array of numbers, create a function to return the maximum 
*/

function max(numbers){
   return Math.max.apply(Math, numbers)
}

const numbersArray1 = [1,3,5,9];
const numbersArray2 = [7,8,5,7,3,6];

console.log("Maximum number in first array is " + max(numbersArray1));
console.log("Maximum number in second array is " + max(numbersArray2));

/*function maxEven (numbers){
   numbers.sort((x,y)=>y - x);
   for (let i=0; i< numbers.length; i++){
      if(numbers[i]%2==0)
      return numbers[i];
   }
   
}
console.log (maxEven([7,8,5,7,3,6]));
result=8 (max even number)
...

function maxEven (numbers){
   let biggest=-Infinity
  
   for (let i=0; i< numbers.length; i++){
      if(numbers[i]%2==0 && numbers[i]>biggest){
         biggest=numbers[i]
      }
   }
      return biggest;
   }
   console.log(maxEven([7,8,5,7,3,6]))

*/
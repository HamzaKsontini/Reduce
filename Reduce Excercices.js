//Exercises
//Basic Requirements
//0. Reduce will be like :

 function reduce(array, f, start) { 
       var acc = start; 
       each(array, function(element) { 
             acc = f(acc, element); 
       }); 
       return acc; 
 }

 //1. We've shown that we can write the function sum --
 // which sums an array of numbers -- using reduce like this (see slides for more):

 function sum(numbers) { 
    return reduce(numbers, function(total, number) { 
          return total + number; 
    }, 0); 
} 
function product(numbers) { 
    return reduce(numbers, function(total, number) { 
          return  total* number; 
    }, 1); 
}

//2. Rewrite the averageAge function from the warmup using reduce.
// The function signature and people array are copied below for your convenience:

function averageAge(people) { 
      return reduce(people,function(acc,v){
          return acc+=v.age/people.length},0)
      
}

//3. The range function from yesterday looks like this:
//Using range and reduce, complete the factorial function below that should compute the factorial of n. 

function factorial(n) {
      var arrn=range(1,n+1)
      return reduce(arrn, function(total,nu) { 
            return  total* nu; 
      }, 1); 
  }

  //More Practice
//1. The sumBy function from previous lessons can be implemented using each like this:

function sumBy(numbers, f) { 
      return reduce(numbers,function(acc,e){
          
            return acc = acc + f(e)},0)
       
 } 


 //2. The max function below takes an array of numbers as a parameter,
 // and returns the maximum number in the array:
  function max(numbers) {
      return reduce(numbers,function(acc,e){
          if (e>acc){ 
          return e }
          else {return acc }
  },numbers[0]) }

  //3. Write a function called countOccurrences that, given a string and a character (a string with length one) as parameters, returns the total number of times that character occurs in the string.


  function countOccurrences(str, char) {
      let arr=[str]
     return reduce(arr,function(acc,e) {
        if (e.charAt === char) {
          acc++;
        }},0)
      
      return acc }



console.log("this is the start to understand things about this topic")
// iterators

// lets create a function here
function foodIterator(values) {
    let nextIndex = 0;
    // and we will return an object
      return {
        next: function() {
            // we have a next named function in the object
            if(nextIndex < values.length){
            // we will return below object 
            
              return {
               value:values[nextIndex++],
               done: false
              }  
         }
          else{ 

              return {
              done: true
            }
          }
        }
      }
    
}

const myArray =["apple","orange","sugar","bhindi"];
console.log("my array is" ,myArray)

// using the iterator
const  fruits = foodIterator(myArray);
console.log(fruits.next().value)
console.log(fruits.next().value)
console.log(fruits.next().value)
console.log(fruits.next().value)
console.log(fruits.next().value)

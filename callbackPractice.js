/* In this repo your job is to write functions to make each function call work properly.
Below is a sample problem 

//debugger - 

  //code here for sayHi

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay);
   });
   

and what you should write is the favNum function that makes the code above work, 
    
    
   var sayHi = function(str, cb){
    cb(str);
   }

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay); //should alert ('Hi Katie')'
   });
    
    
*/



  //Code Here for first
  
  var first = function(array, cb){  
  cb(array[0]);
}  //This is the code that I wrote based off of the below information
  
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
first(names, function(firstName){
  console.log('The first name in names is ', firstName)
});








/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




  //Code Here for last
  
  var last = function(array, cb) {
    cb(array[array.length - 1])
  }  //This is the code that I wrote based off of the below information

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
last(names, function(lastName){
  console.log('The last name in names is ', lastName);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */






  //Code Here for multiply
  
  var multiply = function(num1, num2, cb){
    cb(num1 * num2)
  }  //This is the code that I wrote based off of the below information

multiply(4, 3, function(answer){
  console.log('The answer is ', answer); //should console.log 12
})





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





  //Code Here for contains
  
  var contains = function(array, str, cb){
    var isPresent = false;
      array.forEach(function(input, i){
        if(input === str){
          isPresent = true;
        }
      })
      cb(isPresent);
  };  //This is the code that I wrote based off of the below information
  
  /* I am attempting to do the same thing as above but with a for loop
  var contains = function(array, str, cb){
    var isPresent = false;
        for(var i = 0; i < array.length; i++){
          
        }
       }
     }
*/
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
contains(names, 'Colt', function(result){
  if(result === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




    //Code Here for uniq
    
    var uniq = function(arr, cb){         //this creates uniq as a variable with a function
      var newArr = [];                    //this first part of the function creates a new array
      arr.forEach(function(input, i){    //this loops through the original array "names"
        if(newArr === 0){                //the next two lines checks to see if the newly created array has a value of 0 (or is empty)
          newArr.push(input);            // if it does have a value of 0 this tells the function to push the input into the array
        } else{                          //if it doesn't have a value of 0
          var inArray = false;           //create a variable and set it equal to false (boolean value)
            newArr.forEach(function(input2, i){   //then loop through the new array
              if(input === input2){       //if the second input === the first input 
                inArray = true;           //change inArray to true and start with the next iteration (basically this avoids duplicates)
              }
            })
            if (inArray === false){      //if inArray is false
              newArr.push(input);        //push the new input into the array
            }
          }
        })
      cb(newArr);                         //this syntax calls the below uniq function with the newArr
     };
    /* 
     var uniq = function(arr, cb){
       for (var i =arr.length - 1; i >= 0; i--){
         for(var j = arr.length - 2; j >= 0; j--){
           debugger
           if(arr[i] === arr[j]){
             arr.splice(j, 1)
             i--;
           }
         }
       }
       cb(arr);
    }
    */

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




    var each = function(arr, cb){
      arr.forEach(function(input, i){
        cb(arr[i]);
      })
    }

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





 //code here for getUserById

var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

getUserById(users, '16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address); 
});

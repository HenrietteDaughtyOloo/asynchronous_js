//Write an asynchronous function that accepts a message string and a 
//delay time in milliseconds. The function should log the message to 
//the console after the specified delay time.

const acceptMessage = async function messageDisplay(message, timeDelayInMilisecs){
     await new Promise(resolve=>setTimeout(resolve,timeDelayInMilisecs));
    console.log(message);
        
    }
    acceptMessage("I need help with media querry", 4000);


// //You have an array of user IDs and a function getUserData(id) that 
// //returns a Promise with user data when given a user ID. Write an 
// //asynchronous function that fetches and logs the data for each user ID 
// //one by one, in sequence.

 let foundUserDetails = true;
 let usersIds = []

 let getUserData = new Promise(function(resolve, reject){
    if (findUserDetails) {
        setTimeout(() => {resolve("User details available")},5000);
            
      }       
          else {
                     setTimeout(()=>{reject("No user details")},5000);
    }
 }).then(()=>{console.log(usersIds);})
 .catch(()=>{console.log("User not in the system");})
 .finally(()=>{console.log("Take a test");});
 console.log({getUserData});



// //You have an asynchronous function performTask() that returns a Promise. 
// //The Promise resolves if the task is successful and rejects if there's an 
// //error. Write a function that calls performTask() and logs a custom 
// //success message if the task is successful, and a custom error message 
// //if there's an error.
let success = true;

let promise = new Promise((resolve, reject) => {
    if (success) {
        resolve(" uUUH uHHHHH SUCCESSFULLY FINISHED THE TASK!!");
    }
    else{
        reject("UNSUCCESSFUL ATTEMPT");
    }
}).then(()=>{console.log("uUUH uHHHHH SUCCESSFULLY FINISHED THE TASK!!");})
.catch(()=>{console.log("I will try again later");})
.finally(()=>{console.log("I finally did it");});
console.log({promise});

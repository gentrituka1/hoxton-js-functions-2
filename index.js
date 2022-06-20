/* 
The users and todos variables have all the data for you to work with
Check your console to see the result of the following console.logs, 
and inspect the data
*/

// Prompt the user for a letter

let promptedLetter = String(prompt("Which letter do you want to appear?"));
console.log(promptedLetter)

// Find all the users who's name contains the letter 
let usersName = users.filter(user => user.name.indexOf(promptedLetter) > -1)
console.log(usersName);

// Say hi to those users in the console - but only 1 greeting every 2 seconds.


function greeting(){

    let count = 1000;

    for(let user of usersName){
        setTimeout(function (){console.log(`Hi, ${user.name}`)}, count);
        count += 1000;
    }
}
greeting();

// - Prompt the user for a user ID. Using the value, find all the todos that are Incomplete and console.log them.

let userIDpromped = Number(prompt("Which user ID do you want to enter? (0-9)"))



let inCompleted = todos.filter(todo => todo.userId === userIDpromped && todo.completed === false)
console.log(inCompleted);


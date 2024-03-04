//QS-1 - Promps the user to enter their full name . generate a user name for them 
// based on the InputDeviceInfo.Start username with @AbortController, followed by their 
// full name and ending with the fullname length.


// let Name = prompt ("Enter your full name?") ;

// // let Name = "Enter your full name?" ;
// // console.log(name.lenght);
// let Name1= `@${Name}${Name.length}`;
// console.log(Name1);

//ByAC

let fullName= prompt ("Enter Your full Name without spaces");
let username="@"+fullName+fullName.length;
console.log(username);
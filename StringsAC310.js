//Strings


// strings is a sequence of characters 
// used to represent Text.


// let str="shubham";
// let str1='shubhamshinde';
// console.log(str,str1);

//1 StringLenght
//for printing the lenth we can use str.lenght
// let str="shubham";
// console.log(str.length);

//2. String index/indices

// let str="shubha";
// console.log(str[2]);

//3

// Template literals in JS

// let obj ={
//     item:"pen",
//     price:25,
//     color: 'red',

// };

// let output = `the cost for ${obj.item} is and price is ${obj.price} is has a ${obj.color} color`;

// console.log(output);




//4.String Interpolation
// to create string by doing substitute of placeholder

// let str=`Shubham Shinde ${25+45}`;
// console.log(str);


//5. escape characters
//Next Line \n
// \t tab space

// let str ="shubham \n shinde";
// let str2 ="shubham \t shinde";
// console.log(str)
// console.log(str2)



//6. STring Method /Functions
// 6.1  toUpperCase()

// let str ="shubham shinde Patil";
// console.log(str.toUpperCase());


//6.2 toLowerCase

// let str = "SHUBHAM SHinde ";
// console.log(str.toLowerCase());


//6.3 trim( ) //remove whitespaces staart and end

// let string="     shubham   shinde   patil        "
// console.log(string.trim)

//6.4 slice(strtindex,endidexno)

// let str ="shubham shinde";
// console.count(str.slice(3,8)) // what uis :1 in outpuc ask to arun ?


//6.4 str1.concate(str2)

// let str1="Shubham";
// let str2="shindepatil"

// console.log(str2.concat(" ", str1));

//6.5 str replace (searchval " ",newvalue" ")

// let str=" Radhe sham sham sham sham";
// console.log(str.replace("sham","Radhe"))
// console.log(str)
// console.log(str.replaceAll("sham","Radhe"));



//6.7 str.charAT(idxno)

// let str="shubham shinde";
// console.log(str.charAt(2))

//QS-1 - Promps the user to enter their full name . generate a user name for them 
// based on the InputDeviceInfo.Start username with @AbortController, followed by their 
// full name and ending with the fullname length.
//ANswer by me 

let Name = prompt ("Enter your full name?") ;

// let Name = "Enter your full name?" ;
// console.log(name.lenght);
let Name1= `@${Name}${Name.length}`;
console.log(Name1);


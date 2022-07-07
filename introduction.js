// array methods

const { loadavg } = require("os")

// //push())
// var arr= ['javascript', 'typescript', 'angular']
// arr.push('Vuejs')
// console.log(arr);

// //pop()
// var arr= ['javascript', 'typescript', 'angular']
// arr.pop()
// console.log(arr);

// //shift()
// var arr = ['javascript', 'typescript', 'angular']
// arr.shift()
// console.log(arr);

// //unshift()
// var arr = ['javascript', 'typescript', 'angular']
// arr.unshift('Vuejs')
// console.log(arr);

// //indexof()
// var arr = [1,2,3,4,5,6]
// var index = arr.indexOf(5)
// console.log(index);

// //includes()
// var arr = [4,6,2,5,2]
// var results1 = arr.includes(2)
// var results2 = arr.includes(9)
// console.log('element 2:',results1);
// console.log('element 9:',results2);

// //map()
// var arr = [2,6,4,5,3]
// let newarr = arr.map(function(element){
//     return element + 5;
// });
// console.log(newarr);

// //slice
// var arr = [1,4,5,3,7,5]
// var slicearr = arr.slice(3,5)
// console.log(slicearr);

// //splice
// var arr = [4,6,3,5,6,4,3]
// var splicearr = arr.splice(1,3)
// console.log(splicearr);

// //concat()
// var arr = ['angular', 'Vuejs']
// var arr2 = ['javascript', 'typescript']
// console.log(arr);
// console.log(arr2);
// var arr3 = arr.concat(arr2)
// console.log(arr3);

// //foreach()
// var arr = [1,5,4,6,7,3]
// var results = arr.forEach(function(element){
//     console.log(element);
// })


// //sort()
// var arr = [1,4,7,5,6,3]
// var sortedarr = arr.sort()
// console.log(sortedarr);

// //reduce()
// var arr = [1,2,3,4,5]
// var results = arr.reduce(function (sum, element){
//     return sum+element
// })
// console.log(results);

// //filter()
// var arr = [1,5,7,3,8,2,9]
// var results = arr.filter(function(element){
//     return element<=5
// })
// console.log(results);


// //find()
// var arr = [1,5,7,3,8,2,9]
// var results = arr.find(function(element){
//     return element > 5
// })
// console.log(results);

// //findindex()
// var arr = [1,5,7,3,8,2,9]
// var results = arr.findIndex(function(element){
//     return element > 5
// })
// console.log(results);

// //some()
// var arr = [1,5,7,3,8,2,9]
// var results = arr.some(function(element){
//     return element > 5
// })
// console.log(results);

// //every()
// var arr = [1,5,7,3,8,2,9]
// var results = arr.every(function(element){
//     return element > 5
// })
// console.log(results);

// //this is a single line comment before a statement
// console.log('implementing a single line comment before a statement')

// var a = 5
// var b = 3
// var sum = a+b //adding a and b
// console.log(sum) // displaying sum


// /* this is a multi line line comment
// the comment will be ignored by the javascript engine*/
// console.log('implementing a multi line comment')


// // if/else statement
// //syntax
// if (expression){
//     //code block
// }else{
//     //code block
// }
// var a = 5
// var b = 3
//  if (a>b){
//     console.log('a is greater than b');
//  }
//  else{
//     console.log('a is smaller than b');
//  }

//switch statement
// //syntax
// switch(expression){
//     case x:
//         //code block
//         break;
//     case y:
//         //code block
//         break;
//     //...
//     //...
//     //..
//     default:
//         //code block
// }

// let day
// switch(new Date().getDay()){
//     case 0:
//         day = 'sunday'
//         break;
//     case 1:
//         day = 'monday'
//         break;
//     case 2:
//         day = 'tuesday'
//         break;
//     case 3:
//         day = 'wednesday'
//         break;
//     case 4:
//         day = 'thursday'
//         break;
//     case 5:
//         day = 'friday'
//         break;
//     case 6:
//         day = 'saturday'
//         break;
//     default:
//         day = 'does not exist in the calendar'
// }

// console.log("today is "+day);

//ternary operator

//condition ? exprIfTrue : exprIfFalse

// var marks = 60
// var comment = (marks>=50)? 'pass': 'fail'
// console.log(comment);

//Destructuring
//arary destructuring
// //syntax
// const [var1, var2, ...] = arrayName;

// var fruits = ['mangoes', 'pineapples', 'apples', 'pears']
// const [first, second] = fruits
// console.log(first, second);

// //ignoring unwanted elements
// var fruits = ['mangoes', 'pineapples', 'apples', 'pears']
// const [first,,third] = fruits
// console.log(first, third);

// //setting new variables
// var names = ['joy', 'brian', 'mary', 'peter']
// let [first, second] = new Set(['john', 'lucy'])
// console.log(first, second);


// //swapping variables
// const names = ['joy', 'brian', 'mary', 'peter'];

// let [positionOne,positionTwo] = names;
// [positionOne,positionTwo] = [positionTwo, positionOne];
// console.log(positionOne, positionTwo);


// // rest '...'
// let animals = ['cats', 'dogs', 'cows', 'goats', 'ducks']
// const [first, second,...rest] = animals
// console.log(rest);

//default values
//example 1
// var name= []
// let [first, second] = name
// console.log(first);//undefined
// console.log(second);//undefined

//example 2
// var name= ['jane']
// let [first='first name', second='second name'] = name
// console.log(first);//jane
// console.log(second);//undefined

//destructuing objects
//syntax
// let {var1, var2} = objectname

// var name={
//     first_name: 'Mary',
//     second_name: 'Jane',
//     other_name: 'starshine'
// }

// let {first_name, second_name}= name
// console.log(first_name, second_name);

//spread operator
//syntax
// var variablename1 = [...value]; 

// var message = ['My', 'name', 'is', 'Jane Doe']
// console.log(message);
// console.log(...message);

//concat
// var a = [1,2,3]
// var b = [4,5,6]
// var c = [...a,...b]
// console.log(c);

//copy
// var a = [1,2,3]
// var b = [...a,4,5,6]
// console.log('array a = '+a);
// console.log('array b = '+b);

//clone
// var a = [1,2,3]
// var b = [...a]
// a.push(4)

// console.log('array a = '+a);
// console.log('array b = '+b);

//spread operator with objects
// //copying an object
// var student ={
//     name:'Jane Doe',
//     reg_no: '56272'
// }
// var new_student = {...student} 
// console.log(new_student);

//updating object
// var student1 ={
//     name:'Jane Doe',
//     reg_no: '56272'
// }
// var student2 ={
//     gender: 'female',
//     location: 'kajiado'
// }

// var new_student = {...student1,...student2}
// console.log(new_student);

//rest parameter
// function display(...args){
//     console.log(args);
// }

// display(1)
// display(1,2,3,4,5)

// function sum(num1, num2, num3){
//     console.log(num1+num2+num3);
// }

// var num = [1,5,3]
// sum(...num)

// var arr=[4,3,6,5]
// console.log(Math.min(arr));
// console.log(Math.min(...arr));

//anonymous functions
//syntax
// (function(){
//     //code block
// });

// assigning it to a variable
// const display = (function(){
//     console.log('anonymous functions');
// })

// display()


// using it as an argument
// setTimeout(function(){
//     console.log('this will be executed after 1 second');
// }, 1000);

//Immediately invoked function execution
//syntax
// (function(){
//     //code block
// })()

// (function(){
//     console.log('implementing anonymous functions');
// })();

//passing parameters
//syntax
// (function(){
//     //code block
// })(parameter)

// let sounds = {
//     dog: 'barks',
//     cat: 'purrs',
//     duck: 'quacks'
// };

// (function () {
//     console.log(sounds.dog + ' ' + sounds.cat + ' ' + sounds.duck);
// })(sounds);

//arrow functions
//syntax
// variablename = ()=>{
//     //code block
// };

// let display = ()=>{
//     console.log('hello there');
// };

// display();

// let sounds = {
//     dog: 'barks',
//     cat: 'purrs',
//     duck: 'quacks'
// };

// (function () {
//     console.log(sounds.dog + ' ' + sounds.cat + ' ' + sounds.duck);
// })(sounds);

let sounds = {
    dog: 'barks',
    cat: 'purrs',
    duck: 'quacks'
};

(() => {
    console.log(sounds.dog + ' ' + sounds.cat + ' ' + sounds.duck);
})(sounds);



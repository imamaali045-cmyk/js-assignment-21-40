/////////////////// CHAPTER 21-25 ASSIGNMNET  //////////////////

// var fname = prompt("Enter your first name");
// var lname = prompt("Enter your last name");
// var fullname = fname + " " + lname;
// alert("welcome " + fullname);



// let favmobile = prompt("Enter your mobile phone model");
// document.writeln("My favourite phone is: " + favmobile);
// document.writeln("<br>Length of string: " + favmobile.length);




// var str = "pakistani";
// document.writeln("string:" + str);
// document.writeln("<br>index of 'n': " + str.indexOf("n"));




//  var str = "Hello World";
// document.writeln("string:" + str);
// document.writeln("<br>Last index of 'l': " + str.lastIndexOf("l"));



// var str = "pakistani";
// document.writeln("string:" + str);
//  document.writeln("<br>Character at index 3: " + str.charAt(3));




// var fname = prompt("Enter your first name");
// var lname = prompt("Enter your last name");
// var fullname = fname.concat(" " + lname);
// alert("welcome " + fullname);




// var str = "Hyderabad";
// document.writeln("City: " + str);
// str = str.replace(/hyder/gi, "Islam");
// document.writeln("<br>After replacement: " + str);



// var message = "Ali and Sami are best friends. They play cricket and football together.";
// message = message.replace(/and/gi, "&");
//  document.writeln("Message: " + message);




// var str = "472";
// document.writeln("Value: " + str);
// document.writeln("<br>Type: " + typeof(str));
// var number = 472;
// document.writeln("<br>Value: " + number);
// document.writeln("<br>Type: " + typeof(number));




// var str = prompt("Enter a text");
// document.writeln("User input:" + str);
// document.writeln("<br>Upper case:" + str.toUpperCase());




// var input = prompt("Enter a text");
// document.writeln("User input:" + input + "<br>");

// var words = input.toLowerCase().split(' ');
// for(var i = 0; i< words.length; i++){
// words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
// }
// var result = words.join(' ');
// document.writeln("Title Case:" + result);



// let num = 35.36;
// document.writeln("Number: " + num + "<br>");
// let str = num.toString().replace(".", "")
// document.writeln("Result: " + str);






// var input = prompt("Enter a username");

// if (input.includes("@") || input.includes(".") || input.includes(",") || input.includes("!")) {
//     alert("Please enter a valid username");
// }






// var bakery = ["cake","apple pie","cookie","chips","patties"];

// var order = prompt("Enter a order").toLowerCase();

// var found = false;

// for(let i = 0; i < bakery.length; i++  ){
// if(bakery[i] === order){
// document.writeln(`${order} is available at index  ${i}   in our bakery` )
//  found = true;
//  break;
//  }
// }
// if(found === false){
// alert(" we are sorry " + order + " is not available in our bakery ")
// }





// var password = prompt("Enter a password");
// var foundalpha = false;
// var foundnum = false;

// if(password.length < 6){
// alert("please at least 6 characters in password");
// }else if(password[0] >= "0" &&  password[0] <= "9" ){
// alert("password do not start with a number");
// }

// else{
//     for(var i = 0; i < password.length;  i++ ){
// if(password[i] >= "a" && password[i] <= "z" || password[i] >= "A" && password[i] <= "Z" )
// foundalpha = true;
// if(password[i] >= "0" &&  password[i] <= "9"){
// foundnum = true;
// }
// }
// }

// if(foundalpha  &&   foundnum){
// alert("Valid password");
// }else{
//     alert("Please Enter a valid password");
// }






// var str = "university of karachi".split("")
// for(var i = 0; i < str.length; i++){
// document.writeln(` ${str[i]}  <br>`)
// }





// var input = prompt("Enter a text");
// document.writeln(" user input: " + input +"<br>")
// var lastchar = input.slice(-1)
// document.writeln("Last character of input:" + lastchar)





// var str = "The quick brown fox jumps over the lazy dog"
// var words = str.toLowerCase().split(" ")
// document.writeln("Text:"+ str + "<br>")
// var count = 0;
// for(var i = 0; i< words.length;  i++){
// if(words[i] === "the" )
// count++;
// }
// document.writeln("The word 'the' appears " + count + " times.")


// ///////////////////////end of chapter 21-25 assignment  //////////////////




/////////////////// CHAPTER 26-30 ASSIGNMNET  //////////////////


// var number = +prompt("Enter a numbers?");

// document.writeln(`number:  ${number} <br>`)

// var  round = Math.round(number);
// document.writeln(`round off value:${round}  <br>`)

// var floor = Math.floor(number);
// document.writeln(`floor value:  ${floor}  <br>`)

// var ceil = Math.ceil(number);
// document.writeln(`ceil value:  ${ceil}   <br>`)






// var number = +prompt("Enter a negative number?");

// document.writeln(`number:  ${number} <br>`)

// var  round = Math.round(number);
// document.writeln(`round off value:${round}  <br>`)

// var floor = Math.floor(number);
// document.writeln(`floor value:  ${floor}  <br>`)

// var ceil = Math.ceil(number);
// document.writeln(`ceil value:  ${ceil}   <br>`)





// var num = +prompt("Enter a number");

// var absnum = num;

// if(num < 0 ){
// absnum = num *-1;
// }
// document.writeln(`The absolute value of ${num} is ${absnum}  `)





// var dice1 = Math.floor( Math.random()*6)+1;
// document.writeln(`random dice value:${dice1}  <br>`)

// var dice2 = Math.floor( Math.random()*6)+1;
// document.writeln(`random dice value:${dice2}  <br>`)






// var coin = Math.ceil(Math.random()*2);

// if(coin  === 2  ){
// document.writeln(`${coin}<br> random coin value:Heads <br>`)
// }else{
// document.writeln(`${coin}<br> random coin value:Tails <br>`)

// }





// var range = Math.ceil(Math.random()*100);
// document.writeln(`random number between 1 and 100:${range}`)






// var weight = +prompt("Enter your weight");

// var check = parseFloat(weight);
// document.writeln(`The Weight of user is ${check} kilograms`)







// let user = +prompt("Enter a number b/w 1 to 10");

// var secret = Math.floor(Math.random()*10)+1;

// if(user === secret){
// alert("Congratulations")
// }else{
//     alert("Try again...")
// }


// /////////////////////end of chapter 26-30 assignment  //////////////////



/////////////////// CHAPTER 31-34 ASSIGNMNET  //////////////////



// var currentdate = new Date()
// document.writeln(`${currentdate}`)






// var date = new Date();
// var monthname = ["January","Feburuary","March","April","May","June","July","August","September","October","November","December"]
//  var number = date.getMonth()
// var currentmonth = monthname[number]
// alert("Current month: " + currentmonth)








// var days = ["sun","Mon","Tues","Wed","Thu","Fri","Sat"];

// var date = new Date();
// var dayindex = date.getDay();
// var currentday =   days[dayindex] ;
// alert(" Today is " + currentday )







// var date = new Date();
// var dayindex = date.getDay();

// if(  dayindex  === 0   ||   dayindex  === 6 ){
// alert("it's Fun day")
// }






// var date = new Date();
//  var currentdate = date.getDate();

// if(currentdate  < 16  ){
// alert("First fifteen days of the month")
// }else{
//   alert("Last days of the month")  
// }






// var  date =   new Date();
// document.writeln(`Current Date:${date}<br>`)
// var miliseconds = date.getTime();
// document.writeln(`Ellapsed milliseconds since january 1,1970:${ miliseconds} <br>`)
//  result = miliseconds  / (1000 *  60) ;
// document.writeln(`Ellapsed milliseconds since january 1,1970:${result}`)







// var  date =   new Date();
// var hours  = date.getHours();

// if(hours  >  11){
//  alert("it's PM")  
// }else{
//      alert("it's AM")  
// }






// var  date =   new Date();
// later_date =  date.setDate(31)
// later_date = date.setFullYear(2020)
// later_date = date.setMonth(11)
// later_date = date.setHours(0)
// later_date = date.setMinutes(0)
// later_date = date.setSeconds(0)

// document.writeln(`Later date:${date} <br>`)







// var ramadan = new Date("June 18, 2015")
// var  currentdate  =   new Date();

// let ramadan_miliseconds = ramadan.getTime()
// let  currentdate_miliseconds = currentdate.getTime()


// let diff = currentdate_miliseconds - ramadan_miliseconds
// let result = Math.floor(diff/ (1000 * 60 * 60 * 24))
// alert(`${result} days have passed since 1st Ramadan, 2015`)








// var referencedate = new Date("dec 5, 2015 22:50:16")
// var  currentdate  =   new Date();

// let referencedate_miliseconds = referencedate.getTime()
// let  currentdate_miliseconds = currentdate.getTime()

// let diff = currentdate_miliseconds - referencedate_miliseconds
// let result = Math.floor(diff/ 1000)
// document.writeln(`on reference date ${referencedate}<br>`)
// document.writeln(`${result} Seconds had passed since begining of, 2015`)








// var date =   new Date();
// document.writeln(`Current date: ${date}<br>`)
// date.setHours(date.getHours() - 1);
// document.writeln(` 1 hour ago, it was ${date}`)








//  var date =   new Date();
// document.writeln(`Current date: ${date}<br>`)
// date.setFullYear(date.getFullYear() - 100);
// document.writeln(` 100 years back, it was ${date}`)






//  var date =   new Date();
//  var currentyear = date.getFullYear()
// var age = +prompt("Enter you age");

// var year = currentyear - age ;





// var customer = prompt("Enter your name");
// var currentmonth =  prompt("Enter your Current month") ;
// var numunits = +prompt("Enter your units");
// var charges = +prompt("Enter your charges per unit");
// var surcharge = +prompt("Enter Late Surcharge");
// var netamount = numunits * charges;
// var grossamount = netamount + surcharge;
// document.writeln(` <h1>K-Electric Bill</h1>  <br>`)
// document.writeln(`Customer Name: ${customer} <br>`)
// document.writeln(`Month:  ${currentmonth} <br>`)
// document.writeln(`Number Of Units:  ${numunits} <br>`)
// document.writeln(`Charges Per Unit: ${charges} <br>`)
// document.writeln(`Net Amount Payable: (within Due Date): ${netamount} <br>`)
// document.writeln(`Late Payment Surcharge: ${surcharge} <br>`)
// document.writeln(`Gross Amount Payable (after Due Date): ${grossamount} <br>`)



// /////////////////////end of chapter 31-34 assignment  //////////////////


/////////////////// CHAPTER 35-38 ASSIGNMNET  //////////////////



// function date( ){
// document.writeln(new Date())
// }

// date();






// function greets(fname,lname){
// document.writeln(" Hello " +  fname + "  " + lname);
// }

// var fname = prompt("Enter your First name");
// var lname = prompt("Enter your last name");
// greets(fname,lname);







// function num(num1,num2){
// let sum = num1 + num2;
// return sum;
// }

// var num1 = +prompt("Enter your number");
// var num2 = +prompt("Enter your number");


// var result = num(num1,num2);

// alert(" result is " + result);







//  function compute(num1,num2,operator){
//     let result; 
// if(operator === "+"){
// result = num1 + num2;
// }else if(operator === "-"){
// result = num1 - num2;
// }else if(operator === "/"){
//     result = num1 / num2;
// }else if(operator === "%"){
// result = num1 % num2;
// }else if(operator === "*"){
// result = num1 * num2;
// }else{
// alert("invalid answer!")
// }
// return result;
//  }

//  var num1 = +prompt("Enter your first number");
// var num2 = +prompt("Enter your second number");
// var operator = prompt("Enter operator (+, -, *, /, %):");

// let total = compute(num1,num2,operator);

// alert(" result is " + total );





// function square(num){
//    let squ = num * num ;
//    return squ;
// }

// var num = +prompt("Enter your number")

// let result = square(num);

// alert(result);






// function  factorial(num){
// var result = 1;
// if (num === 0) {
//     return 1;
// }
// for(var i = num; i >=1; i-- ){
// result = result * i;
// }

// return result;

// }

// var answer = factorial(0);

// alert(" result is " + answer);








// function counting(firstnum ,lastnum){

// for(var i = firstnum; i <= lastnum;   i++ ){
// document.writeln(`${i} <br>`)
// }
// }

// let firstnum = +prompt("Enter your first number");
// let lastnum = +prompt("Enter your second number");
    
// counting(firstnum, lastnum);







// function  calculatehypotenuse(base,perpendicular){
// function calculatesquare(num){
//     return num * num;

// }
// var base = calculatesquare(base)
// var perpendicular = calculatesquare(perpendicular)


// var hypotenuse = Math.sqrt(base + perpendicular)
// return hypotenuse;

// }


// var base = +prompt("Enter a base");
// var  perpendicular = +prompt("Enter a perpendicular");

// var  result = calculatehypotenuse(base,perpendicular)
// alert(" hypotenuse is " + result);








// function  calculatearea(width, heigth){
// var area = width * heigth;
// return area;
// }

// var userheigth = +prompt("Enter a heigth");

// var result = calculatearea(5, userheigth);

// alert(" Area is " + result);






// function checkpalindrome(word){

// var reverseword = word.split('').reverse().join('');

// if(word === reverseword){
// return "yes it's palindrome"
// }else{
//     return "no  it's not palindrome"
// }
// }

// var word = prompt("Enter your word");

// var result = checkpalindrome(word)

// alert(result);








// function stringuppercase(text){
// var words = text.toLowerCase().split(" ")

// for(var i = 0; i < words.length; i++){
// words[i] = words[i][0].toUpperCase() + words[i].slice(1)
// }

// return words.join(" ");
// }


// var text = prompt("Enter your text");

// var result = stringuppercase(text);
// alert(result);







// function longestword(input){
// let words = input.split(" ")
// let longest = "";


// for(var i = 0; i< words.length; i++){
// if(words[i].length > longest.length){
//    longest = words[i];
// }
// }
// return longest;
// }


// let input = prompt("Enter your text");
// var result = longestword(input);
//  alert(" Longest word: " +  result);






// function countletter(str,letter){

// let count = 0;

// for(var i = 0; i < str.length; i++){
// if(str[i] === letter){
// count = count +1;
// }
// }
// return count;
// }

// let str = prompt("Enter a Text".toLowerCase());
// let letter = prompt("Enter a letter".toLowerCase());

// let result = countletter(str,letter);

// alert(' Found words: ' + result)





// function CalCircumference(radius){
//     let pie = 3.142;
// let circum = 2 * pie * radius;
// return circum;
// }

// let radius = +prompt("Enter a radius");
// let result = CalCircumference(radius);
// document.writeln(" Circumferrence is " + result )





// function Area(radius){
//     let pie = 3.142;
// let area =  pie * Math.pow(radius,2);
// return area;
// }

// let radius = +prompt("Enter a radius");
// let result = Area(radius);
// document.writeln(" Area is " + result )

// /////////////////////end of chapter 35-38 assignment  //////////////////



/////////////////// CHAPTER 38-42 ASSIGNMNET  //////////////////



// function sum(a,b){
// let result = 1;
// for(var i = 1; i <= b; i++ ){
// result = result * a;
// }
// return result;
// }

// let a = +prompt("Enter value one");
// let b = +prompt("Enter value two");

// let final = sum(a,b)


// alert(" result is " + final );





// function leapyear(year){

// if((year % 4 === 0 && year % 100 !== 0 ) || (year % 400 === 0 ) ){
// alert("This is leap year")
// }else{
// alert(" This is Normal year")
// }
// }

// let year = +prompt("Enter your year");

// leapyear(year);





// function  calculateS(a,b,c){
// let svalue = (a + b + c ) / 2;
// return svalue;
// }


// let a = +prompt("Enter first value");
// let b = +prompt("Enter second value");
// let c = +prompt("Enter third value");


// function calculateArea(a,b,c,s){
// let area = s * (s - a) * (s - b) *  (s - c ) 
// let finalarea = Math.sqrt(area) ;
//  return finalarea;

// }

// let s =  calculateS(a,b,c);

// let result = calculateArea(a,b,c,s);
// alert(" Area is " + result);








// function average(m1,m2,m3){
// let obt = (m1 + m2 + m3) / 3;
// return obt;
// }



// function percentage(m1,m2,m3){
// let totalmarks = 300;
// let obtained = m1 + m2 + m3;
// let perc = (obtained / totalmarks) * 100 ;
// return perc;
// }


// function mainfunc(){

//  let m1 = +prompt("Enter science subject marks");
// let m2 = +prompt("Enter Math subject marks");
// let m3 = +prompt("Enter English subject marks");

// let avgResult = average(m1,m2,m3);
// let perResult = percentage(m1,m2,m3);

// alert("Average value is: " + avgResult.toFixed(2) + " & Percentage is: " + perResult.toFixed(0) + "%");
// }


// mainfunc();







// function  indexof( str , word){
// let text  = str.toLowerCase();
// let found = word.toLowerCase();

// for(var i = 0; i < text.length; i++){
// if(text[i] === found){
// return i;
// }
// }
// return -1 ;
// }

//  let text = prompt("Enter a text");
// let found = prompt("Enter a word");

// let result = indexof( text , found);

// alert(" index number is " + result)






// function vowels(str){
// let text = str.toLowerCase(); 
// let result = "";

// for(var i = 0; i < text.length; i++){
// if(text[i] !== "a" && text[i] !== "e" && text[i] !== "i" && text[i] !== "o" && text[i] !== "u"){
// result += text[i];
// }
// }
// return result;
// }


// let text = prompt("Enter a text");

// let finalresult = vowels(text);
// alert(" result is: " + finalresult);








// function pairing(sentence){

// let text = sentence.toLowerCase();
// let count = 0;


// for(var i = 0; i < text.length - 1; i++){

// let chart1 = text[i];
// let chart2 = text[i + 1];

// switch (chart1){
// case "a" :
// case "e" :
// case "i" :
// case "o" :
// case "u" :

// switch (chart2){
// case "a" :
// case "e" :
// case "i" :
// case "o" :
// case "u" :
// count++;
// break;
// }
// break;
// default:
// break;
// }
// }
// return count;
// }


// let text = prompt("Enter a text");

// let result  = pairing(text);

// alert(" pair is: " + result);











// let input = prompt("Enter distance:"); 
// let km = parseInt(input);

// function meters(){

// let mt =  km * 1000;
// let mtresult = mt;
// return mtresult;
// }

// let mtfinal = meters();
// alert("Distance in meters is " + mtfinal )


// function feet(){

// let ft =  km * 3280.84;
// let ftresult = ft;
// return ftresult; 
// }


// let ftfinal = feet();
// alert(" Distance in feet is " + ftfinal )

// function inches(){

// let inch =  km * 39370.1;
// let inresult = inch;
// return inresult;   
// }

// let inchesfinal = inches();
// alert(" Distance in inches is " + inchesfinal )


// function centimeter(){

// let cm =  km * 100000;
// let cmresult = cm;
// return cmresult;
    
// }


// let cmfinal = centimeter();
// alert(" Distance in centimeter is " + cmfinal )










// let totalHoursInput  = prompt("Enter a  Hours:"); 
// let hours = parseInt( totalHoursInput );

// function  overtime(hours){
    
// let overtimepay = 0;

// if(hours > 40){
// let extrahours = hours - 40;
// overtimepay = extrahours * 12;
// }else{
// overtimepay = 0; 
// }

// return overtimepay;

// }


// let result =  overtime(hours);

// alert("Your Overtime Pay is: RS " + result);










// function withdraw(){

// let amount  =  +prompt("Enter amount to withdraw!")

// if(isNaN(amount) || amount <= 0){
// alert('Please enter a valid amount')
// return;
// }

// let notes100 = Math.floor(amount / 100)
// amount = amount % 100;


// let notes50 = Math.floor(amount / 50)
// amount = amount % 50;


// let notes10 = Math.floor(amount / 10)
// amount = amount % 10;


// alert( "you will recieve: /n" +

//   notes100 + "notes of 100/n " +  
//  notes50 + "notes of 50/n " +  
//  notes10 + "notes of 10/n " + 
//  " remaining changes is: "  + amount )

// }



// withdraw();
// 
/////////end of chapter 38-42 assig  //////////



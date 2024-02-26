//Q1.

// function greeting(){
//     var text = "Hi there"
//     alert(text)
// }

//Q2.

// function clock(){
//     var date = new Date()
//     document.write(date + "<br>")
//     var hour = date.getHours()
//     var minutes = date.getMinutes()
//     var seconds = date.getSeconds()

//     document.write("Time:" + hour+":"+minutes+":"+seconds)
// }

//Q3.

// function greeting(){
//     var firstName = prompt("Enter your first name: ")
//     var lastName = prompt("Enter your last name: ")

//     alert("Huy" + " "+ firstName + " " + lastName)
// }

//Q4.

// function add(){
//     var num1 = parseInt(prompt("Enter num1: "))
//     var num2 = parseInt(prompt("Enter num2: "))
//     var total = num1 + num2
//     document.write(total)
// }

//Q5.

// function calculator(){
//     var num1 = parseInt(prompt("Enter larger number: "))
//     var num2 = parseInt(prompt("Enter second number: "))
//     var operation = prompt("Enter operation: ")

//     if (operation == "+"){
//         var total = num1 + num2
//         document.write("Total: " + total)
//     }
//     else if (operation == "*"){
//         var total = num1*num2
//         document.write("Total: "+ total)
//     }
//     else if (operation == "-"){
//         var total = num1 - num2
//         document.write("Total: "+ total)
//     }
//     else if(operation=="/"){
//         var total = num1/num2
//         document.write("Total: "+ total)
//     }
    
// }

//Q6.
// function square(x){
//     var result = x*x
//     document.write("Result: "+result)
// }

//Q7.

// function count(){
//     var startnum = parseInt(prompt("Enter starting number: "))
//     var endnum = parseInt(prompt("Enter ending number:"))

//     for (i=startnum;i<endnum+1;i++){
//         document.write(i + "<br>")
//     }
// }

//Q8.
// function writeArguments() {
//     for (var i = 0; i < arguments.length; i++) {
//         document.write(arguments[i] + "<br>");
//     }
// }

//Q9.

// function largenum() {
//     var largest = arguments[0];

//     for (var i = 1; i < arguments.length; i++) {

//         if (arguments[i] > largest) {
//             largest = arguments[i]; 
//         }
//     }
//     document.write("Largest number:"+largest);
// }

//Q10.
//(a)

// function area(width,height){
//     var result = width*height
//     document.write("Area:"+result)
// }

//Q10.
//(b)
// function area(){
//     var width = arguments[0]
//     var height = arguments[1]
//     var result = width*height
//     document.write("Area: " + result)
// }

//Q11.
// function sortArray(arr) {
//     return arr.slice().sort(function(a, b) {
//         return a - b; 
//     });

// }

//Q12.

// function sumArray(numbers) {
//     var sum = 0;
//     for (var i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }
//     return sum;
// }

//Q13.
// var param = function inner() { 
//     return typeof inner; 
// }
// alert(param())

// Q14.

// function power(){
//     var num = parseInt(prompt("Enter number: "))    
//     var power = parseInt(prompt("Enter power: "))
//     var result = Math.pow(num,power)
//     document.write(result)
// }
// power()

//Q15.

// function diceRoll(){
//     var dicenum = Math.floor(Math.random()*6)+1
//     return dicenum

// }/ var result = diceRoll()

// document.write("The random number is: " + result)

//Q16.
// function reversenum(num) {
//     var numString = num.toString();
//     var reverseString = numString.split('').reverse().join('');
//     var reversedNumber = parseInt(reverseString);
//     return reversedNumber;
// }

// var x = 32243;
// var reversed = reversenum(x);
// document.write("Reversed number:", reversed);


//Q17.
// function capitalizeFirstLetter(str) {
//     var words = str.split(' ');

//     for (var i = 0; i < words.length; i++) {
//         words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
//     }

//     var capitalizedStr = words.join(' ');

    
//     return capitalizedStr;
// }
// var inputString = 'the quick brown fox';
// document.write("Normal string: " + inputString + "<br>")
// var capitalizedString = capitalizeFirstLetter(inputString);
// document.write("Capitalized string:", capitalizedString);

//Q18.
// function findLongestWord(str) {
//     var words = str.split(' ');

//     var longestWord = '';

//     for (var i = 0; i < words.length; i++) {
//         if (words[i].length > longestWord.length) {
//             longestWord = words[i];
//         }
//     }

//     return longestWord;
// }

// var inputString = 'Web Development Tutorial';
// document.write("Input String: " + inputString + "<br>")
// var longestWord = findLongestWord(inputString);
// document.write("Longest word:"+ longestWord);

//Q19.

function countVowels(str) {
    str = str.toLowerCase();

    var vowels = ['a', 'e', 'i', 'o', 'u'];

    var count = 0;

    for (var i = 0; i < str.length; i++) {
        if (vowels.indexOf(str[i]) !== -1) {
            count++;
        }
    }

    return count;
}

var inputString = 'The quick brown fox';
var vowelCount = countVowels(inputString);
document.write("Number of vowels:", vowelCount);
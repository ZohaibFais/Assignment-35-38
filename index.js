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
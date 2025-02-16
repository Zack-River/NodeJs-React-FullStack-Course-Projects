// 14.0
// var: place in memory where we save block of data.
// prompt: Input string With (message) before. 
var myname = prompt("Your Name");

// alert: pop up (message).
alert("Hello "+myname);

//---------------------------------------------------
// 14.1 Variables and Concatenation Excercise
function ConcAndSwitch() {
    var userName = prompt("Hello User! \nWhat's Your Name?");
    alert("Welcome "+userName+" in switch nums game!");
    var num1 = 0;
    num1 = Number(prompt("Enter First Num:"));

    var num2 = 0;
    num2 = Number(prompt("Enter Second Num:"));

    num1 = num1 + num2;
    num2 = num1 - num2;
    num1 = num1 - num2;

    alert("Your First Num Now Is: "+num1+"\nYour Second Num now is: "+num2);
}

//-----------------------------------------------------
// 14.2 How Length is string EX:
/*
var p = prompt("Write a pragraph with Max Length 42 letters:");
if(p.length > 42)
    alert("Sorry Paragraph is too long!");
else
    alert("You Have Typed "+p.length+" letters."
            +"\nThere are "+(42-p.length)+" letters remaining");
*/

//-----------------------------------------------------
// 14.3 String.Slice(start,end). *index 0:
function ParagraphLimit() {
    var p = prompt("Write a pragraph with Max Length 42 letters:");
    if(p.length > 42)
    {
        alert("Sorry Paragraph is too long!");
        alert("Only Valid:\n"+p.slice(0,42));
    }
    else
        alert("You Have Typed "+p.length+" letters."
                +"\nThere are "+(42-p.length)+" letters remaining");
}

//-----------------------------------------------------
// 14.4 Change Name Case:
function NameCase() {
    var userName = prompt("Enter Your Name:");
    userName = userName.slice(0,1).toUpperCase()
            + userName.slice(1,userName.length).toLowerCase();
    alert("Hello "+userName+"!");
}

//-----------------------------------------------------
// 14.5 Dog age to human age:
function DogAge() {
    var dogAge = prompt("Enter Your Dog Age:");
    var humanAge = (Number(dogAge)-2)*4+21;
    alert("Your Dog is "+humanAge+" Human Year.");
}

//-----------------------------------------------------
// 14.6 Life in Weeks Coding Exercise:
function lifeInWeeks(age) {
        var yearsRem = 90 - age;
        var monthsRem = yearsRem * 12;
        var daysRem = yearsRem * 365;
        var weeksRem = yearsRem * 52;
        console.log("You have "+daysRem+" days, "+weeksRem+" weeks, and "+monthsRem+" months left.");
    }

//-----------------------------------------------------
// 14.7 BMI Calculator Challenge:
function bmiCalculator(weight, height) {
    return Math.round(weight / Math.pow(height, 2));
}

/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8); 

bmi should equal 20 when it's rounded to the nearest whole number.

*/
// 15.0 Random Number Generation in Javascript: Building a Love Calculator:
// *Math.random(); => Random number between 0,1(not including 1) with 16 bits size.
function LoveCalc(name1 , name2) {
    var rn = Math.random();
    rn = Math.round(rn * 100);
    console.log(rn);
}

LoveCalc("Zack","Rawan");

// 15.1 Control Statements:(IF-Else):
/*
    (===) Checks equality of value and data type.
    (==) Checks equality of value only.
*/

function LoveCalcAdvanced(name1 , name2) {
    prompt("Person 1:")
    prompt("Person 2:")
    var rn = Math.random();
    rn = Math.round(rn * 100);

    if(rn === 100) {
        alert("Your love is like kanye loves kanye");
    }
    else {
        alert("Your Love is: "+rn+"%.");
    }
}

// 15.2 BMI Calculator Advanced (IF/ELSE)
/*
    BMI <18.5, the output should be: "Your BMI is <bmi>, so you are underweight."

    BMI 18.5-24.9, the output should be "Your BMI is <bmi>, so you have a normal weight."

    BMI >24.9, the output should be "Your BMI is <bmi>, so you are overweight."
*/
function bmiCalculator (weight, height) {
    var bmi = Math.round(weight / Math.pow(height, 2));
    var interpretation = "Your BMI is "+bmi+", ";

    if(bmi < 18.5)
        interpretation += "so you are underweight.";

    else if(bmi >= 18.5 && bmi <= 24.9)
        interpretation += "so you have a normal weight.";

    else
        interpretation += "so you are overweight.";

    return interpretation;
}

console.log(bmiCalculator(70, 1.75));

// 15.3 Leap Year Challenge Exercise
/*
    This is how to work out whether if a particular year is a leap year:
    A year is a leap year if it is evenly divisible by 4 ;
    except if that year is also evenly divisible by 100;
    unless that year is also evenly divisible by 400.
*/
function isLeap(year) {
    var leap = false;
        
    if(year % 4 === 0)
    {
        leap = true;
        if(year % 100 === 0)
        {
            leap = false;
            if(year % 400 === 0)
            {
                leap = true;
            }
        }
    } 

    if (leap)
        console.log("Leap year.");
    else
        console.log("Not leap year.")
}

// 15.4 Check List Challenge :
function CheckList() {
    var guestlist =
    ["Angela","Jack","Pan",
     "James","Lara","Jason"];
    var guest = prompt("Hello!\nWhat's Your Name?");
    if(guestlist.includes(guest))
        alert("Hello Sir!\nYou Can Go In.");
    else
        alert("Go away bitch you are not invited.");
    // console.log(guestlist);
    // console.log(guestlist.length);
    // console.log(guestlist[3]);
    // console.log(guestlist.includes("Zack"));
    // console.log(guestlist.includes("Angela"));
}

// 15.5 Print 1 To 100 m3 => fizz, m5 => buzz.
function PrintTO100() {
    var msg = "";
    for(let i = 1; i <= 100; i++)
    {
        if(i % 3 === 0) {
            if(i % 5 === 0)
                msg += "FizzBuzz, ";
            else
                msg += "Fizz, ";
        }
        else if(i % 5 === 0)
            msg += "Buzz, ";
        else
            msg += i+", ";
    }
    console.log(msg);
}

// 15.6 Who's Buying Lunch? Code Challenge:
/*
    You are going to write a function which will select a random name from a list of names. The person selected will have to pay for everybody's food bill.
    Example Input:
    ["Angela", "Ben", "Jenny", "Michael", "Chloe"]

    Example Output:
    Michael is going to buy lunch today!
*/
function whosPaying(names) {
    let randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex] + " is going to buy lunch today!";
}

// 15.7 99 Bottles Song:
/*
    99 bottles of beer on the wall, 99 bottles of beer.
    Take one down and pass it around, 98 bottles of beer on the wall.
*/
function bottlesSong() {
    var output = "";
    var counter = 99;

    while (counter >= 0) {
        if (counter > 1) {
            output += `${counter} bottles of beer on the wall, ${counter} bottles of beer.\n`;
            output += `Take one down and pass it around, ${counter - 1} bottles of beer on the wall.\n\n`;
        } else if (counter === 1) {
            output += `${counter} bottle of beer on the wall, ${counter} bottle of beer.\n`;
            output += `Take one down and pass it around, no more bottles of beer on the wall.\n\n`;
        } else {
            output += `No more bottles of beer on the wall, no more bottles of beer.\n`;
            output += `Go to the store and buy some more, 99 bottles of beer on the wall.\n`;
        }
        counter--;
    }

    console.log(output);
}

// 15.8 Fibonacci Generator Challenge:
// fib(5) 0 1 1 2 3
function fibonacciGenerator(n) {
    var output = [];
    
    if (n >= 1) output.push(0);
    if (n >= 2) output.push(1);

    for (var i = 2; i < n; i++) {
        output.push(output[i - 1] + output[i - 2]);
    }

    return output;
}
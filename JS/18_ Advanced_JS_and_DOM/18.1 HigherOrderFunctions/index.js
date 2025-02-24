var nums = document.querySelectorAll(".btn-num");
var signs = document.querySelectorAll(".btn-sign");
var equation = document.querySelector(".equation");
var result = document.querySelector(".result");

// Handle Number Buttons
for (let i = 0; i < nums.length; i++) {
    nums[i].addEventListener("click", function () {
        if (equation.innerHTML === "0") {
            equation.innerHTML = nums[i].innerText;
        } else {
            if (equation.innerHTML.length < 21)
                equation.innerHTML += nums[i].innerText;
            else
                result.innerHTML = "Limit";
        }
    });
}

// Handle Clear Button ("C")
document.querySelector(".btn-c").addEventListener("click", function () {
    equation.innerHTML = "0";
    result.innerHTML = "0";
});

// Handle Operator Buttons
for (let i = 0; i < signs.length; i++) {
    signs[i].addEventListener("click", function () {
        let lastChar = equation.innerHTML[equation.innerHTML.length - 1];
        let operators = ["+", "-", "×", "÷", "%", ".", "√", "x²"];

        if (equation.innerHTML !== "0" && !operators.includes(lastChar) && equation.innerHTML.length < 21) {
            let sign = signs[i].innerText;
            equation.innerHTML += sign;

            switch (sign) {
                case "√":
                    let num = parseFloat(equation.innerHTML);
                    if (num >= 0) {
                        let sqrtResult = removeExtraZeros(Math.sqrt(num).toFixed(9));
                        if (sqrtResult.length > 21) {
                            result.innerHTML = "Limit";
                            equation.innerHTML = "Limit";
                        } else {
                            result.innerHTML = sqrtResult;
                            equation.innerHTML = sqrtResult;
                        }
                    } else {
                        result.innerHTML = "Error";
                        equation.innerHTML = "0";
                    }
                    break;

                case "x²":
                    let squaredNum = parseFloat(equation.innerHTML);
                    let squaredResult = removeExtraZeros((squaredNum * squaredNum).toFixed(9));
                    if (squaredResult.length > 21) {
                        result.innerHTML = "Limit";
                        equation.innerHTML = "Limit";
                    } else {
                        result.innerHTML = squaredResult;
                        equation.innerHTML = squaredResult;
                    }
                    break;
            }
        }
    });
}

// Calculation Functions
function add(num1, num2) {
    return removeExtraZeros((num1 + num2).toFixed(9));
}

function sub(num1, num2) {
    return removeExtraZeros((num1 - num2).toFixed(9));
}

function mul(num1, num2) {
    return removeExtraZeros((num1 * num2).toFixed(9));
}

function div(num1, num2) {
    if (num2 === 0) return alert("Not Valid");
    return removeExtraZeros((num1 / num2).toFixed(9));
}

function calc(num1, num2, operator) {
    return operator(num1, num2);
}

// Function to remove extra trailing zeros
function removeExtraZeros(num) {
    return Number(num);  // Handles scientific notation properly
}

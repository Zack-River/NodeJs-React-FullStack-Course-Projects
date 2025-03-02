var btns = document.querySelectorAll(".drum");

//detecting Mouse Clicks
for (let i = 0; i < btns.length; i++)
    btns[i].addEventListener("click", function () {
        this.style.color = "white";
        let buttonContent = btns[i].innerHTML;
        makeSound(buttonContent);
        buttonAnimation(buttonContent);
    });

    //detecting Keyboard Press
    document.addEventListener("keydown", function(event) {
        makeSound(event.key)
        buttonAnimation(event.key)
    });

    function makeSound (character) {
        switch (character) {
            case "w":
                var tom1 = new Audio("./sounds/tom-1.mp3");
                tom1.play();
                break;

            case "a":
                var tom2 = new Audio("./sounds/tom-2.mp3");
                tom2.play();
                break;

            case "s":
                var tom3 = new Audio("./sounds/tom-3.mp3");
                tom3.play();
                break;

            case "d":
                var tom4 = new Audio("./sounds/tom-4.mp3");
                tom4.play();
                break;

            case "j":
                var crash = new Audio("./sounds/crash.mp3");
                crash.play();
                break;
            
            case "k":
                var kick = new Audio("./sounds/kick-bass.mp3");
                kick.play();
                break;
            
            case "l":
                var snare = new Audio("./sounds/snare.mp3");
                snare.play();
                break;

            default:
                break;
        }
    }

    function buttonAnimation(currentKey) {
        var activeButton = document.querySelector("." + currentKey);
        activeButton.classList.add("pressed");
        setTimeout(function(){removeAnimation(activeButton)}, 100);
    }

    function removeAnimation(element)
    {
        element.classList.remove("pressed");
    }

    var houseKeeper = {
        name: "7amo",
        YOE: 16,
        cleaningRepetoire: ["bedrooms","living rooms"],
    }

    alert("Hello I am "+houseKeeper.name+"\n I am only an object.");

    function HouseKeeper (name, YOE, cleaningRepetoire) {
        this.name = name,
        this.YOE = YOE,
        this.cleaningRepetoire = cleaningRepetoire,
        this.clean = function() {
            alert("Cleaning In Progress....");
        },
        this.info = function() {
            alert("Hello I am: "+this.name+".\nI have: "+this.YOE+" Years Of Experience.\n I am object of a class.");
        }
    }

    var houseKeeper1 = new HouseKeeper("Ahmed",10,["stairs","rooms","bathrooms"]);
    console.log(houseKeeper1.name);
    houseKeeper1.info();
    houseKeeper1.clean();

    // call back functions are fucnctions which called inside higher order functions.
    // document.addEverntListener("keypress", function());
    // at this case addEverntListener() is higher order.
    // while function() is a callback function.
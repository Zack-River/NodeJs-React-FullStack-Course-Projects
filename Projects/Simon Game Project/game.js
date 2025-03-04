var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

var highestScore = 0;

$(document).keydown(function(event){
    if(!started) {
        levelUp(0);
        nextSequence();
        started = true;
    }
});

function nextSequence() {
    level++;
    levelUp(level);

    userClickedPattern = [];

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
}

$(".btn").click(function() {
    var userChosenColor = $(this).attr("id");
    playSound(userChosenColor);
    animatePress(userChosenColor);

    userClickedPattern.push(userChosenColor);

    checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel) {

    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){

        if(userClickedPattern.length === gamePattern.length) {
            setTimeout(() => {
                nextSequence();
            } , 1000);
        }
    }
    else {
        playSound("wrong");

        $("body").addClass("game-over");

        $("#level-title").text("Game Over, Press Any Key to Restart");
        
        updateHighestScore(level - 1);

        startOver();

        setTimeout(() => {
            $("body").removeClass("game-over");
        },200);

    }
}

function playSound(color) {
    var audio = new Audio("./sounds/" + color + ".mp3");
    audio.play();
}

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(() => {
        $("#" + currentColour).removeClass("pressed");
    },100);
}

function levelUp(level) {
    $("#level-title").text("Level " + level);
}

function updateHighestScore(score) {
    if(score > highestScore) {
        highestScore = score;
    }
    $("#score").text("Highest Score: "+highestScore);
}

function startOver() {
    level = 0;
    started = false;
    gamePattern = [];
}
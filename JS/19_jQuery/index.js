//$("h1").css("color","red");

// Change text inside tag.
$("h1").text("I am not here.");

// Change text inside tag while manipulating HTML.
$("h1").html("<p>I am small text.</p>")

// add class / classes to tag.
$("h1").addClass("fancy font-60");

// remove class / classes from a tag.
$("h1").removeClass("fancy");

// check if class existed in tag.
$("h1").hasClass("fancy");

// Change attribute Value.
$("a").attr("href","https://www.yahoo.com");

// mouse click event listener.
$("p").click(function(){
    $("p").css("color","purple");
    setTimeout(() => {
        $("p").css("color","black");
    }, 200);
});

// $("button").click(() => {
//     if($("p").css("color") === "rgb(0, 0, 0)")
//         $("p").css("color","purple");
//     else
//         $("p").css("color","black");
// })


// Keypress event listener.
$("input").keypress((event) => {
    console.log(event.key)
})

$(document).keypress((event) => {
    $("p").text(event.key);
});

// all js listeners with on.
$("button").on("mouseover", function() {
    $(this).css("background-color","red")
});

$("button").on("mouseout", function() {
    $(this).css("background-color","grey")
});

// add html code before or after tag.
$("p").before("<h1>Hello World!")
$("h1 h1").addClass("fancy font-100");

// add html code inside tag before or after content.
$("a").prepend("Click ");
$("a").append(" Search");

//remove elements
$(".deleted").remove();

// hide or show element
$(".normal").hide();

// animation and project
$("button").on("click", function() {
    var p = $("p");
    switch ($(this).attr("class")) {
        case "show":
            p.show();
            break;

        case "hide":
            p.hide();
            break;

        case "recolor":
            const getRandomColor = () =>  Math.floor(Math.random() * 256);
            p.css("color", `rgb(${getRandomColor()},${getRandomColor()},${getRandomColor()})`);
            break;

        default:
            console.log($(this));
            break;
    }
});

//console.log($("h1").css("font-size"));
//console.log($("h1").css("color"));
//console.log($("h1").css("font-family"));


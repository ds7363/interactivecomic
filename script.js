AOS.init();


$(document).ready(function() {
    var isAnimating = false;
    var rotationAngle = -90;
    var rotated = false;

    $("#land-button").click(function() {
        if (!isAnimating) {
            isAnimating = true;
            if (!rotated) {
                rotationAngle = 90;
                var newX = -400;
                var newY = -300;

                $("#rocket").css("transform", "translate(" + newX + "px, " + newY + "px) rotate(" + rotationAngle + "deg)");
                $("#rocket").css("transition", "transform 2s");

                setTimeout(function() {
                    // Reset the transform and remove the transition
                    $("#rocket").css("transform", "translate(" + newX + "px, " + newY + "px) rotate(" + rotationAngle + "deg)");
                    $("#rocket").css("transition", "none");
                    
                    isAnimating = false;
                }, 2000); // 2 seconds for rotation
                rotated = true;
            } 
            else {
                rotationAngle = 90;
                var newX = -200;
                var newY = -300;
                
                $("#rocket").css("transform", "translate(" + newX + "px, " + newY + "px) rotate(" + rotationAngle + "deg)");
                $("#rocket").css("transition", "transform 2s");
                
                setTimeout(function() {
                    // Reset the transform and remove the transition
                    $("#rocket").css("transform", "translate(" + newX + "px, " + newY + "px) rotate(" + rotationAngle + "deg)");
                    $("#rocket").css("transition", "none");
                    
                    var currentPosition = $("#rocket").offset();
                    var rocketWidth = $("#rocket").width();
                    var rocketHeight = $("#rocket").height();
        
                   
                    $("#rocket").css("position", "fixed");
                    $("#rocket").css("left", currentPosition.left + "px");
                    $("#rocket").css("top", currentPosition.top + "px");
                    $("#rocket").css("width", rocketWidth + "px");
                    $("#rocket").css("height", rocketHeight + "px");
                    $("#rocket").css("z-index", 9999);
                    isAnimating = false;
                }, 2000); // 2 seconds for translation
            }
        }
    });
});

document.getElementById('land-button').addEventListener('click', function() {
    document.querySelector('.button-reaction-effect').style.animation = 'pulse 1s 1';
});

let rocket = document.getElementById('rocket');
let rocketAnimation = document.getElementById('rocket').style.animation;

function pausemoveUpDown() {
    document.getElementById('rocket').style.animation = "none";
}

function resumemoveUpDown() {
    document.getElementById('rocket').style.animation = rocketAnimation;
}

window.addEventListener("scroll", function() {
    if (window.scrollY === 0) {
        resumemoveUpDown();
    } else {
        pausemoveUpDown();
    }
});
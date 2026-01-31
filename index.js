// EXERCISE 1.1 Smart Script Placement
// get references for html elements into variables
const messageElement = document.getElementById('message');
const buttonElement = document.getElementById('revealButton');

// Adding a click event listener to the button
buttonElement.addEventListener('click', function() {
    // Change the paragraph text
    messageElement.textContent = 'JavaScript is running!';
    
    // Change the button text
    buttonElement.textContent = 'Done!';
});




// EXERCISE 1.3 - Personalized Welcome System

function welcomeUser(name = "Guest", isMember) {
    if (isMember === true) {
        console.log("Welcome back, VIP " + name + "!");
    } else if (isMember === false) {
        console.log("Hello and welcome, " + name + "!");
    }
}
console.log("EXERCISE 1.3 TESTS");
// Tests fr all possible combinations
welcomeUser("Tiisu", true);        // "Welcome back, VIP John!"
welcomeUser("Sharif", false);      // "Hello and welcome, Sarah!"
welcomeUser(undefined, true);     // "Welcome back, VIP Guest!" (default name)
welcomeUser("Okasha", false);       // "Hello and welcome, Mike!"

// EXERCISE 1.4 - Grade Calculator with Feedback
function getGradeAndComment(score) {
    let grade;
    let comment;
    
    if (score >= 90) {
        grade = "A";
        comment = "Outstanding! Keep it up!";
    } else if (score >= 80) {
        grade = "B";
        comment = "Very good - room to reach A";
    } else if (score >= 70) {
        grade = "C";
        comment = "Good effort - aim higher next time";
    } else if (score >= 60) {
        grade = "D";
        comment = "Passing - but needs improvement";
    } else {
        grade = "F";
        comment = "You need to study Hard or you will go home";
    }
    
    return {
        grade: grade,
        comment: comment
    };
}

console.log("EXERCISE 1.4 TESTS");
console.log("Score 59:", getGradeAndComment(59));
console.log("Score 60:", getGradeAndComment(60));
console.log("Score 89.9:", getGradeAndComment(89.9));
console.log("Score 90:", getGradeAndComment(90));
console.log("Score 100:", getGradeAndComment(100));
console.log("Score -5:", getGradeAndComment(-5));

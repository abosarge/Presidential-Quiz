window.addEventListener('load');

var correct = 0;

var questionOne = prompt("Who was the fourth president?");
if (questionOne.toUpperCase() === "MADISON" || questionOne.toUpperCase() === "JAMES MADISON") {
correct += 1;
} else {
document.write("<p>James Madison was the fourth president.</p>");
}

var questionTwo = prompt("What year was the Declaration of Independence written?");
if (parseInt(questionTwo) === 1776) {
correct += 1;
} else {
document.write("<p>The Declaration of Independence was written in 1776.</p>");
}

var questionThree = prompt("Who was the first Vice President?");
if (questionThree.toUpperCase() === "ADAMS" || questionThree.toUpperCase() === "JOHN ADAMS") {
correct += 1;
} else {
document.write("<p>John Adams was the first Vice President.</p>");
}

var questionFour = prompt("Who is our current president?");
if (questionFour.toUpperCase() === "OBAMA" || questionFour.toUpperCase() === "BARACK OBAMA") {
correct += 1;
} else {
document.write("<p>Barack Obama is our current president.</p>");
}

var questionFive = prompt("What country did we gain independence from?");
if (questionFive.toUpperCase() === "ENGLAND" || questionFive.toUpperCase() === "GREAT BRITAIN"|| questionFive.toUpperCase() === "BRITIAN") {
correct += 1;
} else {
document.write("<p>We gained our independence from England.</p>");
}

document.write("<p>You got " + correct + " out of 5 questions correct!</p>");

if ( correct === 5 ) {
document.write("<p><strong>You will be our next president!</strong></p>");
} else if ( correct >= 3 ) {
document.write("<p><strong>You'll make a great vice president, would you like to be my running mate?</strong></p>");
}
else if ( correct >= 1 ) {
document.write("<p><strong>Congratulations, you have been appointed Secretary of State!</strong></p>");
} else { 
document.write("<p><strong>You lost the election. Try again next year.</strong></p>");
}

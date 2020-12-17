// var name = prompt("What is Your Good  name ?");
// var firstletter = name.slice(0, 1).toUpperCase();
// var restLetter = name.slice(1, name.length).toLowerCase();
// console.log("My Name is : " + firstletter + restLetter);

// var dogage = prompt("Enter the dog age:")
// var human_age = ((dogage - 2) * 4) + 21;
// console.log(`This is the human age :${human_age}`);

// Here the funciton section
// function lifeInWeek(age) {
//     var YearRemaining = 90 - age;
//     var days = YearRemaining * 365;
//     var weeks = YearRemaining * 52;
//     var months = YearRemaining * 12;
//     console.log(`You have ${days} days ${weeks} weeks ${months} months left `);

// }

// lifeInWeek(21);
// here we start the another type of the function that


// var change = function(money) {
//     var numberofBottels = Math.floor(money / 1.5);
//     var numberofchange = money % 1.5;
//     var totalthings = ["This is  Change " + numberofchange, "This is  Milk Bottels " + numberofBottels];
//     return totalthings;
// }
// for (var i = 0; i < change().length; i++) {
//     console.log(change(10)[i]);
// }

// another function section
// var personheight = prompt("Enter The Height In Meter");
// var personWeight = prompt("Enter The Weight in kg");

// function bmiResult(weight, height) {
//     var bmi = weight / (Math.pow(height, 2));
//     return Math.round(bmi);
// }

// console.log(bmiResult(personWeight, personheight));


// this is the love calculetor


// document.getElementById("check-button").addEventListener("click", lovecalculetor());/

function lovecalculetor() {

    var loveScore = Math.random() * 100;
    loveScore = Math.floor(loveScore) + 1;
    var line;
    if (loveScore > 70) {
        line = `Your Love score  is ${loveScore} You love each other like kanye loves kanye`;
    } else if (loveScore > 30 && loveScore <= 70) {
        line = `Your love score is ${loveScore} You should Push more effort in your relationship`;

    } else if (loveScore <= 30) {
        line = `Your Love score is ${loveScore} You Go together like oil and water.`;

    }

    var h1 = document.createElement('h1');
    var text = document.createTextNode(`${line}`);
    h1.appendChild(text);
    // we can set the id and class of any elemnt created in javascript by this method if we need this for work but this is just an example of this this working something seriuos
    document.getElementById('overview').appendChild(h1);
    document.getElementById('input-form').style.display = 'none';
}

function leapyear() {
    var textvalue = document.getElementById("leapyearinput").value;
    console.log(textvalue);
    var line1;
    if (textvalue % 4 == 0 && textvalue % 100 !== 0) {
        console.log(textvalue + "first value");
        line1 = textvalue + " is The Leap Year"

    } else if (textvalue % 100 == 0 && textvalue % 400 == 0) {

        console.log(textvalue + "second value");
        line1 = textvalue + " is The Leap Year";

    } else {
        console.log(textvalue + "third value");
        line1 = textvalue + " is Not The leap year";
    }
    var h1 = document.createElement('h1');
    var text1 = document.createTextNode(`${line1}`);
    h1.appendChild(text1);
    // we can set the id and class of any elemnt created in javascript by this method if we need this for work but this is just an example of this this working something seriuos
    document.getElementById('leap-text-result').appendChild(h1);
    document.getElementById('footer').style.display = 'none';

}
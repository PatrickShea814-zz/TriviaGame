
var pages = [
    {
        questionOne: [{
            ques: "What ship does the first mission take place on?",
            choices: ["Dawn Under Heaven", "Forward Unto Dawn", "The Pillar of Autumn", "Spirit of Fire"],
            correctAnswer: "The Pillar of Autumn"}]
    }, {
        questionTwo: [{
            ques: "What is 343 Guilty Spark?",
            choices: ["2401 Penitent Tangent", "343 Guilty Spark", "Mendicant Bias", "867 Guilty Tangent"],
            correctAnswer: "1"}]
    }, {
        questionThree: [{
            ques: "Name the Captain of The Pillar of Autumn",
            choices: ["Miranda Keyes", "Jacob Keyes", "Michael Keyes", "Avery Johnson"],
            correctAnswer: "1"}]
    }, {
        questionFour: [{
            ques: "Who built Halo?",
            choices: ["Forerunner", "Humans", "Prometheans", "Precursors"],
            correctAnswer: "1"}]
    }, {
        questionFive: [{
            ques: "Who is the leader of the Brutes?",
            choices: ["Half-Jaw", "Arbiter", "Atriox", "Tartarus"],
            correctAnswer: "1"}]
    }, {
        questionSix: [{
            ques: "What was Foe Hammer's call-sign?",
            choices: ["John 177", "Charlie 258", "Echo 419", "Whisky 327"],
            correctAnswer: "Echo 419"}]
    }, {
        questionSeven: [{
            ques: "I would have been you _______.",
            choices: ["Doom", "Enemy", "Savior", "Daddy"],
            correctAnswer: "Daddy"}]
    }, {
        questionEight: [{
            ques: "What do the Covenant seek?",
            choices: ["The Great Journey", "Halo", "The Fringe", "The Ark"],
            correctAnswer: "The Great Journey"}]
    }, {
        questionNine: [{
            ques: "Who created Cortana?",
            choices: ["Dr. Halsey", "Dr. Keyes", "Dr. Palmer", "The Didact"],
            correctAnswer: "Dr. Halsey"}]
    }, {
        questionTen: [{
            ques: "What is The Silent Cartographer?",
            choices: ["Map Security", "An Island", "A Map Room", "The Control Room"],
            correctAnswer: "1"}]
    }
];

var pageQues = pages[Math.floor(Math.random() * pages.Length)];



var number = 30; //  Set our number counter to 100.

var intervalId; //  Variable that will hold our interval ID when we execute the "run" function

$("#resume").on("click", run); //  When the resume button gets clicked, execute the run function.
$("#startOver").on("click", reset); // write a reset function

function reset() {
    $("startOver").attr("id", "resume");
    $("#resume").text("Resume");
    number = 30;
    intervalId;
};

//  The run function sets an interval that runs the decrement function once a second.
function run() {
    $("#resume").attr('id', 'startOver');
    $("startOver").text("Start Over");
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

//  The decrement function.
function decrement() {

    //  Decrease number by one.
    number--;

    //  Show the number in the #show-number tag.
    $("#showNumber").html("<h2>" + "Time Left: " + number + " Seconds" + "</h2>");

    //  Once number hits zero...
    if (number == -1) {
        //  ...run the stop function.
        reset();
        //  Alert the user that time is up.
        alert("Time Up! How did you do?");
    }
}
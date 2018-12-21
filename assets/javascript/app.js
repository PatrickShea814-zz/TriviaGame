

$(document).mouseover(function () {
    document.getElementById("my_audio").play();
});
$(document).ready(function () {
    $("#my_audio").hide();
    var options = [
        {
            question: "What ship does the first mission take place on?",
            choice: ["Dawn Under Heaven", "Forward Unto Dawn", "The Pillar of Autumn", "Spirit of Fire"],
            answer: 1,
            photo: "assets/images/pillar.jpg"
        },
        {
            question: "What is 343 Guilty Spark?",
            choice: ["2401 Penitent Tangent", "343 Guilty Spark", "Mendicant Bias", "867 Guilty Tangent"],
            answer: 1,
            photo: "assets/images/monitor.png"
        },
        {
            question: "Name the Captain of The Pillar of Autumn",
            choice: ["Miranda Keyes", "Jacob Keyes", "Michael Keyes", "Avery Johnson"],
            answer: 1,
            photo: "assets/images/Keyes_Jacob_Pacchetto.jpg"
        },
        {
            question: "Who built Halo?",
            choice: ["The Forerunner", "Humans", "Prometheans", "Precursors"],
            answer: 0,
            photo: "assets/images/forerunner.jpg"
        },
        {
            question: "Who is the leader of the Brutes?",
            choice: ["Half-Jaw", "Arbiter", "Atriox", "Tartarus"],
            answer: 3,
            photo: "assets/images/tartarus.jpg"
        },
        {
            question: "What was Foehammer's call-sign?",
            choice: ["John 177", "Charlie 258", "Echo 419", "Whisky 327"],
            answer: 2,
            photo: "assets/images/Echo_419_and_Bravo_022.jpg"
        },
        {
            question: "I would have been your _______.",
            choice: ["Doom", "Enemy", "Savior", "Daddy"],
            answer: 3,
            photo: "assets/images/daddy.jpeg"
        },
        {
            question: "What do the Covenant seek?",
            choice: ["The Great Journey", "Halo", "The Fringe", "The Ark"],
            answer: 0,
            photo: "assets/images/pillar.jpg"
        }];

    var correctCount = 0;
    var wrongCount = 0;
    var killdeathRatio = correctCount / wrongCount;
    var unanswerCount = 0;
    var timer = 19;
    var intervalId;
    var userGuess = "";
    var running = false;
    var qCount = options.length;
    var pick;
    var index;
    var newArray = [];
    var holder = [];

    $("#reset").hide();
    //click mission start to begin
    $("#start").on("click", function () {
        $("#timeleft").html("<h2>" + "Time remaining: 20 Seconds" + "</h2>");
        $("#start").hide();
        $("#instruc").hide();
        runTimer();
        displayQuestion();
        for (var i = 0; i < options.length; i++) {
            holder.push(options[i]);
        }
    })
    //timer start
    function runTimer() {
        $("#reset").hide();
        if (!running) {
            intervalId = setInterval(decrement, 1000);
            running = true;
        }
    }
    //timer countdown
    function decrement() {
        $("#timeleft").html("<h2>" + "Time remaining: " + timer + " Seconds" + "</h2>");
        timer--;

        //stop timer if it reaches 0
        if (timer === -1) {
            $("#timeleft").html("<h2>" + "MISSION END:" + "</h2>");
            unanswerCount++;
            stop();
            $("#questionblock").empty();
            $("#answerblock").empty();
            $("#questionblock").html("<h2>CARNAGE REPORT: </h2>");
            $("#answerblock").append("<h2> Kills: " + correctCount + "</h2>");
            $("#answerblock").append("<h2> Deaths: " + wrongCount + "</h2>");
            $("#answerblock").append("<h2> K/D Ratio: " + killdeathRatio + "</h2>");
            $("#answerblock").append("<h2> Unanswered: " + unanswerCount + "</h2>");
            $("#reset").show();


        }
    }

    //stop timer
    function stop() {
        running = false;
        clearInterval(intervalId);
    }
    //randomly pick question in array if not already shown then display question and loop though and display possible answers
    function displayQuestion() {
        //generate random index within the array
        index = Math.floor(Math.random() * options.length);
        pick = options[index];

        $("#questionblock").html("<h2>" + pick.question + "</h2>");
        for (var i = 0; i < pick.choice.length; i++) {
            var userChoice = $("<button>");
            userChoice.addClass("answerchoice");
            userChoice.html(pick.choice[i]);

            //assign array position to the check answer
            userChoice.attr("data-guessvalue", i);
            $("#answerblock").append(userChoice);

        }

        //click function to select answer
        $(".answerchoice").on("click", function () {
            //get array position from userGuess
            userGuess = parseInt($(this).attr("data-guessvalue"));

            //correct guess or wrong guess outcomes
            if (userGuess === pick.answer) {
                stop();
                correctCount++;
                userGuess = "";
                $("#answerblock").html("<p>Correct!</p>");
                hidepicture();
            } else {
                stop();
                wrongCount++;
                userGuess = "";
                $("#answerblock").html("<p>Wrong! The correct answer is: " + pick.choice[pick.answer] + "</p>");
                hidepicture();
            }
        })
    }

    function hidepicture() {
        $("#answerblock").append("<img src=" + pick.photo + ">");
        newArray.push(pick);
        options.splice(index, 1);

        var hidpic = setTimeout(function () {
            $("#answerblock").empty();
            timer = timer;

            //run the score screen if all questions answered
            if ((wrongCount + correctCount + unanswerCount) === qCount) {
                $("#questionblock").empty();
                $("#questionblock").html("<h2>Carnage Report: </h2>");
                $("#answerblock").append("<h2> Correct: " + correctCount + "</h2>");
                $("#answerblock").append("<h2> Incorrect: " + wrongCount + "</h2>");
                $("#answerblock").append("<h2> K/D Ratio: " + killdeathRatio + "</h2>");
                $("#answerblock").append("<h2> Unanswered: " + unanswerCount + "</h2>");
                $("#reset").show();


            } else {
                runTimer();
                displayQuestion();
            }
        }, 1500);
    }

    $("#reset").on("click", function () {
        $("#reset").hide();
        timer=20;
        $("#answerblock").empty();
        $("#questionblock").empty();
        for (var i = 0; i < holder.length; i++) {
            options.push(holder[i]);
        }
        // hidepicture();
        runTimer();
        displayQuestion();

    })

})
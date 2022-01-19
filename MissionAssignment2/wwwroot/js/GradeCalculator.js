// Author: Logan Kim
// Mission #3 Assignment


// Calculate Final Grade and Show through alert
$("#Calculate").click(function () {

    // Checks if the score values are in the range (0, 100)
    if (($("#txtAssignments").val() > 100) || ($("#txtAssignments").val() < 0) || ($("#txtAssignments").val() == "")) {
        alert("Cannot Calculate");
    } else if (($("#txtGP").val() > 100) || ($("#txtGP").val() < 0) || ($("#txtGP").val() == "")) {
        alert("Cannot Calculate");
    } else if (($("#txtQuizzes").val() > 100) || ($("#txtQuizzes").val() < 0) || ($("#txtQuizzes").val() == "")) {
        alert("Cannot Calculate");
    } else if (($("#txtExams").val() > 100) || ($("#txtExams").val() < 0) || ($("#txtExams").val() == "")) {
        alert("Cannot Calculate");
    } else if (($("#txtINTEX").val() > 100) || ($("#txtINTEX").val() < 0) || ($("#txtINTEX").val() == "")) {
        alert("Cannot Calculate");
    } else {
        // Calculates the Final Grade (Number)
        GradeScore = Math.round((($("#txtAssignments").val() * 0.55) +
            ($("#txtGP").val() * 0.05) +
            ($("#txtQuizzes").val() * 0.1) +
            ($("#txtExams").val() * 0.2) +
            ($("#txtINTEX").val() * 0.1)) * 100) / 100;

        // Calculates the Letter Grade
        if (GradeScore >= 93) {
            GradeLetter = "A";
        } else if (GradeScore >= 90) {
            GradeLetter = "A-";
        } else if (GradeScore >= 87) {
            GradeLetter = "B+";
        } else if (GradeScore >= 83) {
            GradeLetter = "B";
        } else if (GradeScore >= 80) {
            GradeLetter = "B-";
        } else if (GradeScore >= 77) {
            GradeLetter = "C+";
        } else if (GradeScore >= 73) {
            GradeLetter = "C";
        } else if (GradeScore >= 70) {
            GradeLetter = "C-";
        } else if (GradeScore >= 67) {
            GradeLetter = "D+";
        } else if (GradeScore >= 63) {
            GradeLetter = "D";
        } else if (GradeScore >= 60) {
            GradeLetter = "D-";
        } else {
            GradeLetter = "E";
        };

        // Alerts Final Grade (Number) and Letter Grade
        alert("Final Grade: " +
            GradeScore +
            "\nLetter Grade: " + GradeLetter);
    } 

});
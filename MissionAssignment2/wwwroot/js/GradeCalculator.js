// Author: Logan Kim
// Mission #2 Assignment

// Calculate Final Grade and Show through alert
$("#Calculate").click(function () {
    GradeScore = Math.round((($("#txtAssignments").val() * 0.55) +
        ($("#txtGP").val() * 0.05) +
        ($("#txtQuizzes").val() * 0.1) +
        ($("#txtExams").val() * 0.2) +
        ($("#txtINTEX").val() * 0.1)) * 100) / 100;

    console.log("click");

    
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
    } 

    //alert("Final Grade: " +
    //    GradeScore +
    //    "\nLetter Grade: " + GradeLetter);

    $("#GradeScore").innerHTML = GradeScore;
    $("#GradeLetter").innerHTML = GradeLetter;

})
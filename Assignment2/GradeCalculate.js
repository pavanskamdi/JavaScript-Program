var StuScore=85;
function GradeCalc(StuScore){
    switch(true){
        case StuScore>=90:
            console.log("S Grade");
            break;
        case StuScore>=80:
            console.log("A Grade");
            break;
        case StuScore>=70:
            console.log("B Grade");
            break;
        case StuScore>=60:
            console.log("C Grade");
            break;
        case StuScore>=50:
            console.log("D Grade");
            break;
        case StuScore>=40:
            console.log("E Grade");
            break;
        case StuScore>=0:
            console.log("Student has Failed");
            break;
        default:
            console.log("Invalid Marks");

    }
}
GradeCalc(StuScore);

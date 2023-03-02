var side1=10;
var side2=9;
var side3=8;
if(side1==side2 && side2==side3){
    console.log("Equilateral Triangle");
}
else if(side1==side2 || side2==side3 || side3==side1){
    console.log("Isosceles Triangle");
}
else{
    console.log("Scanlene Triangle");
}
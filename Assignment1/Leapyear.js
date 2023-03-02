function LeapYear(year){
    if((year%4==0) && year%100!=0 || year%400==0 ){
        console.log(`${year} is Leap Year`);
    }
    else{
        console.log(`${year} is not leap  year`);
    }
}
LeapYear(1900);
LeapYear(2022);
LeapYear(1900);
LeapYear(3210);
LeapYear(2000);
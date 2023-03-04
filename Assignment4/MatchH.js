function MatchHouse(NumH){
    if(NumH<1){
        console.log("Enter Valid Number");
    }
    else{
        let Hcount=(NumH-1)*5+6;
        console.log(`Number of Matchstick require for Matchhouse ${NumH} is ${Hcount}`);
    }
}
MatchHouse(1);
MatchHouse(4);
MatchHouse(87);
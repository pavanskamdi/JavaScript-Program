function ArmNum(Numb){
    let sum=0;
    let temp=Numb;
    while(temp>0){
        let rem=temp%10;
        sum+=rem*rem*rem;
        temp = parseInt(temp / 10);
    }
    console.log(sum);
    if(Numb==sum){
        console.log(`${Numb} is Armstrong Number`);
    }
    else{
        console.log(`${Numb} is not Armstrong Number`);
    }
}
ArmNum(370);
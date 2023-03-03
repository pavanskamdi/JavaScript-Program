function SpeNum(Numb){
    let sum=0;
    let temp=Numb;
    while(temp>0){
        let cube=1;
        let rem=temp%10;
        for(let i=rem;i>0;i--){
            cube*=i;
        }
        sum+=cube;
        temp = parseInt(temp / 10);
    }
    if(Numb==sum){
        console.log(`${Numb} is Special Number`);
    }
    else{
        console.log(`${Numb} is not Special Number`);
    }
}
SpeNum(145);
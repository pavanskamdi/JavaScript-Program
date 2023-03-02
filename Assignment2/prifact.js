function PrimFact(Num1,Num2){
    for(i=Num1;i<=Num2;i++){
        let isprime=true;
        if(i<2){
            isprime=false;
        }
        else{
            for(j=2;j<i;j++){
                if(i%j==0){
                    isprime=false;
                    break;
                }
            }
        }
        if(isprime){
            let fact=1;
            for(let k=1;k<=i;k++){
                fact=fact*k;
            }
            console.log(`Factorial of Prime Number ${i} is ${fact}`);
        }
    }
}
PrimFact(2,11);
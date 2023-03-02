function FactorialofNumber(num){
    if(num<0){
        console.log(`Factorial of negative number does not Exist`);
    }
    else if(num==0){
        console.log(`Factorial of ${num} is 1.`);
    }
    else{
        let fact=1;
        for(i=1;i<=num;i++){
            fact*=i;
        }
        console.log(`Factorial of ${num} is ${fact}`);
    }
}
FactorialofNumber(-6);
FactorialofNumber(9);
FactorialofNumber(1);
FactorialofNumber(15);
FactorialofNumber(5);
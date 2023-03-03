function patternn(){
    let num=1;
    let string="";
    for(let i=0;i<5;i++){
        for(let j=0;j<i;j++){
            string +=num.toString();
            string +=" "
            num+=1;
        }
        string+="\n";
    }
    console.log(string);
}
patternn();

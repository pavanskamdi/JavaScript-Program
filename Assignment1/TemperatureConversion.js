function ConverttoF(Temperature){
    fertemperture=((Temperature/5)*9)+32;
    console.log(`${Temperature}\u00B0C is ${fertemperture}\u00B0F`);
}

function ConverttoC(Temperature){
    celtemperature=((Temperature-32)/9)*5;
    console.log(`${Temperature}\u00B0F is ${celtemperature}\u00B0C`);
}

ConverttoF(60);
ConverttoC(40);
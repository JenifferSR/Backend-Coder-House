let globalVar = "Variável global";

function exemplo(){
    let localVar = "Variável local";
    console.log("Dentro da função:");
    console.log("globalVar");
    console.log(localVar);
}

console.log("Fora da função:");
console.log(globalVar);
console.log(localVar);
exemplo();

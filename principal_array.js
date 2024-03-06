const readlineSync = require("readline-sync")

let numArray1 = [1, 2, 3 ,4 ,5] 
let numArray2 = [ ] 
let numArray3 = [ ]


let valor = 0

function soma(){
    for(let i=0;i<=4;i++){
        numArray3[i] = numArray1[i] + numArray2[i]
    }
   return numArray3
}
function ler(){
    let contador = 0

    while(contador <= 4){
        valor = Number(readlineSync.question("Digite um valor para ser guardado: "))
        numArray2.push(valor)
        contador += 1
     
     }
     return numArray2
}
console.log("===================================================");
console.log("Soma dos valor de 2 arrays");
console.log("===================================================");

console.log("===================================================");
let leia = ler()
console.log("O array 2 é = ", leia);
console.log("===================================================");


let resposta = soma()
console.log("O array 3 é = ",resposta);



console.log("===================================================");
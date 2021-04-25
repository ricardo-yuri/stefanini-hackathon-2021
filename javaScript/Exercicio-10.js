/**
 * Como parte da nossa viagem matemática implemente a função fatorial (sem a chamada da biblioteca Math) 
 * com recursão. 

Lembrando que o fatorial se calcula dessa forma: https://pt.wikipedia.org/wiki/Fatorial
n! = n . (n - 1)!

 */

function calcFatorial(){
    let n = window.prompt("Digite o valor de N!");
    parseInt(n);
    let resultado = n;
    while(n > 1){
        resultado = resultado*(n-1);n--;
    } 
    alert("O resultado do calculo fatorial é " + resultado);
}

calcFatorial();
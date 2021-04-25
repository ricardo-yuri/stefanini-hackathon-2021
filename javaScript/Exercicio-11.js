/**Com o conceito de array em mente, implemente na sua calculadora o cálculo de média aritmética. */

let numerosMedia = [];

    while(true){
        let numeros = prompt("Digite os Numeros que deseja calcular a media; 'N' para sair");
        if(numeros == 'N') {
            break;
        } else {
            numerosMedia.push(Number(numeros));
        }
    }

function mediaNotas() {

    let somaNumeros = 0;

    let media;
    for(var i = 0; i < numerosMedia.length; i++){
        somaNumeros += Number(numerosMedia[i]);
    }
    media = somaNumeros / numerosMedia.length;
    alert('A média dos valores informado é : ' + media);    
}

mediaNotas();
const minutes = 5 //declarando a variável
let countDownSeconds = minutes * 60

function pause(){ //função para pausar
    clearInterval(countDown) //quando apertarmos o botão "pausar"   função que funciona a cada segundo para de funcionar
}
function stop(){
    clearInterval(countDown) //a mesma função acima, porém com o diferencial abaixo
    document.getElementById("watch-time").innerText = "00:00" //volta ao seu estado inicial

}

const countDown = setInterval (()=>{ //a cada segundo esta função toda será chamada
    countDownSeconds--; //diminuindo os segundos
    changeTime(countDownSeconds); //a função changeTime será aplicada nos timeSeconds a cada intervalo, onde sempre será diminuído um segundo por vez
    if(countDownSeconds <= 0 || countDownSeconds < 1){ //momento onde o intrevalo será interrompido, senão a contagem ultrapassaria o 0, e contar infinitos números negativos
        clearInterval(countDown);
    }

},1000)

function changeTime(second){ //os resultados da função anônima acima, serão transferidos para esta e sofrerão alteração
    //console.log(second, second/60) //quando se divide os segundos por 60, teremos um número inteiro, que com o math.floor será apenas o número inteiro 
    const min = Math.floor(second/60); //quando dividimos os segundos por 60, teremos o quociente sendo os minutos que contém naquela quantidade de segundos
    //console.log(second, second%60);
    const sec = Math.floor(second%60);//será mostrado a quantidade de segundos no resto, com o math.floor, irá ser arrendondado para um número inteiro abaixo
    document.getElementById("watch-time").innerText = `${min<10 ? '0':''}${min}:${sec<10 ? '0':''}${sec}`//pega o elemento pelo ID e altera pelo o que queremos, no segundo elemento fazemos um if para verificar se o número tem dois dígitos ou não,
    //e no caso de não ter adicionamos um zero
}

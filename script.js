let nome = "Jett"
let xp = 0
let nivel

// Início do jogo, onde o personagem não tem experiência

// O loop indica a progressão do personagem até atingir o nível radiante

while(nivel != "radiante" ){

    if(xp <= 1000){
        nivel = "ferro"
    } else if(xp >= 1001 && xp <= 2000){
        nivel = "bronze"
    } else if(xp >= 2001 && xp <= 5000){
        nivel = "prata"
    } else if(xp >= 5001 && xp <= 7000){
        nivel = "ouro"
    } else if(xp >= 7001 && xp <= 8000){
        nivel = "platina"
    } else if(xp >= 8001 && xp <= 9000){
        nivel = "ascendente"
    } else if(xp >= 9001 && xp <= 10000){
        nivel = "imortal"
    } else{
        nivel = "radiante"
    }

console.log("O herói de nome " + nome + " está no nível " + nivel)

// Conforme o personagem avança no jogo, ele ganha XP
xp += 1000
}
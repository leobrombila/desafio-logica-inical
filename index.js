
//Base
let NomeHeroi ="Leonardo"
let XpHeroi= 22378
let RankHeroi= ""

//condição para definir rank baseado no XP
if (XpHeroi <= 0){
    RankHeroi = "Inapto"
}
 else if (XpHeroi <= 1000) { 
    RankHeroi = "Ferro";
}
    else if (XpHeroi >= 1001 && XpHeroi <= 2000){
        RankHeroi = "Bronze"
}
else if (XpHeroi >= 2001 && XpHeroi <= 5000){
    RankHeroi = "Prata"
}
else if (XpHeroi >= 5001 && XpHeroi <= 7000){
    RankHeroi = "Ouro"
}
else if (XpHeroi >=7001 && XpHeroi <= 8000){
    RankHeroi = "Platina"
}
else if (XpHeroi >=8001 && XpHeroi <= 9000){
    RankHeroi = "Ascendente"
}
else if (XpHeroi >=9001 && XpHeroi <= 10000){
    RankHeroi = "Imortal"
}
else if (XpHeroi >=10001){
    RankHeroi = "Radiante"
}


//saída
console.log("o herói " + NomeHeroi + " está no nível " + RankHeroi)


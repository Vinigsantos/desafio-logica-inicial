//Crie uma variavel para armazenar o nome
//  e a qntidade de experiencia (XP) de um heroi,
// depois apresente as 

let heroi = 'homemDeFerro'
let xp = 1000
let nivel;

if (xp < 1000) {
    nivel = 'Nivel FERRO'
} else if (xp >= 1001 && xp <= 2000) {
    nivel = 'Nivel BRONZE'
} else if (xp >= 2001 && xp <= 5000) {
    nivel = 'Nivel PRATA'
} else if (xp >= 5001 && xp <= 7000) {
    nivel = 'Nivel OURO'
} else if (xp >= 7001 && xp <= 8000) {
    nivel = 'Nivel PLATINA'
}   else if (xp >= 8001 && xp <= 9000) {
    nivel = 'Nivel ASCENDENTE'
} else if (xp >= 9001 && xp <= 10000) {
    nivel = 'Nivel IMORTAL'
} else (xp >= 10000) {
    nivel = 'Nivel RADIANTE'
}


    console.log(`O heroi ${heroi} possui ${xp} de experiencia e esta no nivel ${nivel}`)
    
}
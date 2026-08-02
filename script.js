// # extra


// 1- Crée une fonction qui prend une heure (0–23) et retourne :
// "matin" si < 12
// "après-midi" si entre 12 et 18
// "soir" si > 18


function heure(heures){
    if (heures<12){
        return "matin"
    }
    else if (heures>12 && heures<18){
        return "aprés-midi"
    }
    else {
        return "soir"
    }

}
console.log(heure(11)); 
console.log(heure(13)); 
console.log(heure(17)); 
console.log(heure(20)); 


// 2- Crée une fonction qui prend un score et retourne :
// "excellent" si score >= 90
// "bon" si score >= 70
// "moyen" si score >= 50
// "faible" sinon

function score(scor){
if (scor>=90){
    return "excellent"
}
else if (scor>=70){
    return "bon"
}
else if (scor>=50){
    return "moyenne"
}
else {
    return "faible"
}
}
console.log( score (91))
console.log( score (80))
console.log( score (60))
console.log( score (49))




// 3- Crée une fonction qui prend trois nombres et retourne le **plus petit** des trois

// **sans utiliser Math.min**
function min(nbr1,nbr2,nbr3){
    if (nbr1<nbr2 && nbr1<nbr3){
    return nbr1
}
    else if (nbr2<nbr1 && nbr2<nbr3){
    return nbr2
}
    else {
    return nbr3
}

}
console.log(min(5, 8, 2));   // 2
console.log(min(10, 7, 12)); // 7
console.log(min(-3, 4, 0));  // -3


// 4- Crée une fonction qui prend un nombre et retourne "positif", "négatif" ou "zéro" selon sa valeur.

function valeur(number){
if (number>0){
    return "positif"
}
else if (number<0){
    return "negativf"
}
else {
    return "zero"
}
}
console.log(valeur(4))
console.log(valeur(-1))
console.log(valeur(0))

// 5- Crée une fonction qui prend un nombre et retourne "divisible par 3", "divisible par 5" ou "autre" selon le cas.
function div(number){
    if (number% 3===0){
        return "divisible par 3"
    }
    else if (number%5===0){
        return "divisible par 5"
    }
    else {
        return "autre"
    }
}
console.log(div(9))
console.log(div(20))
console.log(div(14))

// 6- Crée une fonction qui prend deux nombres et retourne le plus grand des deux.

function max(nbr1,nbr2){
    return Math.max(nbr1,nbr2)
}
console.log(max(8,5))
console.log(max(8,11))
// 7- Crée une fonction qui prend une note (0 à 20) et retourne "réussi" si la note est >= 10, sinon "échoué".
function examen(note){
    if (note > 20 || note < 0) {
        return "Erreur";
    }
    else if (note>=10){
        return "réussi"
}
    else {
        return "échoué"
}

}

console.log(examen(14))
console.log(examen(9))
console.log(examen(21))
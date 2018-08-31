import {Montre} from './montre';

let montre = new Montre();
montre.Heure = 23;
montre.Minute = 59;
montre.Etat = 1;

console.log(montre.afficherHeure());
montre.appuyerBoutonA();
montre.appuyerBoutonA();
for(let i=0;i<120;i++){
    montre.appuyerBoutonB();
}
console.log(montre.afficherHeure());

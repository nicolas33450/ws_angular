"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var montre_1 = require("./montre");
var montre = new montre_1.Montre();
montre.Heure = 23;
montre.Minute = 59;
montre.Etat = 1;
console.log(montre.afficherHeure());
montre.appuyerBoutonA();
montre.appuyerBoutonA();
for (var i = 0; i < 120; i++) {
    montre.appuyerBoutonB();
}
console.log(montre.afficherHeure());

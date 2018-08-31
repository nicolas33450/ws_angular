"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Montre = /** @class */ (function () {
    function Montre(_heure, _minute, _boutonA, _boutonB, _etat) {
        this._heure = _heure;
        this._minute = _minute;
        this._boutonA = _boutonA;
        this._boutonB = _boutonB;
        this._etat = _etat;
    }
    Object.defineProperty(Montre.prototype, "BoutonA", {
        get: function () {
            return this._boutonA;
        },
        set: function (value) {
            this._boutonA = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Montre.prototype, "BoutonB", {
        get: function () {
            return this._boutonB;
        },
        set: function (value) {
            this._boutonB = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Montre.prototype, "Etat", {
        get: function () {
            return this._etat;
        },
        set: function (value) {
            this._etat = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Montre.prototype, "Heure", {
        get: function () {
            return this._heure;
        },
        set: function (value) {
            this._heure = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Montre.prototype, "Minute", {
        get: function () {
            return this._minute;
        },
        set: function (value) {
            this._minute = value;
        },
        enumerable: true,
        configurable: true
    });
    Montre.prototype.afficherHeure = function () {
        return (this._heure + ' : ' + this._minute);
    };
    Montre.prototype.addHeure = function () {
        this._heure++;
        if (this._heure == 24) {
            this._heure = 0;
        }
    };
    Montre.prototype.addMinute = function () {
        this._minute++;
        if (this._minute == 60) {
            this._minute = 0;
            this._heure++;
        }
        if (this._heure == 24) {
            this._heure = 0;
        }
    };
    Montre.prototype.appuyerBoutonA = function () {
        if (!this._boutonB) {
            this._etat++;
            if (this._etat == 4) {
                this._etat = 1;
            }
            this._boutonA = true;
            if (this._etat == 1) {
                console.log(this.afficherHeure());
            }
            else if (this._etat == 2) {
                console.log('les heures clignotent');
            }
            else if (this._etat == 3) {
                console.log('les minutes clignotent');
            }
        }
        this._boutonA = false;
    };
    Montre.prototype.appuyerBoutonB = function () {
        if (!this._boutonA) {
            this._boutonB = true;
            if (this._etat == 2) {
                this.addHeure();
            }
            else if (this._etat == 3) {
                this.addMinute();
            }
        }
        this._boutonB = false;
    };
    return Montre;
}());
exports.Montre = Montre;

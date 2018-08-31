export class Montre {

    private _heure : number;   
    private _minute : number;
    private _boutonA : boolean;
    private _boutonB : boolean;
    private _etat : number;

    constructor(_heure?:number, _minute?:number,_boutonA?:boolean,_boutonB?:boolean,_etat?:number){
        this._heure = _heure;
        this._minute = _minute;
        this._boutonA = _boutonA;
        this._boutonB = _boutonB;
        this._etat = _etat;
    }
    public get BoutonA() : boolean{
        return this._boutonA;
    }
    public set BoutonA(value : boolean){
        this._boutonA = value;
    }
    public get BoutonB() : boolean{
        return this._boutonB;
    }
    public set BoutonB(value : boolean){
        this._boutonB = value;
    }
    public get Etat() : number{
        return this._etat;
    }
    public set Etat(value : number){
        this._etat = value;
    }
     
	public get Heure(): number {
		return this._heure;
	}
    
	public get Minute(): number {
		return this._minute;
	}
    
	public set Heure(value: number) {
		this._heure = value;
	}
   
	public set Minute(value: number) {
		this._minute = value;
	}

    afficherHeure(){
        return(this._heure + ' : ' + this._minute)
    }

    private addHeure(){
        this._heure ++;
        if(this._heure == 24){
            this._heure = 0;
        }
    }
    private addMinute(){
        this._minute ++;
        if(this._minute == 60){
            this._minute = 0;
            this._heure ++;
        }
        if(this._heure == 24){
            this._heure = 0;
        }
    }

    public appuyerBoutonA(){

        if(!this._boutonB){
            this._etat ++;
            if(this._etat == 4){
                this._etat = 1;
            }     
        this._boutonA = true;

        if(this._etat == 1){
            console.log(this.afficherHeure());
        }
        else if(this._etat == 2){
            console.log('les heures clignotent');
        }
        else if(this._etat == 3){
            console.log('les minutes clignotent');
        }
      }
      this._boutonA = false;
    }
    public appuyerBoutonB(){

        if(!this._boutonA){           
           
        this._boutonB = true;   

        if(this._etat == 2){
            this.addHeure();
        }
        else if(this._etat == 3){
            this.addMinute();
        }
       }
       this._boutonB = false;
    }    
}


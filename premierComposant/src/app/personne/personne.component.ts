import { Component} from '@angular/core';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css']
})
export class PersonneComponent{
  nom = 'Dupont';
  prenom = 'Jojo';
  age = 125;

}

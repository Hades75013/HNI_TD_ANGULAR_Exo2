import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Importer FormsModule pour ngIf
import { CommonModule } from '@angular/common';  // Importer CommonModule pour utiliser *ngIf

@Component({
  selector: 'app-calculatrice',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './calculatrice.component.html',
  styleUrl: './calculatrice.component.css'
})

export class CalculatriceComponent {
  nombre1: number = 0;
  nombre2: number = 0;
  operationSymbol: string = '+';
  resultatEnregistre: number | null = null;

  // Liste pour enregistrer l'historique des opérations
  historiqueListe: { date: Date, operation: string, resultatEnregistre: number | null }[] = [];

  calculer(): void {
    let resultat: number | null = null;

    switch (this.operationSymbol) {
      case '+':
        resultat = this.nombre1 + this.nombre2;
        break;
      case '-':
        resultat = this.nombre1 - this.nombre2;
        break;
      case '*':
        resultat = this.nombre1 * this.nombre2;
        break;
      case '/':
        if (this.nombre2 !== 0) {
          resultat = this.nombre1 / this.nombre2;
        } else {
          alert('Division par zéro impossible');
          resultat = null;
        }
        break;
      default:
        resultat = null;
        break;
    }

    this.resultatEnregistre = resultat;

    // Ajouter l'opération et le résultat à l'historique avec l'heure
    if (resultat !== null) {
      this.historiqueListe.push({
        date: new Date(),
        operation: `${this.nombre1} ${this.operationSymbol} ${this.nombre2}`,
        resultatEnregistre: resultat
      });
    }
  }

  // Méthode pour supprimer une entrée de l'historique
  supprimerHistorique(index: number): void {
    this.historiqueListe.splice(index, 1);
  }

  
}
 
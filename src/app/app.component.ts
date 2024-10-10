import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';  // Importer CommonModule pour ngFor
import { CalculatriceComponent } from './calculatrice/calculatrice.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,CalculatriceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HNI_TD_Angular_Exo2';
}

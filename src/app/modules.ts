import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CalculatriceComponent } from './calculatrice/calculatrice.component';

@NgModule({
  declarations: [AppComponent, CalculatriceComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
    
}

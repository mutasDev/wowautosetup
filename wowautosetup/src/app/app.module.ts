import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SetupComponent } from './components/setup/setup.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PlayerCardComponent } from './components/player-card/player-card.component';
import { MatCardModule } from '@angular/material/card'
@NgModule({
  declarations: [AppComponent, SetupComponent, PlayerCardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

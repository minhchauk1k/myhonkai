import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ValkyriesComponent } from './valkyries/valkyries.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ,RouterModule.forRoot([
    
  ])],
  declarations: [ AppComponent, TopBarComponent, ValkyriesComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

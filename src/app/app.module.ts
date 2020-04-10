import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes,RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ValkyriesComponent } from './valkyries/valkyries.component';

@NgModule({
  imports:      [ BrowserModule ,RouterModule.forRoot([
    {path:"",component:AppComponent},
    {path:"valkyries",component:ValkyriesComponent}
  ])],
  declarations: [ AppComponent, TopBarComponent, ValkyriesComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

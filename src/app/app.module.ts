import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes,RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ValkyriesComponent } from './valkyries/valkyries.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { GopYComponent } from './gop-y/gop-y.component';

@NgModule({
  imports:      [ BrowserModule ,RouterModule.forRoot([
    {path:"",component:WelcomeComponent},
    {path:"valkyries",component:ValkyriesComponent},
    {path:"gop-y",component:GopYComponent}
  ])],
  declarations: [ AppComponent, TopBarComponent, ValkyriesComponent, WelcomeComponent, GopYComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { indexComponent } from "./index.component";
import { pageOneComponent } from "./pageone.component";
import { authGuards } from "./auth.guard";
import { lazyRoutes } from "./app.routes";
@NgModule({
  declarations: [
    AppComponent,indexComponent,pageOneComponent
  ],
  imports: [
    BrowserModule,lazyRoutes
  ],
  providers: [authGuards],
  bootstrap: [indexComponent]
})
export class AppModule { }

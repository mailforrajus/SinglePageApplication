//import NgModule
//NgModule used to create the Custom Module
import { NgModule } from "@angular/core";
//import CommonModule
import { CommonModule } from "@angular/common";
//import countriesServive
import { countriesService } from "./countries.service";
//import countriesComponent
import { countriesComponent } from "./countries.component";
//import HttpClientModule
import { HttpClientModule } from "@angular/common/http";
//import Routes, RouterModule
import { Routes,RouterModule } from "@angular/router";
export const appRoutes:Routes = [
    {path:"",component:countriesComponent}
];
//use NgModule
@NgModule({
    declarations:[countriesComponent],
    imports:[HttpClientModule,CommonModule,
            RouterModule.forChild(appRoutes)],
    providers:[countriesService],
    exports:[countriesComponent]
})
export class myModule{}
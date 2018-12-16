import { Routes, RouterModule } from "@angular/router";
import { pageOneComponent } from "./pageone.component";
import { ModuleWithProviders } from "@angular/core";
import { authGuards } from "./auth.guard";
export const appRoutes:Routes = [
    {path:"",component:pageOneComponent},
    {path:"lazy",loadChildren:"./my.module#myModule",
    canLoad:[authGuards]}
];
export const lazyRoutes:ModuleWithProviders = 
                            RouterModule.forRoot(appRoutes);
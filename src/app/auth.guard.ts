import { Injectable } from "@angular/core";
import { CanLoad } from "@angular/router";
@Injectable()
export class authGuards implements CanLoad{
    canLoad():boolean{
        return confirm("Do you want to enter into myModule ??");
    };
};
import { Component } from "@angular/core";
@Component({
    selector:"pageone",
    templateUrl:"./pageone.component.html"
})
export class pageOneComponent{
    private var_one:string;
    constructor(){
        this.var_one = "I am from page one !!!";
    }
};
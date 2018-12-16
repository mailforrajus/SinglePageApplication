import { Component } from "@angular/core";
import { countriesService } from "./countries.service";
import { HttpErrorResponse } from "@angular/common/http";
@Component({
    selector:"countries",
    templateUrl:"./countries.component.html"
})
export class countriesComponent{
    private result:any;
    private countriesSubScribe:any;
    constructor(private _service:countriesService){}
    ngOnInit(){
        this.countriesSubScribe = 
                    this._service.getCountries()
                        .subscribe(this._successCallBack,
                                    this._errorCallBack);
    };
    public _successCallBack = (res):any=>{
        this.result = res;
    };
    public _errorCallBack = (err:HttpErrorResponse):any=>{
        if(err.error instanceof Error){
            console.log("Client Side Error !!!");
        }else{
            console.log("Server Side Error !!!");
        }
    };
    ngOnDestroy(){
        this.countriesSubScribe.unsubscribe();
    };
};
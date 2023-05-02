import { Component, OnInit } from "@angular/core";

@Component({
    selector:'app-dbz-main-page',
    templateUrl:'main-page-component.html',
    styleUrls:['main-page-component.scss']
})

export class DbzMainPageComponent implements OnInit{

    constructor(){}
    ngOnInit(): void {
        console.log('its implemented')
    }

}
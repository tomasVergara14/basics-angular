import { Component, OnInit } from "@angular/core";
import { Character } from "../interfaces/character.interface";
import { DbzService } from "../services/dbz.service";

@Component({
    selector:'app-dbz-main-page',
    templateUrl:'main-page-component.html',
    styleUrls:['main-page-component.scss']
})

export class DbzMainPageComponent implements OnInit{
    
    constructor(
        public dbzService: DbzService,
    ){
        
    }

    ngOnInit(): void {
        console.log('its implemented')
    }

}
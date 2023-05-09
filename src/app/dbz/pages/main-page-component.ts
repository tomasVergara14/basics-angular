import { Component, OnInit } from "@angular/core";
import { Character } from "../interfaces/character.interface";

@Component({
    selector:'app-dbz-main-page',
    templateUrl:'main-page-component.html',
    styleUrls:['main-page-component.scss']
})

export class DbzMainPageComponent implements OnInit{

    public characters: Character[] = [
        {
            name: 'Goku',
            power: 9500,
        },
        {
            name: 'Krilin',
            power: 1500,
        },
        {
            name: 'Trunks',
            power: 6500,
        }
    ]

    onNewCharacter( character: Character ):void{
        this.characters.push(character)
    }
    
    ngOnInit(): void {
        console.log('its implemented')
    }

}
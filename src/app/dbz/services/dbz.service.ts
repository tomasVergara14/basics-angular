import { Injectable } from "@angular/core";
import { Character } from "../interfaces/character.interface";


@Injectable({
    providedIn:'root'
})
export class DbzService{


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

    onDeletedId(id:number){
        this.characters.splice(id,1)
    }
    


}
import { Injectable } from "@angular/core";
import { v4 as uuid } from 'uuid'

import { Character } from "../interfaces/character.interface";


@Injectable({
    providedIn:'root'
})
export class DbzService{


    public characters: Character[] = [
        {
            id: uuid(),
            name: 'Goku',
            power: 9500,
        },
        {
            id: uuid(),
            name: 'Krilin',
            power: 1500,
        },
        {
            id: uuid(),
            name: 'Trunks',
            power: 6500,
        }
    ]


    onNewCharacter( character: Character ):void{
        const newCharacter = {...character, id: uuid()}
        this.characters.push(newCharacter)
    }

    // onDeletedId(id:number){
    //     this.characters.splice(id,1)
    // }
    
    deleteCharacterById(id: string){
        this.characters = this.characters.filter(character => character.id !== id)
    }


}
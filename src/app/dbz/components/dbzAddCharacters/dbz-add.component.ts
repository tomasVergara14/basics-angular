import { Component, EventEmitter, Output } from "@angular/core";
import { v4 as uuid } from 'uuid';
import { Character } from "../../interfaces/character.interface";

@Component({
    selector:'app-dbz-add-component',
    templateUrl:'dbz-add.component.html',
    styleUrls:['dbz-add.component.scss']
})
export class DbzAddComponent{

    @Output()
    public onNewCharacter: EventEmitter<Character> = new EventEmitter();

    public character : Character = {
        id: uuid(),
        name:'',
        power:0
    };

    emitCharacter():void{
        if( this.character.name.length === 0) return ;

        this.onNewCharacter.emit({...this.character});

        this.character = { id:'', name: '', power:0 }

    }
}
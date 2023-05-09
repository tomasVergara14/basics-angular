import { Component, EventEmitter, Output } from "@angular/core";
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
        name:'',
        power:0
    };

    emitCharacter():void{
        if( this.character.name.length === 0) return ;

        this.onNewCharacter.emit({...this.character});

        this.character.name = '';
        this.character.power = 0;

    }
}
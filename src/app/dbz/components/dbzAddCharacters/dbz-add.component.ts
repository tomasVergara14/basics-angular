import { Component } from "@angular/core";
import { Character } from "../../interfaces/character.interface";

@Component({
    selector:'app-dbz-add-component',
    templateUrl:'dbz-add.component.html',
    styleUrls:['dbz-add.component.scss']
})
export class DbzAddComponent{

    public character : Character = {
        name:'',
        power:0
    };

    emitCharacter(){
        console.log(this.character)
    }
}
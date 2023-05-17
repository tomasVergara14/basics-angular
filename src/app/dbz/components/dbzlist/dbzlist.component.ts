import { Component, EventEmitter, Input, Output, OnInit } from "@angular/core";
import { Character } from "../../interfaces/character.interface";

@Component({
    selector:'app-dbzlist-component',
    templateUrl:'dbzlist.component.html',
    styleUrls:['dbzlist.component.scss']
})
export class DbzListComponent{
    @Input() public characterList :Character[] = []

    @Output()
    public onDeleteId: EventEmitter<string> = new EventEmitter();

    onDeleteCharacter( id: string):void{
        this.onDeleteId.emit(id)
    }

}
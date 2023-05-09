import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Character } from "../../interfaces/character.interface";

@Component({
    selector:'app-dbzlist-component',
    templateUrl:'dbzlist.component.html',
    styleUrls:['dbzlist.component.scss']
})
export class DbzListComponent{
    @Input() public characterList :Character[] = []

    @Output()
    public onDeleteId: EventEmitter<number> = new EventEmitter();

    onDeleteCharacter( index: number):void{
        this.onDeleteId.emit(index)
    }

}
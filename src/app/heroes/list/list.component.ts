import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  
  public heroNames: string[] = ['spiderman', 'ironman', 'hulk', 'thor', 'captain america'];
  public deletedHero?: string = ''


  onRemoveLastHero() :void {
    this.deletedHero = this.heroNames.pop();
  }

}

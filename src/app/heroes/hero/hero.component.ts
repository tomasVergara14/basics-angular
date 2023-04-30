import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {

  public name: string = 'Ironman';
  public age: number = 40; 

  get capitalizeName(): string{
    return this.name.toUpperCase();
  }

  getDescription(): string{
    return ` ${this.name} - ${this.age}  `;
  }

  changeHeroName():string{
    return this.name = 'spiderman';
  }

  changeHeroAge(): number{
    return this.age = 35;
  }
}

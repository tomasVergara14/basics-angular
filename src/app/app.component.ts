import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title : string = 'basic-angular';
  public counter : number = 10;

  increaseBy(value: number):void{
    this.counter +=value;
    console.log(this.counter)
  }
  decreaseBy(value: number):void{
    this.counter -= value;
    console.log(this.counter)
  }
  resetCounter():number{
    return this.counter = 10;
  }

}

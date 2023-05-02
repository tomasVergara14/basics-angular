import { Component, OnInit } from "@angular/core";

@Component({
    selector:'app-counter',
    templateUrl:'./counter.component.html',
    styleUrls:['./counter.component.scss']
})
export class CounterComponent implements OnInit{

    public counter: number = 0;

    ngOnInit(): void {}

    decreaseBy(value:number) :void {
        this.counter -= value;
    }
    increaseBy(value:number) :void {
        this.counter += value;
    }
    resetCounter():number{
        return this.counter = 0;
    }

}
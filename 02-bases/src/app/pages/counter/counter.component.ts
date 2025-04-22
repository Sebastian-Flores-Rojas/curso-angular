import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
counter = 15;
inicial = this.counter;

counterSignal = signal(10);

constructor() {}


aumentar(){
  this.counter = this.counter + 1;
  this.counterSignal.update((x) => x + 1);
}

disminuir(){
  this.counter = this.counter - 1;
  this.counterSignal.update((x) => x - 1);
}

resetear(){
  this.counter = this.inicial;
  this.counterSignal.set(this.inicial);
}

}

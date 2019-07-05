import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  // title = 'cursoVerano';
  public title: string = 'pruebita no 1';
  public numero: number = 45;
  public booleano: boolean = true;
  public arrayNumeros: Array<number> = [1,2,3];
  public arrayLetras: Array<string> = ['a','b','c'];
}

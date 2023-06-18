import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-heroes',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'Ironman';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription():string {
    return `${ this.name } - ${ this.age }`;
  }

  changeHeroName(): void {
    this.name = "Tony Stark";
  }
  changeHeroAge(): void {
    this.age = 50;
  }

  resetForm(): void {
    this.name = 'Ironman'
    this.age = 45;
  }
}

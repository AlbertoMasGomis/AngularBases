import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {


  public heroeNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor']
  public heroeBorrado?: string = '';

  borrarUltimoHeroe(): void {
    this.heroeBorrado = this.heroeNames.pop();
  }
}

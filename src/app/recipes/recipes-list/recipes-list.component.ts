import { Recipe } from './../recipe.model';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { Output } from '@angular/core/';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  @Output() currentRecipe = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Ribs', 'Pork ripps 500g'
      , 'http://maxpixel.freegreatpicture.com/static/photo/1x/Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg'),
    new Recipe('Samosa', 'Vegan samosas with saouces'
      , 'https://c1.staticflickr.com/6/5702/31078600701_812bd6aa88_b.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }
  selectedRec(rec: Recipe) {
    this.currentRecipe.emit(rec);
  }
}

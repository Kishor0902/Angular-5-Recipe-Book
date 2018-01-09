import { RecipeService } from './../../recipe.service';
import { Recipe } from './../../recipe.model';
import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core/';
import { Output } from '@angular/core/';
import { EventEmitter } from '@angular/core/';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {

  @Input() item: Recipe;
  @Input() index: number;


  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }
  /*
    onSelected(chosen: Recipe) {

      // console.log(chosen);
      // this.chosenRecipe.emit();
      this.recipeService.recipeSelected.emit(this.item);


    } */

}

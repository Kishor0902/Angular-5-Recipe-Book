import { RecipeService } from './recipe.service';
import { Recipe } from './recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {


  // onFocusRecipe: Recipe;

  constructor() { }

  ngOnInit() {
    /*  this.recipeService.recipeSelected.subscribe(
       (recipe: Recipe) => {
       this.onFocusRecipe = recipe;
       }
     ); */


  }
  /*
    selectedRecipe(rec: Recipe) {
      // console.log(rec);
      this.onFocusRecipe = rec;
    } */

}

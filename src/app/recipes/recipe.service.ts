import { Subject } from 'rxjs/Subject';
import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { Recipe } from './recipe.model';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class RecipeService {
  // https://udemy-recipe-91ccd.firebaseio.com/
  private recipes: Recipe[] = [
    new Recipe('Ribs', 'Pork ripps 500g'
      , 'https://upload.wikimedia.org/wikipedia/commons/9/94/Nugget_rib_cook-off_001.JPG',
      [new Ingredient('Appleskos', 10), new Ingredient('Pears', 50)]),
    new Recipe('Samosasasa', 'Vegan samosas with saouces'
      , 'https://c1.staticflickr.com/6/5702/31078600701_812bd6aa88_b.jpg'
      , [new Ingredient('Steak', 1), new Ingredient('Potato', 3)]), new Recipe('Steak', ' 500g Steak and chips'
        , 'https://www.goodfreephotos.com/albums/food/fries-over-the-steak.jpg'
        , [new Ingredient('Apples', 10), new Ingredient('Pears', 50)])
  ];

  /* recipeSelected = new EventEmitter<Recipe>(); */

  recipesChanged = new Subject<Recipe[]>();

  constructor(private shoppingListService: ShoppingListService) { }

  setRecipes(reps: Recipe[]) {

    this.recipes = reps;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    // console.log(this.recipes[id]);
    return this.recipes[id];

  }

  add(rep: Recipe) {
    this.recipes.push(rep);
    this.recipesChanged.next(this.recipes.slice());
  }

  upDate(id: number, rep: Recipe) {

    this.recipes[id] = rep;
    this.recipesChanged.next(this.recipes.slice());
  }

  delete(id: number) {
    this.recipes.splice(id, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

  addIngrdeintsToShopList(ing: Ingredient[]) {

    this.shoppingListService.addIngredientsArray(ing);
  }

}

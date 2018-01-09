import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { Recipe } from './recipe.model';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Ribs', 'Pork ripps 500g'
      , 'http://maxpixel.freegreatpicture.com/static/photo/1x/Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg',
      [new Ingredient('Appleskos', 10), new Ingredient('Pears', 50)]),
    new Recipe('Samosasasa', 'Vegan samosas with saouces'
      , 'https://c1.staticflickr.com/6/5702/31078600701_812bd6aa88_b.jpg'
      , [new Ingredient('Apples', 10), new Ingredient('Pears', 50)])
  ];

  recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    // console.log(this.recipes[id]);
    return this.recipes[id];

  }

  addIngrdeintsToShopList(ing: Ingredient[]) {

    this.shoppingListService.addIngredientsArray(ing);
  }

}

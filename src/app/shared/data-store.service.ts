import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http/';
import { RecipeService } from '../recipes/recipe.service';
import 'rxjs/add/operator/map';
import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class DataStoreService {

  baseUrl = 'https://udemy-recipe-91ccd.firebaseio.com/recipes.json';
  constructor(private http: Http, private recipeS: RecipeService, private shoppingS: ShoppingListService) { }

  storeRecipes() {
    return this.http.put(this.baseUrl, this.recipeS.getRecipes());
  }

  getRecipes() {
    return this.http.get(this.baseUrl)
      .map((response: Response) => {
        const rep = response.json();
        for (const reps of rep) {
          if (!reps['ingredients']) {
            reps['ingredients'] = [];
          }
        }
        return rep;

      })
      .subscribe((rep: Recipe[]) => {

        this.recipeS.setRecipes(rep);
      });

  }

  storeShoppingList() {

  }

}

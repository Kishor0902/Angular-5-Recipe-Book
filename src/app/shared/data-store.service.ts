import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { AuthService } from './../auth/auth.service';
import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http/';
import { RecipeService } from '../recipes/recipe.service';
import 'rxjs/add/operator/map';
import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class DataStoreService implements OnInit {


  baseUrl = 'https://udemy-recipe-91ccd.firebaseio.com/recipes.json';
  token = '';
  constructor(private auth: AuthService, private http: Http, private recipeS: RecipeService, private shoppingS: ShoppingListService) { }

  storeRecipes() {
    const tkn = this.auth.getToken();
    return this.http.put(this.baseUrl + '?auth=' + tkn, this.recipeS.getRecipes());
  }

  ngOnInit(): void {

    this.auth.token.subscribe((res: string) => {
      this.token = res;
      console.log('TKN ' + this.token);
    });

  }

  getRecipes() {

    const tkn = this.auth.getToken();
    return this.http.get(this.baseUrl + '?auth=' + tkn)
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

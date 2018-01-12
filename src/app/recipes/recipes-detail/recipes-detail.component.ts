import { RecipeService } from './../recipe.service';
import { ShoppingListService } from './../../shopping-list/shopping-list.service';
import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core/';
import { Recipe } from '../recipe.model';
import { ActivatedRoute, Params, Router } from '@angular/router/';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {

  item: Recipe;
  id: number;
  breakerIng = false;

  constructor(private auths: AuthService, private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {

        this.id = +params['id'];
        this.item = this.recipeService.getRecipe(this.id);
        console.log(this.item);
      }
    );
  }

  onEditRecipe() {

    this.router.navigate(['edit'], { relativeTo: this.route });

  }

  addToShopingList() {

    this.recipeService.addIngrdeintsToShopList(this.item.ingredients);

  }

  onDelete() {
    this.recipeService.delete(this.id);
    this.router.navigate(['../'], { relativeTo: this.route });
  }

}

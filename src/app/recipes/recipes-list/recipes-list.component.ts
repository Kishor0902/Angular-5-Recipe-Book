import { ActivatedRoute } from '@angular/router/';
import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe.model';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { Output, OnDestroy } from '@angular/core/';
import { Route } from '@angular/router/';
import { Router } from '@angular/router/';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit , OnDestroy {


  // @Output() currentRecipe = new EventEmitter<Recipe>();

  recipes: Recipe[];

  subRecipes: Subscription;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.recipes = this.recipeService.getRecipes();
    this.subRecipes = this.recipeService.recipesChanged.subscribe((newR: Recipe[]) => {

      this.recipes = newR;

    });
  }
  /*   selectedRec(rec: Recipe) {
      this.currentRecipe.emit(rec);
    } */


  newSelected() {

    this.router.navigate(['new'], { relativeTo: this.route });

  }

  ngOnDestroy(): void {
    this.subRecipes.unsubscribe();
  }


}

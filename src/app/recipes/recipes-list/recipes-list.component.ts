import { ActivatedRoute } from '@angular/router/';
import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe.model';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { Output } from '@angular/core/';
import { Route } from '@angular/router/';
import { Router } from '@angular/router/';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  // @Output() currentRecipe = new EventEmitter<Recipe>();

  recipes: Recipe[];

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.recipes = this.recipeService.getRecipes();
  }
  /*   selectedRec(rec: Recipe) {
      this.currentRecipe.emit(rec);
    } */


  newSelected() {

    this.router.navigate(['new'], { relativeTo: this.route});

  }


}

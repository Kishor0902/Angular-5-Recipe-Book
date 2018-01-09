import { RecipeService } from './../recipe.service';
import { ActivatedRoute } from '@angular/router/';
import { Component, OnInit } from '@angular/core';
import { Params } from '@angular/router/src/shared';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-edit',
  templateUrl: './recipes-edit.component.html',
  styleUrls: ['./recipes-edit.component.css']
})
export class RecipesEditComponent implements OnInit {

  recipe: Recipe;
  id: number;
  editMode: boolean;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute) {

  }

  ngOnInit() {

    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];



      this.recipe = this.recipeService.getRecipe(this.id);
      this.editMode = params['id'] != null;


    });

  }

}

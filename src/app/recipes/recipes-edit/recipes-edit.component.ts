import { RecipeService } from './../recipe.service';
import { ActivatedRoute, Router } from '@angular/router/';
import { Component, OnInit } from '@angular/core';
import { Params } from '@angular/router/src/shared';
import { Recipe } from '../recipe.model';
import { FormGroup } from '@angular/forms/';
import { FormControl } from '@angular/forms/';
import { FormArray } from '@angular/forms/';
import { Validators } from '@angular/forms/';

@Component({
  selector: 'app-recipes-edit',
  templateUrl: './recipes-edit.component.html',
  styleUrls: ['./recipes-edit.component.css']
})
export class RecipesEditComponent implements OnInit {

  recipe: Recipe;
  id: number;
  editMode: boolean;

  recipeForm: FormGroup;

  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {

    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipe = this.recipeService.getRecipe(this.id);
      this.editMode = params['id'] != null;
      this.initForm();
    });

  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  onSubmit() {
    /* const name = this.recipeForm.value['name'];
    const imageP = this.recipeForm.value['imagePath'];
    const des = this.recipeForm.value['description'];
    const ing = this.recipeForm.value['ingredients'];

    const newRep = new Recipe(name, des, imageP, ing);
 */
    if (this.editMode) {

      this.recipeService.upDate(this.id, this.recipeForm.value);
    } else {
      this.recipeService.add(this.recipeForm.value);
    }

    console.log('Submitted');
    this.editMode = false;
    this.onCancel();


  }

  private initForm() {

    let name = '';
    let imageP = '';
    let descp = '';
    let ingrey = new FormArray([]);

    if (this.editMode) {

      name = this.recipe.name;
      imageP = this.recipe.imagePath;
      descp = this.recipe.description;
      if (this.recipe.ingredients) {
        for (const ing of this.recipe.ingredients) {
          ingrey.push(new FormGroup({
            'name': new FormControl(ing.name, Validators.required),
            'amount': new FormControl(ing.amount, [Validators.required, Validators.pattern('^[1-9]+[0-9]*$')])
          }));
        }
      }



    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(name, Validators.required),
      'imagePath': new FormControl(imageP, Validators.required),
      'description': new FormControl(descp, Validators.required),
      'ingredients': ingrey
    });

    ingrey = null;

  }

  removeIng(i: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(i);
  }

  get formdata() {
      return (<FormArray>this.recipeForm.get('ingredients'));
  }

  addIng() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [Validators.required, Validators.pattern('^[1-9]+[0-9]*$')]),
      })
    );

  }

}

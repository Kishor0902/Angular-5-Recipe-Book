import { Ingredient } from './../shared/ingredient.model';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class ShoppingListService {
  private ingrediesnts: Ingredient[] = [new Ingredient('Apples', 10), new Ingredient('Pears', 50)];
  ingrdientChnaged = new EventEmitter<Ingredient[]>();
  constructor() { }

  add(ing: Ingredient) {
    console.log(ing);
    this.ingrediesnts.push(ing);
    this.ingrdientChnaged.emit(this.ingrediesnts.slice());
  }

  addIngredientsArray(ing: Ingredient[]) {
    this.ingrediesnts.push(...ing);
    this.ingrdientChnaged.emit(this.ingrediesnts.slice());
  }

  getIngrdients() {
    return this.ingrediesnts.slice();
  }

}

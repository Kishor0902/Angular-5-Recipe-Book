import { Ingredient } from './../shared/ingredient.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ShoppingListService {
  private ingrediesnts: Ingredient[] = [new Ingredient('Apples', 10), new Ingredient('Pears', 50)];
  ingrdientChnaged = new Subject<Ingredient[]>();

  clickedToedit = new Subject<number>();
  constructor() { }

  add(ing: Ingredient) {
    console.log(ing);
    this.ingrediesnts.push(ing);
    this.ingrdientChnaged.next(this.ingrediesnts.slice());
  }

  addIngredientsArray(ing: Ingredient[]) {
    this.ingrediesnts.push(...ing);
    this.ingrdientChnaged.next(this.ingrediesnts.slice());
  }

  getIngrdients() {
    return this.ingrediesnts.slice();
  }

  getIngrdient(i: number) {
    return this.ingrediesnts[i];
  }

  upDate(i: number, ing: Ingredient) {

    console.log(this.ingrediesnts[i]);
    this.ingrediesnts[i] = ing;
    console.log(this.ingrediesnts[i]);
    this.ingrdientChnaged.next(this.ingrediesnts.slice());

  }

  delete(i: number) {

    console.log(i);
    this.ingrediesnts.splice(i, 1);
    this.ingrdientChnaged.next(this.ingrediesnts.slice());
  }

}

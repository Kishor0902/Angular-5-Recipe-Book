import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingrediesnts: Ingredient[] = [new Ingredient('Apples', 10), new Ingredient('Pears', 50)];
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {

    this.ingrediesnts = this.shoppingListService.getIngrdients();
    this.shoppingListService.ingrdientChnaged.subscribe(
      (ing: Ingredient[]) => {

        this.ingrediesnts = ing;

      }
    )
  }

  /*  manageIngrdient(ing: Ingredient) {
     console.log(ing);
     // this.ingrediesnts.push(ing);
     // this.shoppingListService.add(ing);
   } */
}

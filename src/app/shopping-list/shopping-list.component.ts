import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core/';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {


  ingrediesnts: Ingredient[];
  private ingrdeitnsChangedSub: Subscription;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {

    this.ingrediesnts = this.shoppingListService.getIngrdients();

    this.ingrdeitnsChangedSub = this.shoppingListService.ingrdientChnaged.subscribe(
      (ing: Ingredient[]) => {

        this.ingrediesnts = ing;

      }
    );
  }

  ngOnDestroy(): void {
    this.ingrdeitnsChangedSub.unsubscribe();
  }

  onEdit(i: number) {

    this.shoppingListService.clickedToedit.next(i);


  }

  /*  manageIngrdient(ing: Ingredient) {
     console.log(ing);
     // this.ingrediesnts.push(ing);
     // this.shoppingListService.add(ing);
   } */
}

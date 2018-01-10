import { NgForm } from '@angular/forms/';
import { Subscription } from 'rxjs/Subscription';
import { Ingredient } from './../../shared/ingredient.model';
import { ShoppingListService } from './../shopping-list.service';
import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core/';
import { ElementRef } from '@angular/core/';
import { EventEmitter } from '@angular/core/';
import { Output } from '@angular/core/';
import { OnDestroy } from '@angular/core/';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {


  // @Output() editIngredient = new EventEmitter<Ingredient>();
  @ViewChild('f') ingForm: NgForm;
  subScrp = new Subscription;
  editMode = false;
  editID: number;
  editItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {

    this.subScrp = this.shoppingListService.clickedToedit.subscribe((id: number) => {
      this.editMode = true;
      this.editID = id;
      this.editItem = this.shoppingListService.getIngrdient(this.editID);
      this.ingForm.setValue({
        'name': this.editItem.name,
        'amount': this.editItem.amount
      });
    });

  }

  /*   onAddIng() {
      const newIng = new Ingredient(this.name.nativeElement.value, this.amount.nativeElement.value);
      console.log(newIng);
      // this.editIngredient.emit(newIng);
      this.shoppingListService.add(newIng);
    } */

  onSubmit(form: NgForm) {
    const value = form.value;
    const newing = new Ingredient(value.name, value.amount);
    if (this.editMode) {

      this.shoppingListService.upDate(this.editID, newing);
      this.editMode = false;
    } else {

      this.shoppingListService.add(newing);
    }

    this.ingForm.reset();

  }


  onClear() {
    this.ingForm.reset();
    this.editMode = false;
  }

  onDelete() {
    if (this.editMode) {

      this.shoppingListService.delete(this.editID);
      this.onClear();

    } else {
      this.onClear();
    }
  }


  ngOnDestroy(): void {
    this.subScrp.unsubscribe();
  }

}

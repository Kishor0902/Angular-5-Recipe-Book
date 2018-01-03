import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core/';
import { ElementRef } from '@angular/core/';
import { EventEmitter } from '@angular/core/';
import { Ingredient } from '../../shared/ingredient.model';
import { Output } from '@angular/core/';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') name: ElementRef;
  @ViewChild('amountInput') amount: ElementRef;
  @Output() editIngredient = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }

  onAddIng() {
    const newIng = new Ingredient(this.name.nativeElement.value, this.amount.nativeElement.value);
    console.log(newIng);
    this.editIngredient.emit(newIng);
  }

}

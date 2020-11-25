import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';
import { ShoppingListService } from '../services/shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredients[];

  private idChangeSusbscription: Subscription;

  constructor(private slService: ShoppingListService) {}

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.idChangeSusbscription = this.slService.ingredientsChanged.subscribe((ingredients: Ingredients[]) => {
      this.ingredients = ingredients;
    });
  }

  ngOnDestroy() {
    this.idChangeSusbscription.unsubscribe();
  }
}

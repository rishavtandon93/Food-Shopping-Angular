import { Component, OnInit } from '@angular/core';
import { Ingrideints } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingrideints[] = [
    new Ingrideints('Apples', 5),
    new Ingrideints('Tomatoes', 10)
  ];

  constructor() {}

  ngOnInit(): void {}

  onIngredeientAdded(ingredient: Ingrideints) {
    this.ingredients.push(ingredient);
  }
}

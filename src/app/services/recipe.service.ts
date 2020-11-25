import { Recipe } from '../recipes/recipe.model';
import { Injectable } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'A test Recipe',
      ' This is simply a test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSEyJaNj0ZzDe3OETaOUv1PNdK5FPixVa78VqAuGGIEdz8mHB0b',
      [
        new Ingredients('Meat', 1),
        new Ingredients('French Fires', 20)
      ]
    ),
    new Recipe(
      'A test',
      ' This is simply a test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSEyJaNj0ZzDe3OETaOUv1PNdK5FPixVa78VqAuGGIEdz8mHB0b',
      [
        new Ingredients('Buns', 2),
        new Ingredients('Meat', 1)
      ]
    ),
  ];

  constructor(private slService: ShoppingListService) {

  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredients[]) {
    this.slService.addIngredientsFromRecipe(ingredients);
  }
}

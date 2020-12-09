import { Recipe } from '../recipes/recipe.model';
import { Injectable } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';
import { ShoppingListService } from './shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [];
  recipesChanged = new Subject<Recipe[]>();

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'A test Recipe',
  //     ' This is simply a test',
  //     'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSEyJaNj0ZzDe3OETaOUv1PNdK5FPixVa78VqAuGGIEdz8mHB0b',
  //     [
  //       new Ingredients('Meat', 1),
  //       new Ingredients('French Fires', 20)
  //     ]
  //   ),
  //   new Recipe(
  //     'A test',
  //     ' This is simply a test',
  //     'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSEyJaNj0ZzDe3OETaOUv1PNdK5FPixVa78VqAuGGIEdz8mHB0b',
  //     [
  //       new Ingredients('Buns', 2),
  //       new Ingredients('Meat', 1)
  //     ]
  //   ),
  // ];

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

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }
}

import { Ingredients } from '../shared/ingredients.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredients[]>();
  private ingredients: Ingredients[] = [
    new Ingredients('Apples', 5),
    new Ingredients('Tomatoes', 10)
  ];

  getIngredients() {
      return this.ingredients.slice();
  }

  addIngredients(ingredient: Ingredients) {
      this.ingredients.push(ingredient);
      this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredientsFromRecipe(ingredients: Ingredients[]) {
    // tslint:disable-next-line: prefer-const
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

}

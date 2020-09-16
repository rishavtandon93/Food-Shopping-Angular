import { Recipe } from './../../recipe.model';
import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeServie: RecipeService) {}

  ngOnInit() {}

  onSelected() {
    this.recipeServie.recipeSelected.emit(this.recipe);
  }
}

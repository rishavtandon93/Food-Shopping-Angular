import { Recipe } from "./../recipe.model";
import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"],
})
export class RecipeListComponent implements OnInit {
  @Output() recipewWasSelecetd = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      "A test Recipe",
      " This is simply a test",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSEyJaNj0ZzDe3OETaOUv1PNdK5FPixVa78VqAuGGIEdz8mHB0b"
    ),
    new Recipe(
      "A test",
      " This is simply a test",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSEyJaNj0ZzDe3OETaOUv1PNdK5FPixVa78VqAuGGIEdz8mHB0b"
    ),
  ];

  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipie: Recipe) {
    this.recipewWasSelecetd.emit(recipie);
  }
}

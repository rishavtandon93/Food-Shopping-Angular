import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "A test Recipe",
      " This is simply a test",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSEyJaNj0ZzDe3OETaOUv1PNdK5FPixVa78VqAuGGIEdz8mHB0b"
    )
  ];

  constructor() {}

  ngOnInit(): void {}
}

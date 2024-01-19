import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from '../models/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private baseURL: string = 'https://localhost:7266/api/Recipe';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  getRecipes(): Observable<Recipe[]> {
    return this.httpClient.get<Recipe[]>(`${this.baseURL}`);
  }

  getRecipeById(id: number): Observable<Recipe> {
    return this.httpClient.get<Recipe>(`${this.baseURL}/${id}`);
  }

  addRecipe(recipe: Recipe): Observable<Recipe> {
    return this.httpClient.post<Recipe>(this.baseURL, recipe, this.httpOptions);
  }

}

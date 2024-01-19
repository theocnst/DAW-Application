using DAW_Backend.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

public interface IRecipeRepository
{
    Task<Recipe> CreateRecipe(Recipe recipe);
    Task<Recipe> GetRecipeById(int recipeId);
    Task<List<Recipe>> GetAllRecipes();
}

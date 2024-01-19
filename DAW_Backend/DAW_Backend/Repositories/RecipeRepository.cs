using DAW_Backend.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

public class RecipeRepository : IRecipeRepository
{
    private readonly DawDbContext _databaseContext;

    public RecipeRepository(DawDbContext databaseContext)
    {
        _databaseContext = databaseContext;
    }

    public async Task<Recipe> CreateRecipe(Recipe recipe)
    {
        await _databaseContext.Recipes.AddAsync(recipe);
        await _databaseContext.SaveChangesAsync();
        return recipe;
    }

    public async Task<Recipe> GetRecipeById(int recipeId)
    {
        return await _databaseContext.Recipes.FirstOrDefaultAsync(r => r.RecipeId == recipeId);
    }

    public async Task<List<Recipe>> GetAllRecipes()
    {
        return await _databaseContext.Recipes.ToListAsync();
    }
}

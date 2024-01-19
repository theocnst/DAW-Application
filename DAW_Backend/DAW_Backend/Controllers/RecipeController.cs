using DAW_Backend.Models;
using DAW_Backend.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

[Route("api/[controller]")]
[ApiController]
public class RecipeController : ControllerBase
{
    private readonly IRecipeRepository _recipeRepository;

    public RecipeController(IRecipeRepository recipeRepository)
    {
        _recipeRepository = recipeRepository;
    }

    [HttpGet]
    public async Task<IActionResult> GetAllRecipes()
    {
        var recipes = await _recipeRepository.GetAllRecipes();
        return Ok(recipes);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetRecipeById(int id)
    {
        var recipe = await _recipeRepository.GetRecipeById(id);
        if (recipe == null)
        {
            return NotFound();
        }
        return Ok(recipe);
    }

    [HttpPost]
    public async Task<IActionResult> CreateRecipe([FromBody] Recipe recipe)
    {
        if (recipe == null)
        {
            return BadRequest();
        }
        var createdRecipe = await _recipeRepository.CreateRecipe(recipe);
        return CreatedAtAction(nameof(GetRecipeById), new { id = createdRecipe.RecipeId }, createdRecipe);
    }

}

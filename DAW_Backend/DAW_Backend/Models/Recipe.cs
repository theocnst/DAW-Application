using System;
using System.Collections.Generic;

namespace DAW_Backend.Models;

public partial class Recipe
{
    public int RecipeId { get; set; }

    public string Title { get; set; } = null!;

    public string ImageUrl { get; set; } = null!;
}

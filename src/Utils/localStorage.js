// Add a product to a localStorage
export const addFavoriteToLocalStorage = (product) => {
    const favorites = getFavoritesFromLocalStorage();
    if (!favorites.some((p) => p.mal_id === product.mal_id)) {
      favorites.push(product);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  };
  
  // Remove  product from a localStorage
  export const removeFavoriteFromLocalStorage = (productId) => {
    const favorites = getFavoritesFromLocalStorage();
    const updateFavorites = favorites.filter(
      (product) => product.mal_id !== productId
    );
  
    localStorage.setItem("favorites", JSON.stringify(updateFavorites));
  };
  
  // Retrive favorites from a localStorage
  export const getFavoritesFromLocalStorage = () => {
    const favoritesJSON = localStorage.getItem("favorites");
    return favoritesJSON ? JSON.parse(favoritesJSON) : [];
  };

  //get favourites count from local storage
  export const getFavoritesCount = () => {
    const favorites = getFavoritesFromLocalStorage();
    return favorites.length;
  };

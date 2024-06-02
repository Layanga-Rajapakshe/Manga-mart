import { useEffect } from "react";
import {
    addToFavorites,
    removeFromFavorites,
    setFavorites,
  } from "../redux/features/favouriteSlice";
  import { useSelector, useDispatch } from "react-redux";
  import {
    addFavoriteToLocalStorage,
    getFavoritesFromLocalStorage,
    removeFavoriteFromLocalStorage,
  } from "../Utils/localStorage";
  import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function favourite_button({product}) {
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favorites) || [];
    const isFavorite = favorites.some((p) => p.mal_id === product.mal_id);
  
    useEffect(() => {
      const favoritesFromLocalStorage = getFavoritesFromLocalStorage();
      dispatch(setFavorites(favoritesFromLocalStorage));
    }, []);
  
    const toggleFavorites = () => {
      if (isFavorite) {
        dispatch(removeFromFavorites(product));
        // remove the product from the localStorage as well
        removeFavoriteFromLocalStorage(product.mal_id);
      } else {
        dispatch(addToFavorites(product));
        // add the product to localStorage as well
        addFavoriteToLocalStorage(product);
      }
    };

  return (
    <div>
        <button 
        onClick={toggleFavorites}
        className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            {isFavorite ? (
            <FaHeart className="text-pink-500" />
        ) : (
            <FaRegHeart className="text-white" />
        )}
        </button>
    </div>
  )
}

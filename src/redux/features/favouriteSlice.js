import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const favoriteSlice = createSlice({
  name: "favorites",
  initialState: [],
  reducers: {
    addToFavorites: (state, action) => {
      // Checkif the product is not already favorites
      if (!state.some((product) => product.mal_id === action.payload.mal_id)) {
        state.push(action.payload);
        toast.success("Added to favorites");
      }
    },
    removeFromFavorites: (state, action) => {
      // Remove the product with the matching ID
      toast.error("Removed from favorites");
      return state.filter((product) => product.mal_id !== action.payload.mal_id);
    },
    setFavorites: (state, action) => {
      // Set the favorites from localStorage
      return action.payload;
    },
  },
});

export const { addToFavorites, removeFromFavorites, setFavorites } =
  favoriteSlice.actions;
export const selectFavoriteProduct = (state) => state.favorites;
export default favoriteSlice.reducer;
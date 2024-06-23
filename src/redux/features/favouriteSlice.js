import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const favoriteSlice = createSlice({
  name: "favorites",
  initialState: [],
  reducers: {
    addToFavorites: (state, action) => {
      const productExists = state.some((product) => product.mal_id === action.payload.mal_id);
      if (!productExists) {
        state.push(action.payload);
        toast.success("Added to favorites");
      }
    },
    removeFromFavorites: (state, action) => {
      const updatedState = state.filter((product) => product.mal_id !== action.payload.mal_id);
      toast.error("Removed from favorites");
      return updatedState;
    },
    setFavorites: (state, action) => {
      return action.payload;
    },
  },
});

export const { addToFavorites, removeFromFavorites, setFavorites } = favoriteSlice.actions;
export const selectFavoriteProduct = (state) => state.favorites;
export default favoriteSlice.reducer;

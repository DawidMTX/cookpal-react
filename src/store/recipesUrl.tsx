import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TypeOfState } from "../types";




const initialState: TypeOfState = {
	baseApiUrl: `https://api.edamam.com/api/recipes/v2?type=public&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}`,
	newUrl: `https://api.edamam.com/api/recipes/v2?type=public&app_id=${process.env.REACT_APP_API_ID}$&random=true&app_key=${process.env.REACT_APP_API_KEY}&mealType=lunch`,
};

const recipeUrl = createSlice({
	name: "RecipeUrl",
	initialState,
	reducers: {
		searchUrl(state, action: PayloadAction<string>) {
			state.newUrl = state.baseApiUrl + `&q=${action.payload}`;
		},
		basicUrl(state, action: PayloadAction<string>) {
			state.newUrl =
				state.baseApiUrl + `&random=true&mealType=${action.payload}`;
		},
		newRecipieUrl(state, action: PayloadAction<string>) {
			state.baseApiUrl = state.baseApiUrl + `${action.payload}`;
		},
	},
});

export const { searchUrl, basicUrl } = recipeUrl.actions;
export default recipeUrl.reducer;

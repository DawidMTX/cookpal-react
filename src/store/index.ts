import { configureStore } from "@reduxjs/toolkit";
import recipesUrl from "./recipesUrl";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const store = configureStore({
	reducer: {
		fetchUrl: recipesUrl,
		
	},
});

export const useAppSelector: TypedUseSelectorHook<
	ReturnType<typeof store.getState>
> = useSelector;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();

export default store;

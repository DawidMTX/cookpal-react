import { FilterProps } from "../types";

export async function fetchRecipies(filters: FilterProps) {
    const { q, mealType, diet, cuisineType } = filters;
    
    const url = `https://api.edamam.com/api/recipes/v2?type=public&app_id=7bc664e7&app_key=73b69d6164b604d54087cd76a3a179ae%09&diet=${diet}&q=${q}&cuisineType=${cuisineType}&mealType=${mealType}`

	
	

try{
    const response = await fetch(url);

    const data = await response.json();

    return data;

}catch(error){

    console.log('Error: ', error)

}
}


export const updateSearchParams = (type: string, value: string) => {
	const searchParams = new URLSearchParams(window.location.search);
    console.log(searchParams)
		searchParams.set(type, value);
	
	const newPathName = `${window.location.pathname}?${searchParams.toString()}`;
   
	return newPathName;
};
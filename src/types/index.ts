export interface RecipesProps {
    image?: string,
    label: string,
    calories: number,
    totalTime: number
}

export interface TypeOfState {
    baseApiUrl: string,
    newUrl: string

}

export interface EventProps {
	title: string, 
	type: string,
    item?: any,
  
}

export interface FilterProps{
    mealType: string,
    q: string,
    diet: string,
    cuisineType: string,
}
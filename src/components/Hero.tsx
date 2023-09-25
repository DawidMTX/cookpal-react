import RecipeCard from "./RecipeCard";
import CustomButton from "./CustomButton";
import { basicUrl, searchUrl } from "./../store/recipesUrl";
import { useEffect, useState } from "react";
import { useAppSelector } from "../store";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Cusine, MealTypes } from "../constains";


const Hero = () => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const url = useAppSelector(store => store.fetchUrl.newUrl);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const search = searchParams.get("query");

	const mealType =
		MealTypes[Math.floor(Math.random() * MealTypes.length)].title;

	useEffect(() => {
		if (search) {
			dispatch(searchUrl(search));
		} else {
			dispatch(basicUrl(mealType));
		}
	}, [search]);

	
	const fetchRecipies = async () => {
		setIsLoading(true);
		const response = await fetch(url);

		if (!response.ok) {
			throw { message: "Somethink went wrong" };
		} else {
			const data = await response.json();
			setData(data.hits);
		}

		setIsLoading(false);
	};
	
	useEffect(() => {
		fetchRecipies();
	}, [url, search]);

	const handleClick = (getId: string) => {
		console.log(getId);
		const id = getId.slice(getId.lastIndexOf("/") + 1, getId.lastIndexOf("?"));
		navigate(`/detail/${id}`);
		console.log(id);
	};

	return (
		<section className="h-full w-full md:w-10/12 ">
		

			{isLoading ? (
				<p className=" w-full h-screen flex justify-center items-center ">
					Loading...
				</p>
			) : (
				<div className="flex md:flex-row flex-wrap gap-20  md:gap-4 justify-center items-center md:justify-around ">
					{data?.map((meal: any) => (
						<div
							onClick={() => handleClick(meal._links.self.href)}
							className="flex flex-col w-11/12 md:w-[220px] h-full md:min-h-[380px]  border-0 border-gray-300 shadow-lg hover:cursor-pointer rounded-md overflow-hidden"
							key={meal._links.self.href}
						>
							<RecipeCard recipes={meal.recipe} />
						</div>
					))}
				</div>
			)}
		</section>
	);
};

export default Hero;

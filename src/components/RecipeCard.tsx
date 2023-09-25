import { RecipesProps } from "./../types";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import React, { useState } from "react";

interface RecipeCardProps {
	recipes: RecipesProps;
}

const RecipeCard = ({ recipes }: RecipeCardProps) => {
	const { label, image, calories, totalTime } = recipes;

	const [clicked, setClicked] = useState<boolean>(false);

	return (
		<>
			<div className="w-full h-56 relative top-0 overflow-hidden ">
				<img
					src={image}
					alt="mealImage"
					className=" w-full object-fill"
				/>
			</div>
			<div className="flex flex-col flex-grow gap-10 px-2 my-4 md:gap-4 md:mt-2 justify-between ">
				<div>
					<h2 className="montserrat text-4xl md:text-lg ">{label}</h2>
				</div>
				<div className="flex flex-col ">
					<div className="flex justify-between">
						<p className="text-xl md:text-sm">{`${calories.toFixed(
							0
						)} kcal`}</p>
						<p className="text-xl md:text-sm">
							<AccessTimeIcon />
							{`${totalTime} min`}
						</p>
					</div>
					<p className="text-xl md:text-sm">
						<button
							className="cursor-pointer text-left  "
							onClick={() => setClicked(!clicked)}
						>
							{!clicked ? (
								<FavoriteBorderIcon fontSize="medium" />
							) : (
								<FavoriteIcon fontSize="medium" />
							)}
						</button>
						<span>0</span>
					</p>
				</div>
			</div>
		</>
	);
};

export default RecipeCard;

import { NavLink, useLoaderData, useParams, useSearchParams } from "react-router-dom";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import { useEffect, useState } from "react";
import CustomButton from "../CustomButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";


ChartJS.register(ArcElement, Tooltip, Legend);

interface RecipesTypes {
	recipe: {
		image: string;
		label: string;
		ingredientLines: [];
		totalTime: number;
		totalNutrients: {
			[key: string]: { label: string; quantity: number; unit: string };
		};
		url: string;
		digest: [
			{
				total: number;
				label: string;
				unit: string;
			}
		];
	};
}

type LabelsType = [string, string, string];

interface ChartDataType {
	labels: LabelsType;
	datasets: [
		{
			label: string;
			backgroundColor: string[];
			data: string[];
		}
	];
}

interface ParamsTypes {
	params: any;
}

const DetailPage = ( ) => {
	const [clicked, setClicked] = useState<boolean>(false);
	const searchParams = useSearchParams();

	const recipeData = useLoaderData() as RecipesTypes;
	const {
		image,
		label,
		ingredientLines,
		totalTime,
		url,
		digest,
		totalNutrients,
	} = recipeData.recipe;
	// change totalNutries na digest
	const labels: LabelsType = ["fat", "protein", "carbs"];
	const [config, setConfig] = useState<string[]>(["1", "1", "1"]);
	const [isVisible, setIsVisible] = useState<boolean>(false);
	const title = label.split(" ").slice(0, 4).toString().replaceAll(",", " ");

	useEffect(() => {
		setConfig([
			totalNutrients.FAT.quantity.toString(),
			totalNutrients.PROCNT.quantity.toString(),
			totalNutrients.CHOCDF.quantity.toString(),
		]);
	}, [recipeData]);

	const chartData: ChartDataType = {
		labels: labels,
		datasets: [
			{
				label: "Unit",
				backgroundColor: ["red", "blue", "orange"],
				data: config,
			},
		],
	};

	const handleAddFavorite = () => {
		setClicked(true);
		const id = searchParams
		console.log(id)
	}

	return (
		<main className="w-full flex flex-col  items-center pt-[148px]">
			<div className="flex flex-col  justify-center max-w-screen-xl  mx-10 my-8">
				<div className="flex flex-col md:flex-row  w-screen max-w-screen-lg h-full md:h-96 gap-8 px-6">
					<div className="w-full">
						<img
							src={image}
							alt="dishImage"
							className="object-cover w-full h-96"
						/>
					</div>
					<div className="w-full">
						<div className="flex flex-col justify-between h-full">
							<h2 className="text-4xl">{title}</h2>
							<div className="flex justify-between text-lg ">
								<p>
									<AccessTimeIcon /> Ready in min: {totalTime}
								</p>
								<p>
									<FormatListNumberedIcon /> Ingredients:{" "}
									{ingredientLines.length}
								</p>
							</div>

							<div className="flex flex-col items-center h-60">
								<Doughnut data={chartData} />
							</div>
							<div className="w-full flex justify-between items-center ">
								<p>
									Energy:{" "}
									{totalNutrients.ENERC_KCAL.quantity.toFixed(0).toString()}{" "}
									kcal
								</p>
								<CustomButton
									style={`items-end ${clicked && 'border-[#84BD00] text-[#84BD00]'}`}
									title="Favorite"
									icon={clicked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
									onClick={handleAddFavorite}
								/>
									
							
							</div>
						</div>
					</div>
				</div>

				<div
					className={`m-6 bg-orange-200 rounded-md ease-out duration-300 flex flex-wrap h-full $opacity-100 md:h-[400px]"   overflow-hidden `}
				>
					<div className="p-8">
						<h2 className="text-3xl mb-4">Nutrions:</h2>
						<ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-2 min-h-32 ">
							{digest?.map(item => (
								<li key={item.label}>
									<span className="font-bold">{item.label}: </span>
									<span>{item.total.toFixed(2)}</span>
									<span> {item.unit}</span>
								</li>
							))}
						</ul>
					</div>
				</div>

				<div className="m-6 rounded-md ">
					<div className="px-8 ">
						<h2 className="text-3xl mb-4">Ingredients:</h2>
						<ul>
							{ingredientLines.map(item => (
								<li>{item}</li>
							))}
						</ul>
					</div>
				</div>
				<div className="p-8 mx-2 text-2xl flex justify-center gap-2">
					<p>How to prepare? </p>
					<NavLink
						to={`${url}`}
						className="hover:text-[#84BD00]"
					>
						Click here!
					</NavLink>
				</div>
			</div>
		</main>
	);
};

export default DetailPage;

export async function loader({ params }: ParamsTypes) {
	const id = params.recipeID;

	const repsonse = await fetch(
		`https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=7bc664e7&app_key=73b69d6164b604d54087cd76a3a179ae%09`
	);

	if (!repsonse.ok) {
		throw { message: "Could not fetch recipes" };
	} else {
		const data = await repsonse.json();

		return data;
	}
}



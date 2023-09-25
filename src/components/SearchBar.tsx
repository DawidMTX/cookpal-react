
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAppDispatch } from "../store";
import { searchUrl } from "../store/recipesUrl";
import { updateSearchParams } from "../utils";

const SearchBar = () => {

	const [nameMeal, setNameMeal] = useState<string>("");
	const [searchParams, setSearchParams] = useSearchParams('')
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		
console.log(nameMeal)
		if(nameMeal.trim() === "" ){
			return alert("Plese provide some input")
		}
		navigate('/')
		
		searchParams.set('query', nameMeal)
		setSearchParams(searchParams)
	 
		setNameMeal('');
	};

	

	return (
		<form
			onSubmit={handleSearch}
			className=" hidden md:flex justify-between items-center"
		>
			<div className=" flex rounded-full border-[#D9D9D9] border outline-none  gap-3 h-[46px] ">
				

				<div className="flex items-center relative md:w-60 lg:w-80">
					<input
						type="text"
						placeholder="Search"
						className="mx-2 ml-6 h-full w-full  outline-none cursor-pointer text-sm "
						onChange={e => setNameMeal(e.target.value)}
						value={nameMeal}
					/>
					<button
						type="submit"
						className="  rounded-full  w-16 h-11 bg-[#D9D9D9]"
					>
						<SearchIcon />
					</button>
				</div>
			</div>
		</form>
	);
};

export default SearchBar;
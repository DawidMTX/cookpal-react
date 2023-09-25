import React, { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { IconContext } from "react-icons";
import { AiOutlineMenu } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import { MdAccountCircle } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { FiFilter } from "react-icons/fi";
import { BiHomeAlt2 } from "react-icons/bi";
import SearchIcon from "@mui/icons-material/Search";

const MobileMenu = () => {
	const [sidebar, setSidebar] = useState(false);
	const [nameMeal, setNameMeal] = useState<string>("");
	const [isVisible, setIsVisible] = useState<boolean>(false);
	const [searchParams, setSearchParams] = useSearchParams("");

	const navigate = useNavigate();

	const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		console.log(nameMeal);
		if (nameMeal.trim() === "") {
			return alert("Plese provide some input");
		}
		navigate("/");

		searchParams.set("query", nameMeal);
		setSearchParams(searchParams);

		setNameMeal("");
		showSidebar();
		setIsVisible(!isVisible);
	};

	const showSidebar = () => setSidebar(!sidebar);
	return (
		<div className="block md:hidden ">
			<IconContext.Provider value={{ color: "undefine" }}>
				<div className=" h-12 w-12 flex justify-start items-center z-10">
					<AiOutlineMenu
						className="w-full h-full "
						onClick={showSidebar}
					/>
				</div>

				<nav
					className={`absolute  top-0 right-0 bg-[#ffff]  h-screen  rounded duration-200 ease-in ${
						sidebar ? "w-full pt-8 px-4 " : " w-0 px-0 pt-0"
					}`}
				>
					<div className={`m-6 `}>
						<GrClose
							onClick={showSidebar}
							className=" w-10 h-10 ml-auto"
						/>
					</div>

					<ul className="w-full relative mt-16">
						<li
							className="menu-btn"
							onClick={showSidebar}
						>
							<Link
								to="#"
								className="no-underline text-[#151414] text-lg w-11/12 h-full flex items-center px-4 hover:text-white"
							>
								<div className="hover:ml-4 flex gap-3">
									<BiHomeAlt2 className="h-8 w-8" />
									<p className="text-2xl">Home</p>
								</div>
							</Link>
						</li>
						<li
							className="menu-btn"
							onClick={showSidebar}
						>
							<Link
								to="/account"
								className="no-underline text-[#151414] text-lg w-11/12 h-full flex items-center px-4 hover:text-white"
							>
								<div className="hover:ml-4 flex gap-3">
									<MdAccountCircle className="h-8 w-8" />
									<p className="text-2xl">Login / My account</p>
								</div>
							</Link>
						</li>

						<li className="menu-btn">
							<div
								className="no-underline text-[#151414] text-lg w-11/12 h-full flex items-center px-4 hover:text-white"
								onClick={() => setIsVisible(!isVisible)}
							>
								<div className="hover:ml-4 flex gap-3">
									<BsSearch className="h-8 w-8" />
									<p className="text-2xl">Search Recipes</p>
								</div>
							</div>
						</li>
						{isVisible && (
							<form onSubmit={handleSearch}>
								<div className={`flex w-10/12 h-16 `}>
									<input
										type="text"
										placeholder="Search"
										className="mx-2 ml-6 px-4 h-full w-full border  outline-none cursor-pointer text-2xl rounded-md"
										onChange={e => setNameMeal(e.target.value)}
										value={nameMeal}
									/>
									<button
										type="submit"
										className=" rounded-md w-24 h-16 bg-[#D9D9D9]"
									>
										<SearchIcon />
									</button>
								</div>
							</form>
						)}

						<li className="menu-btn">
							<Link
								to="#"
								className="no-underline text-[#151414] text-lg w-11/12 h-full flex items-center px-4 hover:text-white "
							>
								<div className="hover:ml-4 flex gap-3">
									<FiFilter className="h-8 w-8" />
									<p className="text-2xl">Filter Recipes</p>
								</div>
							</Link>
						</li>
					</ul>
				</nav>
			</IconContext.Provider>
		</div>
	);
};

export default MobileMenu;

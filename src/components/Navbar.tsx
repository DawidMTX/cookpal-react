import SearchBar from "./SearchBar";
import LoginMenu from "./menu/LoginMenu";
import { useEffect, useState } from "react";
import MobileMenu from "./menu/MobileMenu";
import { Link } from "react-router-dom";
import logo from "./../images/CP-Logo.png";

const NavBar = () => {
	const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
	const [visible, setVisible] = useState<boolean>(false);
	const [logged, setLogged] = useState<boolean>(false);

	const handleScroll = () => {
		const currentScrollPos = window.scrollY;

		setVisible(
			(prevScrollPos > currentScrollPos &&
				prevScrollPos - currentScrollPos > 70) ||
				currentScrollPos > 65
		);

		setPrevScrollPos(currentScrollPos);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, [visible, prevScrollPos, handleScroll]);

	return (
		<header
			className={`flex fixed ${
				!visible ? "h-[148px]" : "h-20"
			} w-full justify-center bg-white  z-10 ease-in-out duration-300 border-0 shadow-lg border-y-black`}
		>
			<div className="flex justify-around items-center w-full max-w-screen-xl  py-5">
				<Link to="/">
					<img
						src={logo}
						alt="Cookpol logo"
					/>
				</Link>

				<SearchBar />
				{!logged ? (
					<button className="hidden md:block rounded-full cursor-pointer border border-[#D9D9D9]  hover:border-[#84BD00] outline-none h-11 px-6 ">
						<Link to="/account?mode=login">Log In</Link>
					</button>
				) : (
					<LoginMenu />
				)}
				<MobileMenu />
			</div>
		</header>
	);
};

export default NavBar;

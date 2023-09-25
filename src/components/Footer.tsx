import { freshRecipe, inNews, aboutUs } from './../constains'
import EmailIcon from '@mui/icons-material/Email'
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import YouTubeIcon from "@mui/icons-material/YouTube";
import footerimgae from "./../images/rectangle.png";
import logo from './../images/CP-Logo.png'

const Footer = () => {
	return (
		<footer className="relative w-full h-fit lg:h-60 text-white bg-footer">
		
			<img
				src={footerimgae}
				alt="footer"
				className='object-cover -z-10 w-full h-full absolute'
			/>
			<div className=" flex flex-col  lg:flex-row justify-around items-center gap-9 mx-9 lg:mx-5  h-full pt-4 ">
				<div className="flex-none ">
					
                    <img 	src={logo}
						alt="logo"/>
					<p className="text-white"> All Rights Reserved</p>
				</div>
				<div>
					<div className=" flex flex-col sm:flex-row gap-7 md:gap-11 w-full flex-grow-1 justify-around  text-white text-xl lg:text-sm font-thin ">
						<ul>
							<h4 className="text-3xl lg:text-xl font-medium ">Fresh Recipe</h4>
							{freshRecipe.map(item => (
								<li
									className="leading-9 cursor-pointer"
									key={item}
								>
									{item}
								</li>
							))}
						</ul>
						<ul>
							<h4 className="text-3xl lg:text-xl font-medium ">In News</h4>
							{inNews.map(item => (
								<li
									className="leading-9 cursor-pointer"
									key={item}
								>
									{item}
								</li>
							))}
						</ul>
						<ul>
							<h4 className="text-3xl lg:text-xl font-medium ">About US</h4>
							{aboutUs.map(item => (
								<li
									className="leading-9 cursor-pointer"
									key={item}
								>
									{item}
								</li>
							))}
						</ul>
					</div>
				</div>

				<div className="flex-1 max-w-[400px] ">
					<form className=" flex-col w-full ">
						<label className='font-montez text-[40px]'>
							Join Our Newsletter
						</label>
						<div className="bg-transparent h-10 flex items-center justify-between border-[#D0C5C5] border pl-4">
							<input
								placeholder="Email"
								className='font-montserrat font-light text-xl text-[#D9D9D9] bg-transparent outline-none'
							/>
							<button className="border-[#D0C5C5] border-l cursor-pointer">
								<EmailIcon className="w-12" />
							</button>
						</div>
					</form>
					<div className=" flex gap-2 py-4">
						<button>
							<FacebookIcon className="h-8 w-8 cursor-pointer" />
						</button>
						<button>
							<InstagramIcon className="h-8 w-8 cursor-pointer" />
						</button>
						<button>
							<TwitterIcon className="h-8 w-8 cursor-pointer" />
						</button>
						<button>
							<PinterestIcon className="h-8 w-8 cursor-pointer" />
						</button>
						<button>
							<YouTubeIcon className="h-8 w-8 cursor-pointer" />
						</button>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

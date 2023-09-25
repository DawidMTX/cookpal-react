
import { Form, NavLink, useNavigate, useSearchParams} from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "../Input";
import CustomButton from "../CustomButton";
import logo from './../../images/CP-Logo.png';
import dishes from './../../images/dishes.png'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../../auth/firebase-auth";


const valid = yup.object({
	email: yup
		.string()
		.required("Enter corrent email")
		.email("email is not valid"),
	password: yup.string().min(6, "Password must by at least 6 characters"),
	confirmPassword: yup.string().oneOf([yup.ref("password")], "Password must by match!"),
});

const Account = () => {
	const [error, setError] = useState<string>("");
	// const [changeForm, setChangeForm] = useState<boolean>(true);
	const [searchParams] = useSearchParams()
	const isLogin = searchParams.get('mode') === 'login'
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm({
		mode: "onChange",
		resolver: yupResolver(valid),
	});

	
	const formSubmit = async (data: any, event: any)  => {
		event.preventDefault();
		console.log(data)

		try{
			if(isLogin){
				const user = await signInWithEmailAndPassword(auth, data.email, data.password)
			}else {
				const user = await createUserWithEmailAndPassword(auth, data.email, data.confirmPassword)
			}
		navigate('/')
		} catch(error: any){
			alert(error.message)
		}
	};

	return (
		<div className="absolute z-10 w-screen h-screen top-0 flex bg-white">
			<div className="w-1/2 hidden  md:block">
				<img
					src={dishes}
					alt="Dishes image"
					className="object-cover h-full"
				/>
			</div>

			<div className="bg-white w-full md:w-1/2 z-10 flex flex-col justify-center items-center flex-wrap">
				<div className="w-1/2  max-w-xs">
					<img
						src={logo}
						alt="logo"
						className="my-8 object-contain w-[150px] h-[50px]"
					/>
					{isLogin ? (
						<h2 className="text-3xl pb-4">Log IN</h2>
					) : (
						<h2 className="text-3xl pb-4">Create an account</h2>
					)}

					<div>
						<form	
							className="flex flex-col gap-4"
							onSubmit={handleSubmit(formSubmit)}
						>
							<Input
								id="email"
								label="Email Address"
								placeholder="yourname@example.com"
								type="text"
								register={{ ...register("email") }}
								errorMsg={errors.email?.message}
							/>
							<Input
								id="password"
								label="Password"
								placeholder="Enter your password"
								type="password"
								register={{ ...register("password") }}
								errorMsg={errors.password?.message}
							/>
							{!isLogin && (
								<Input
									id="confirmpassword"
									label="Confirm password"
									placeholder="Confirm your password"
									type="password"
									register={{ ...register("confirmPassword") }}
									errorMsg={errors.confirmPassword?.message}
								/>
							)}
							<p style={{ color: "red" }}>{error && error}</p>
							<CustomButton
								icon=""
								disabled={!isValid}
								title={isLogin ? "Log in" : 'Sign in'}
								type="submit"
								style="my-2 block ml-auto"
							/>

							<div className="flex flex-col">
								{isLogin && (
									<div className="self-center">
										<NavLink
											className="text-xs underline hover:text-[#84BD00]"
											to="#"
										>
											Forgot password?
										</NavLink>
									</div>
								)}

								<div className="self-center">
									<p className="text-xs">
										{isLogin ? `Don't have an account?` : `Do you have an account?`}
										<NavLink
											
											className="text-xs underline hover:text-[#84BD00]"
											to={`?mode=${isLogin ? 'signup' : 'login'}`}
										>
											{isLogin ? `Join now` : `Log in `}
										</NavLink>
									</p>
								</div>

								<div className="loginPanel__contener"></div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Account;


//poprawic typescript
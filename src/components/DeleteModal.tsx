
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../auth/firebase-auth";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

type Props = {
	setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const DeleteModal = (props: Props) => {
	const [user] = useAuthState(auth);
	const navigate = useNavigate();

	const deleteUser = async () => {
		await signOut(auth)
			.then(() => {
				console.log("LogOut sucessful");
				user
					?.delete()
					.then(() => {
						navigate("/");
						alert("Your account has been deleted");
					})
					.catch(error => {
						console.log("Some error");
					});
			})
			.catch(error => {
				console.log("Error message: " + error);
			});
	};

	return (
		<>
			<div className="absolute w-screen h-screen bg-gray-700 z-40 opacity-80"></div>
			<div className="absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 z-50 w-2/5 h-2/6 bg-gradient-to-r from-gray-600 to-gray-700 rounded-md text-white ">
				<div className="flex flex-col justify-center">
					<span
						className="self-end p-3 text-xl cursor-pointer hover:scale-105"
						onClick={() => props.setVisible(false)}
					>
						X
					</span>
					<h2 className="text-red-500 self-center mb-4">Deleting a user...</h2>
					<h1 className="text-3xl self-center">Are you sure?</h1>
					<div className="self-center p-8 flex gap-5">
						<span
							className="text-xl border px-5 py-2 hover:scale-95 cursor-pointer"
							onClick={() => deleteUser()}
						>
							Yes
						</span>
						<span
							className="text-xl border px-5 py-2 hover:scale-95 cursor-pointer"
							onClick={() => props.setVisible(false)}
						>
							No
						</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default DeleteModal;

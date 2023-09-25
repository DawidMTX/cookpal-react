import { useNavigate } from "react-router-dom";
import CustomButton from "../CustomButton";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const ErrorPage = () => {
    const navigate = useNavigate()

   
	return (
		<div className="flex flex-col justify-center items-center w-full h-screen">
			
			<div className="flex flex-col my-4 gap-4" >
                <div className="self-center"><ErrorOutlineIcon  fontSize="large"/></div>
				
				<h1 className="text-5xl self-center">Ups... </h1>
				<h2 className="text-3xl self-center">Somethink went wrong</h2>
				<h3 className="text-xl self-center">Please click Back button</h3>
			</div>
            <CustomButton onClick={() => navigate(-1) } title={"Back"} />
           
		</div>
	);
};

export default ErrorPage;




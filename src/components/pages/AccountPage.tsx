import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../auth/firebase-auth";
import { useNavigate } from "react-router-dom";

const AccountPage = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth)
    const email = user?.email
    const name = email?.substring(0, email.indexOf("@"))

    const meals: string[] = []
    return(
        <>
        {!user && navigate('/createaccount')}
        <div className="h-96 flex flex-col justify-center"> 
            <h2 className="text-3xl ">Welcome {name}</h2>
            <div>
                <h2>Your Favorite Dishes:</h2>
              
            </div>
        </div>
        </>
        
    );
}

export default AccountPage; 
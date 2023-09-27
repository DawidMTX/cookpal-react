import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../auth/firebase-auth";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "../../auth/firebase-auth";
import { useEffect, useState } from "react";
import { Favorite } from "@mui/icons-material";
import FavoriteMeals from "../FavoriteMeals";

const AccountPage = () => {
	const navigate = useNavigate();
	const [user] = useAuthState(auth);
	const email = user?.email;
	const name = email?.substring(0, email.indexOf("@"));
	const [favorite, setFavorite] = useState({});

	// useEffect(() => {
	// 	const favoriteMeals = collection(db, `${email}`);
	// 	getDocs(favoriteMeals).then(response => {
	// 		const fav = response.docs.map(doc => ({
	// 			data: doc.data(),
	// 			id: doc.id,
	// 		}));

	// 		setFavorite(fav);
	// 	});
	// }, []);

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, `${email}`), snapshot => {
            setFavorite(snapshot.docs.map(doc => ({id: doc.id, data: doc.data()})))
        })

        return () => {
            unsubscribe();
        }
    },[])

	console.log(favorite);
	return (
		<>
			{!user && navigate("/createaccount")}
			<div className="h-96 flex flex-col justify-center">
				<h2 className="text-3xl ">Welcome {name}</h2>
				<div>
					<h2>Your Favorite Dishes:</h2>

					{favorite?.map((item: any) => (
						<div key={item.id}>
							<FavoriteMeals data={data}/>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default AccountPage;

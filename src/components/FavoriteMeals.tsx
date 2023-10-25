
import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "../auth/firebase-auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useState } from "react";

const FavoriteMeals = (data: any) => {
   const {title, image} = data.data;
   console.log( data.data)

    return(
        <div className="border w-full h-8 flex ">
            <h2 >{title}</h2>
            <img src={image} alt="" />
        </div>
    )
}

export default FavoriteMeals;

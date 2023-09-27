
const FavoriteMeals = (data) => {
const {title, img} = data.data;
    return(
        <div className="border w-full h-8 flex ">
            <h2>{title}</h2>
            <img src={img} alt="" />
        </div>
    )
}

export default FavoriteMeals;

const RestaurantCard = ({ restaurant }) => {
  const { name, image, rating, cuisine, costText } = restaurant;
  const newCuisine = cuisine.map((elem) => elem.name);
  return (
    <div className="restaurant-card">
      <div>
        <img
          src={image.url}
          alt="restaurant-image"
          className="restaurant-image"
        />
      </div>
      <div>
        <h2>{name}</h2>
        <h2>{rating.rating_text} Stars</h2>
      </div>
      <div>
        <h4>{newCuisine.join(", ")}</h4>
        <h4>{costText.text}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;

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

// higher order component.

// takes input as RestaurantCard and gives back RestaurantCardPromoted.
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;

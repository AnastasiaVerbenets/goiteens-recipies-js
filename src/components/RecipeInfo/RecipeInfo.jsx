import PropTypes from 'prop-types'; 

export const RecipeInfo = ({ imageUrl, name, time, servings, calories, difficulty, id }) => {
    return (
        <li key={id}>
            <img src={imageUrl} alt={name} width="400" />
            <h2>{name}</h2>
            <p>Time for cook: {time}</p>
            <p>Serving for: {servings}</p>
            <p>Calories: {calories}</p>
            <p>Cooking difficulty: {difficulty}</p>
        </li>
    );
};

RecipeInfo.prototypes = {
    imageUrl: PropTypes.string,
    name: PropTypes.string,
    time: PropTypes.string,
    servings: PropTypes.number,
    calories: PropTypes.number,
    difficulty: PropTypes.number,
};
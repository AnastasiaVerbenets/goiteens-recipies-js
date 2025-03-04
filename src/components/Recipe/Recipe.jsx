import { RecipeInfo } from "../RecipeInfo/RecipeInfo";

export const Recipe = ({ recipe }) => {
    return (
        <ul>
            {recipe.map(({ imageUrl, name, time, servings, calories, difficulty, id }) => {
                return <RecipeInfo
                    key={id}
                    imageUrl={imageUrl}
                    name={name}
                    time={time}
                    servings={servings}
                    calories={calories}
                    difficulty={difficulty}
                />
            })}
        </ul>
    );
};
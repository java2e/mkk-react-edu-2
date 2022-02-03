
import { Fragment } from "react";
import AvaibaleMeals from "./AvaiableMeals";
import MealsSummary from "./MealsSummary";

const Meals = () => {

    return (
        <Fragment>
            <MealsSummary />
            <AvaibaleMeals />
        </Fragment>
    )

}

export default Meals;
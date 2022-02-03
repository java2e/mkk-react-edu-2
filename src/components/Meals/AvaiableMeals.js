import Card from "../UI/Card";
import MenuItem from "./MenuItem/MenuItem";

import classes from './AvaiableMeals.module.css';

const DUMMY_MEALS = [
    {
        id: '1',
        name:'Adana Kebap',
        description: 'Adana Kebap',
        price:45.50
    },
    {
        id:'2',
        name:'İskender',
        description:' Bursa İskenderi',
        price:40.50
    },
    {
        id:'3',
        name:'Döner',
        description:' Döner İskenderi',
        price:35.50
    },
    {
        id:'4',
        name:'Lahmacun',
        description:' Antep LAHMACUN',
        price:20.50
    },

]

const AvaibaleMeals = () => {


    const mealList = DUMMY_MEALS.map((meal) =>(
        <MenuItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
        />
    ))

    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {mealList}
                </ul>
            </Card>
        </section>

    )


}

export default AvaibaleMeals;
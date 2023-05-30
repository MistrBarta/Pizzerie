import React from "react";
import "../Styles/Menu.css";
import Pizza from "./Pizza";

 function Menu(){
    return(
        <div>
            <Pizza id={1} name="Margherita" ingredients="Tomato sauce, mozzarella, basil" price={180}/>
            <Pizza id={2} name="Pepperoni" ingredients="Tomato sauce, mozzarella, pepperoni" price={180}/>
            <Pizza id={3} name="Hawaiian" ingredients="Tomato sauce, mozzarella, ham, pineapple" price={180}/>
            <Pizza id={4} name="BBQ Chicken" ingredients="BBQ sauce, mozzarella, chicken, red onions" price={190}/>
            <Pizza id={5} name="Vegetarian" ingredients="Tomato sauce, mozzarella, bell peppers, mushrooms" price={190}/>
            <Pizza id={6} name="Meat Lovers" ingredients="Tomato sauce, mozzarella, pepperoni, sausage" price={190}/>
            <Pizza id={7} name="Four Cheese" ingredients="Tomato sauce, mozzarella, cheddar, gorgonzola" price={200}/>
            <Pizza id={8} name="Capricciosa" ingredients="Tomato sauce, mozzarella, ham, mushrooms" price={200}/>
            <Pizza id={9} name="Margherita Extra" ingredients="Tomato sauce, mozzarella, basil, extra virgin olive" price={200}/>
            <Pizza id={10} name="Diavola" ingredients="Tomato sauce, mozzarella, spicy salami, chili flakes" price={200}/>
        </div>
    );
}

export default Menu;
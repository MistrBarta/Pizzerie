import React from "react";
import "../Styles/Menu.css";
import Pizza from "./Pizza";

 function Menu(){
    return(
        <div>
            <Pizza name="Margherita" ingredients="Tomato sauce, mozzarella, basil" price={180} img={require("../Img/Footer-img.png")}/>
            <Pizza name="Pepperoni" ingredients="Tomato sauce, mozzarella, pepperoni" price={180}/>
            <Pizza name="Hawaiian" ingredients="Tomato sauce, mozzarella, ham, pineapple" price={180}/>
            <Pizza name="BBQ Chicken" ingredients="BBQ sauce, mozzarella, chicken, red onions" price={190}/>
            <Pizza name="Vegetarian" ingredients="Tomato sauce, mozzarella, bell peppers, mushrooms" price={190}/>
            <Pizza name="Meat Lovers" ingredients="Tomato sauce, mozzarella, pepperoni, sausage" price={190}/>
            <Pizza name="Four Cheese" ingredients="Tomato sauce, mozzarella, cheddar, gorgonzola" price={200}/>
            <Pizza name="Capricciosa" ingredients="Tomato sauce, mozzarella, ham, mushrooms" price={200}/>
            <Pizza name="Margherita Extra" ingredients="Tomato sauce, mozzarella, basil, extra virgin olive" price={200}/>
            <Pizza name="Diavola" ingredients="Tomato sauce, mozzarella, spicy salami, chilli flakes" price={200}/>
        </div>
    );
}

export default Menu;
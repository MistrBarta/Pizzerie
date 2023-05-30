import React from "react"
import "../Styles/Pizza.css";

function Pizza(props) {

    let data = "1";
    function btn(){
        data="Uspěšně přidáno do košíku"
        alert(data);
    }

  return (
    <div className="tempalate-page">
        <div className="tempalate-content">
            <div className='template-tittle'>
                <p>{props.name}</p>
            </div>
            <div className='template-ing'>
                <p>{props.ingredients}</p>
            </div>
            <div className='template-sale'>
                <div className='template-price'>
                    <p>Cena:{props.price}Kč</p>
                </div>
                <button onClick={btn} className='template-button'>Koupit</button>
            </div>
        </div>
    </div>
  )
}

export default Pizza
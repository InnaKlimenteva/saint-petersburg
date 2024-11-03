import { useState } from "react";
import { dataCarusel } from "./dataCarusel";

function Carusel(){

const [carusel , setCarusel] = useState(0);
const {id , image, name} =dataCarusel[carusel];

const nextPicture = ()=>{
setCarusel(carusel =>{
    carusel++;
    if (carusel >dataCarusel.length -1){
        carusel = 0;
    }
    return carusel;
})
}

const previosPicture = ()=>{
    setCarusel(carusel =>{
        carusel--;
        if (carusel < 0){
            carusel = dataCarusel.length-1;
        }
        return carusel;
    })
    
}

    return(
        <div>
            <div className="container">
                <h2>Do you still have time?</h2>
            </div>
            <div className="container">
                <h4>Here are even more tips on what to do or see in St.Petersburg</h4>
            </div>
            <div className="container">
                <img src={image} alt="SPb" width='500' height='350'/>
            </div>
            <div className="container">
                <h3>{id}. {name}</h3>
            </div>
            <div className="container">
                <button onClick={previosPicture}>←</button>
                <button onClick={nextPicture}>→</button>
            </div>
            <div className="container">
                <h3>Enjoy your St.Petersburg trip 💙</h3>
            </div>
        </div>
    )
}
export default Carusel;
import { useState } from "react";
import { dataMustSee } from "./dataMustSee";
import Carusel from "./Carusel";

function MustSee(){
    const[sight , setSight] = useState(dataMustSee);
    const [showText , setShowText] = useState(false);

    const deleteItem = (id)=>{
        let newList = sight.filter(item=>
            item.id !==id);
        setSight(newList);
        if(newList.length === 0){
            <Carusel/>
        }
    }
    

    const ShowTextClick = (element)=>{
        element.showMore = !element.showMore;
        setShowText(!showText);
    }

   
    return(
        <div>
        <div className="container">
            <h2>St.Petersburg Top {sight.length} Sights</h2>
        </div>
        <div>
            {sight.map(element =>{
                const { id, image, description, name, address, showMore, addressLink} = element;
                return(
                    <div key={id}>
                        <div className="container">
                           <h3>{id} - {name}</h3>
                        </div>
                        <div className="container">
                           <img src={image} alt="Spb" width='500'/>
                        </div>
                        <div className="container">
                           <p><a href={addressLink} target="_blanc">Address</a> : {address}</p>
                        </div>
                        <div className="container">
                           <h4 className="text">{showMore ? description : description.substring(0,120)} <button onClick={()=>ShowTextClick(element)} className="showMore">{showMore ? '... Show less' : '... Show more'}</button></h4>
                        </div>
                        <div className="container">
                           <button onClick={() =>deleteItem(id)} className="btn">Delete</button>
                        </div>
                        <br/>
                </div>
                )
            })}
        </div>
       
        <br/>
        </div>
    )
}

export default MustSee;
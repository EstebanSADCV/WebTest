import React from "react";
import logo512x420 from "./logo512x420.png"
import Equipacion1 from "./Equipacion1.png"
import Equipacion2 from "./Equipacion2.png"
import Equipacion3 from "./Equipacion3.png"


const Info = () => {
    return (
        <div className="App">
            <h1 className="text-white">
            Informacion sobre la App
            </h1>
            <p>
                <img src={logo512x420} alt="logo" />
            </p>
            <p>
                <img src={Equipacion1} alt="logo" />
            </p>
            <p>
            <img src={Equipacion2} alt="logo" />
            </p>
            <p>
            <img src={Equipacion3} alt="logo" />
            </p>
        </div> 
    )
}

export default Info
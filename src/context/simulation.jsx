import React, { createContext, useState } from "react";

const SimulationContext = createContext({});

const SimulationProvider = ({children})=>{
    const [simulation, setSimulation] = useState([]);
    return(
        <SimulationContext.Provider value={{simulation, setSimulation}}>
            {children}
        </SimulationContext.Provider>
    )
}
export { SimulationContext, SimulationProvider };
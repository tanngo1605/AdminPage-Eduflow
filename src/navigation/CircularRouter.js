import React from "react";
import {Route,Switch} from "react-router-dom";
import AddCircular from "../pages/Circular/AddCircular";
import CircularList from "../pages/Circular/CircularList";

const CircularRouter = () => {
  return (

      <div className="App">
        
        <Route path="/circular/circularlist" component={CircularList} />
        <Route path="/circular" component={AddCircular} />
        
      </div>
     
  );
}

export default CircularRouter;
//

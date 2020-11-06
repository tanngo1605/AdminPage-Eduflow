import React from "react";
import { Route,Switch} from "react-router-dom";

import CreateEvent from "../pages/Events/CreateEvent";
import EventList from "../pages/Events/EventList";


const EventRouter = () => {
  return (

      <div className="App">
      <Switch>
        <Route path="/event/createevent" component={CreateEvent} />
        <Route path="/event" component={EventList} />
        </Switch>
      </div>
     
  );
}

export default EventRouter;
//

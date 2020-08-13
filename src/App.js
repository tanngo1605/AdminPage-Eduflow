import React from "react";
import "./App.css";
//import LoginPage from "./pages/LoginPage/LoginPage";
import { Route, BrowserRouter } from 'react-router-dom'
import Homescreen from "./pages/Homescreen/Homescreen"
//import AccountSetting from "./pages/Accounts/AccountSetting"
import RaiseTicket from "./pages/Ticket/RaiseTicket";
import TicketList from "./pages/Ticket/TicketList";
import Events from "./pages/Events/Events"
import EventList from "./pages/Events/EventList"
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <TicketList/>

        
      </div>
    </BrowserRouter>
  );
}

export default App;
//<Route exact path='/dashboard/student' component={Homescreen}/>
         // <Route exact path='/dashboard/event' component={Events}/>
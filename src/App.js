import React from "react";
import "./App.css";
import LoginPage from "./pages/LoginPage/LoginPage";
import { Route, BrowserRouter,Switch } from 'react-router-dom'
import Homescreen from "./pages/Homescreen/Homescreen"
import AccountSetting from "./pages/Accounts/AccountSetting"
import RaiseTicket from "./pages/Ticket/RaiseTicket";
import TicketList from "./pages/Ticket/TicketList";
import Events from "./pages/Events/Events";
import EventList from "./pages/Events/EventList";
import TeacherProfile from "./pages/Teacher/TeacherProfile";
import TeacherSearch from "./pages/Teacher/TeacherSearch";
import StudentSearch from "./pages/Student/StudentSearch";
import StudentProfile from "./pages/Student/StudentProfile";
import Gallery from "./pages/Gallery/Gallery";
import './styles.css'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/dashboard/ticket' component={TicketList}/>
          <Route exact path='/dashboard/student' component={StudentSearch}/>
          <Route exact path='/dashboard/student/profile' component={StudentProfile}/>
        </Switch>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
//
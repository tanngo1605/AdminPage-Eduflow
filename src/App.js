import React from 'react';
import './App.css';
//import LoginPage from './pages/LoginPage/LoginPage';
import { Route, BrowserRouter,Switch } from 'react-router-dom'
import Homescreen from './pages/Homescreen/Homescreen'
import AccountSetting from './pages/Accounts/AccountSetting'
import RaiseTicket from './pages/Ticket/RaiseTicket';
import TicketList from './pages/Ticket/TicketList';
import Events from './pages/Events/Events';
import EventList from './pages/Events/EventList';
import TeacherProfile from './pages/Teacher/TeacherProfile';
import TeacherSearch from './pages/Teacher/TeacherSearch';
import StudentSearch from './pages/Student/StudentSearch';
import StudentProfile from './pages/Student/StudentProfile';
import Syllabus from './pages/Syllabus/Syllabus';
import Gallery from './pages/Gallery/Gallery';
import Timetable from './pages/TimeTable/TimeTable';
import './styles.css'
function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Switch>
          <Route path='/ticket/ticketlist' component={TicketList}/>
          <Route path='/ticket' component={RaiseTicket}/>
          <Route path='/event/raiseevent' component={Events}/>
          <Route path='/event' component={EventList}/>
          <Route path='/teacher/profile' component={TeacherProfile}/>
          <Route path='/teacher' component={TeacherSearch}/>
          <Route path='/student/profile' component={StudentProfile}/>
          <Route path='/student' component={StudentSearch}/>
          <Route path='/gallery' component={Gallery}/>
          <Route path='/account' component={AccountSetting}/>
          <Route path='/syllabus' component={Syllabus}/>
          <Route path='/timetable' component={Timetable}/>
          <Route path='/' component={Homescreen}/>
        </Switch>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
//
import React from "react";
import "./App.css";
//import LoginPage from './pages/LoginPage/LoginPage';
<<<<<<< HEAD
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Homescreen from "./pages/Homescreen/Homescreen";
import AccountSetting from "./pages/Accounts/AccountSetting";
import RaiseTicket from "./pages/Ticket/RaiseTicket";
import TicketList from "./pages/Ticket/TicketList";
import Events from "./pages/Events/Events";
import EventList from "./pages/Events/EventList";
import TeacherProfile from "./pages/Teacher/TeacherProfile";
import TeacherSearch from "./pages/Teacher/TeacherSearch";
import StudentSearch from "./pages/Student/StudentSearch";
import StudentProfile from "./pages/Student/StudentProfile";
import Syllabus from "./pages/Syllabus/Syllabus";
import Gallery from "./pages/Gallery/Gallery";
import Timetable from "./pages/TimeTable/TimeTable";
import ForgotPassword from "./pages/PasswordReset/ForgetPassword";
import ResetPassword from "./pages/PasswordReset/ResetPassword";
import SendOTP from "./pages/PasswordReset/SendOTP";
import ChangePassWord from "./pages/PasswordReset/ChangePassword";
import LoginPage from "./pages/LoginPage/LoginPage";
import "./styles.css";
=======
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
import Exam from './pages/Exam/Exam';
import SendOTP from './pages/PasswordReset/SendOTP';
import './styles.css'
>>>>>>> 89cd9944c932a0dd593e1228b990695ce4f0f77c

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <TimeTable /> */}
        {/* <ChangePassWord /> */}
        {/* <ResetPassword /> */}
        {/* <ForgetPassword /> */}
        {/* <SendOTP /> */}
        <Switch>
<<<<<<< HEAD
          <Route path="/" exact component={LoginPage} />
          <Route path="/sendotp" component={SendOTP} />
          <Route path="/changepassword" component={ChangePassWord} />
          <Route path="/forgotpassword" component={ForgotPassword} />
          <Route path="/resetpassword" component={ResetPassword} />
          <Route path="/ticket/ticketlist" component={TicketList} />
          <Route path="/ticket" component={RaiseTicket} />
          <Route path="/event/raiseevent" component={Events} />
          <Route path="/event" component={EventList} />
          <Route path="/teacher/profile" component={TeacherProfile} />
          <Route path="/teacher" component={TeacherSearch} />
          <Route path="/student/profile" component={StudentProfile} />
          <Route path="/student" component={StudentSearch} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/account" component={AccountSetting} />
          <Route path="/syllabus" component={Syllabus} />
          <Route path="/timetable" component={Timetable} />
          <Route path="/homescreen" component={Homescreen} />
=======
          <SendOTP/>
          <Route path='/exam' component={Exam}/>
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
>>>>>>> 89cd9944c932a0dd593e1228b990695ce4f0f77c
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
//

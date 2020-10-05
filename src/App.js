import React from "react";
import "./App.css";
import { Route, BrowserRouter, Switch, } from "react-router-dom";
import Homescreen from "./pages/Homescreen/Homescreen";
import AccountSetting from "./pages/Accounts/AccountSetting";
import RaiseTicket from "./pages/Ticket/RaiseTicket";
import TicketList from "./pages/Ticket/TicketList";
import CreateEvent from "./pages/Events/CreateEvent";
import EventList from "./pages/Events/EventList";
import TeacherProfile from "./pages/Teacher/TeacherProfile";
import TeacherSearch from "./pages/Teacher/TeacherSearch";
import StudentSearch from "./pages/Student/StudentSearch";
import MoveStudent from "./pages/StudentMigration/MoveStudent";
import StudentMigration from "./pages/StudentMigration/StudentMigration";
// import StudentProfile from "./pages/Student/StudentProfile";
import AStudentProfile from "./pages/Student/AnotherSP";
import ATeacherProfile from "./pages/Student/AnotherTP";
import Syllabus from "./pages/Syllabus/Syllabus";
import Gallery from "./pages/Gallery/Gallery";
import Timetable from "./pages/TimeTable/TimeTable";
import ForgotPassword from "./pages/PasswordReset/ForgetPassword";
import ResetPassword from "./pages/PasswordReset/ResetPassword";
import SendOTP from "./pages/PasswordReset/SendOTP";
import ChangePassWord from "./pages/PasswordReset/ChangePassword";
import LoginPage from "./pages/LoginPage/LoginPage";
import Exam from "./pages/Exam/Exam";
import ExaminationDuty from "./pages/Exam/ExaminationDuty";
import ImageInAlbum from "./pages/Gallery/ImageInAlbum";
import CreateClass from "./pages/Class/createClass";
import CreateSubject from "./pages/Class/createSubject";
import AddCircular from "./pages/Circular/AddCircular";
import CircularList from "./pages/Circular/CircularList";
import Feedback from "./pages/Feedback/Feedback";
import Attendance from "./pages/TeacherAttendance/Attendance";
import SearchAttendace from "./pages/TeacherAttendance/SearchAttendance";
import EditAttendance from "./pages/TeacherAttendance/EditAttendance";
import "./styles.css";

function App() {
  return (
    // <ScreenSyllabus />

    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/studentmigration" component={StudentMigration} />
          <Route path="/movestudent" component={MoveStudent} />
          <Route path="/editattendance" component={EditAttendance} />
          <Route path="/searchattendance" component={SearchAttendace} />
          <Route path="/attendance" component={Attendance} />
          <Route path="/feedback" component={Feedback} />
          <Route path="/circular/circularlist" component={CircularList} />
          <Route path="/circular" component={AddCircular} />
          <Route path="/class" component={CreateClass} />
          <Route path="/subject" component={CreateSubject} />
          <Route path="/sendotp" component={SendOTP} />
          <Route path="/examduty" component={ExaminationDuty} />
          <Route path="/exam" component={Exam} />
          <Route path="/changepassword" component={ChangePassWord} />
          <Route path="/forgotpassword" component={ForgotPassword} />
          <Route path="/resetpassword" component={ResetPassword} />
          <Route path="/ticket" component={TicketList} />
          <Route path="/raiseticket" component={RaiseTicket} />
          <Route path="/event/createevent" component={CreateEvent} />
          <Route path="/event" component={EventList} />
          <Route path="/teacher" component={TeacherProfile} />
          <Route path="/teachersearch" component={TeacherSearch} />
          <Route path="/student" component={AStudentProfile} />
          <Route path="/studentsearch" component={StudentSearch} />
          <Route path="/gallery/:album_name" component={ImageInAlbum} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/account" component={AccountSetting} />
          <Route path="/syllabus" component={Syllabus} />
          <Route path="/timetable" component={Timetable} />
          <Route path="/homescreen" component={Homescreen} />
          <Route exact path="/" component={LoginPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
//

import React,{ Suspense } from "react";
import { Route, BrowserRouter, Switch, } from "react-router-dom";
import Homescreen from "./pages/Homescreen/Homescreen";
import AccountSetting from "./pages/Accounts/AccountSetting";
import SchoolProfile from './pages/Accounts/SchoolProfile'
import RaiseTicket from "./pages/Ticket/RaiseTicket";
import RaiseTicketAdmin from "./pages/Ticket/RaiseTicketAdmin";
import TicketList from "./pages/Ticket/TicketList";
import MoveStudent from "./pages/StudentMigration/MoveStudent";
import StudentMigration from "./pages/StudentMigration/StudentMigration";
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
import UserRouter from "./navigation/UserRouter";
import CircularRouter from "./navigation/CircularRouter";
import EventRouter from "./navigation/EventRouter";
import TimeTable from "./pages/TimeTable/TimeTable";
import SchoolResults from "./pages/Results/SchoolResults";
import ClassResults from "./pages/Results/ClassResults";
import EnterMarks from "./pages/Results/EnterMarks";
import Results from "./pages/Results/Results";
import "./App.css";
import "./styles.css";
const App = () => {
  return (
    // <ScreenSyllabus />
    <div className="App">
      <Suspense fallback={<h1>Loading....</h1>}>
        <BrowserRouter >
      
          
          {/* <FormikForm /> */}
          {UserRouter()}
          {EventRouter()}
          {CircularRouter()}
          {/*<Route path="/formik" component={FormikForm} />*/}
          <Route path="/schoolprofile" component={SchoolProfile} />
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
          <Route path="/raiseticketadmin" component={RaiseTicketAdmin} />
          <Route path="/raiseticket" component={RaiseTicket} />   
          <Route path="/gallery/:album_name" component={ImageInAlbum} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/account" component={AccountSetting} />
          <Route path="/syllabus" component={Syllabus} />
          <Route path="/timetable" component={Timetable} />
          <Route path="/homescreen" component={Homescreen} />
          <Route path='/schoolresults' component={SchoolResults}/>
          <Route path='/classresults' component={ClassResults}/>
          <Route path='/entermarks' component={EnterMarks}/>
          <Route path='/results' component={Results}/>
          <Route exact path="/" component={LoginPage} />
          
      
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
//

import React, { Suspense } from "react";
import { Route, BrowserRouter, Switch, } from "react-router-dom";
import Homescreen from "./pages/AdminScreen/Homescreen/Homescreen";
import AccountSetting from "./pages/AdminScreen/Accounts/AccountSetting";
import Syllabus from "./pages/AdminScreen/Syllabus/Syllabus";
import Gallery from "./pages/AdminScreen/Gallery/Gallery";
import LoginPage from "./pages/AdminScreen/LoginPage/LoginPage";
import ImageInAlbum from "./pages/AdminScreen/Gallery/ImageInAlbum";
import CreateClass from "./pages/AdminScreen/Class/createClass";
import CreateSubject from "./pages/AdminScreen/Class/createSubject";
import TimeTable from "./pages/AdminScreen/TimeTable/TimeTable";

import UserRouter from "./navigation/UserRouter";
import EventRouter from "./navigation/EventRouter";
import PasswordRouter from "./navigation/PasswordRouter";
import ResultRouter from "./navigation/ResultRouter";
import TicketRouter from "./navigation/TicketRouter";
import ExamRouter from "./navigation/ExamRouter";
// import Result from "./pages/Results/Results"
import ResultList from "./pages/TeacherScreen/ApproveResult/Result"
import ApproveResult from "./pages/TeacherScreen/ApproveResult/ApproveResult"
import StudentResult from "./pages/TeacherScreen/ApproveResult/StudentResult"
import EResources from './pages/TeacherScreen/EResources/EResources';
import "./App.css";
import "./styles.css";
import CircularRouter from "./navigation/CircularRouter";
const App = () => {
  return (
    // <ScreenSyllabus />
    <div className="App">
      <Suspense fallback={<h1>Loading....</h1>}>
        <BrowserRouter >
          <Switch>

            {/* <FormikForm /> */}
            {UserRouter.map(({ path, component }, index) => <Route key={index} exact path={path} component={component} />)}
            {EventRouter.map(({ path, component }, index) => <Route key={index} exact path={path} component={component} />)}
            {CircularRouter.map(({ path, component }, index) => <Route key={index} exact path={path} component={component} />)}
            {PasswordRouter.map(({ path, component }, index) => <Route key={index} exact path={path} component={component} />)}
            {ResultRouter.map((element, index) => <Route key={index} exact {...element} />)}
            {TicketRouter.map((element, index) => <Route key={index} exact {...element} />)}
            {ExamRouter.map((element, index) => <Route key={index} exact {...element} />)}
            {/*<Route path="/formik" component={FormikForm} />*/}


            <Route path="/class" component={CreateClass} />
            <Route path="/subject" component={CreateSubject} />
            <Route path="/approveresult" component={ApproveResult} />
            <Route path="/studentresult" component={StudentResult} />
            <Route path="/eresources" component={EResources} />
            <Route path="/screensyllabus" component={Syllabus} />
            <Route path="/result" component={ResultList} />

            <Route path="/gallery/:album_name" component={ImageInAlbum} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/account" component={AccountSetting} />
            <Route path="/syllabus" component={Syllabus} />
            <Route path="/timetable" component={TimeTable} />
            <Route path="/homescreen" component={Homescreen} />

            <Route exact path="/" component={LoginPage} />
          </Switch>

        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
//

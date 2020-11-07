import React, { Suspense } from "react";
import { Route, BrowserRouter, Switch, } from "react-router-dom";
import Homescreen from "./pages/Homescreen/Homescreen";
import AccountSetting from "./pages/Accounts/AccountSetting";
import Syllabus from "./pages/Syllabus/Syllabus";
import Gallery from "./pages/Gallery/Gallery";
import LoginPage from "./pages/LoginPage/LoginPage";
import ImageInAlbum from "./pages/Gallery/ImageInAlbum";
import CreateClass from "./pages/Class/createClass";
import CreateSubject from "./pages/Class/createSubject";
import Feedback from "./pages/Feedback/Feedback";

import UserRouter from "./navigation/UserRouter";
import EventRouter from "./navigation/EventRouter";
import PasswordRouter from "./navigation/PasswordRouter";
import TimeTable from "./pages/TimeTable/TimeTable";
import ResultRouter from "./navigation/ResultRouter";
import TicketRouter from "./navigation/TicketRouter";
import ExamRouter from "./navigation/ExamRouter";
import Result from "./pages/Results/EnterMarks"
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
<<<<<<< HEAD
            {UserRouter.map((element, index) => <Route key={index} path={element.path} component={element.component} />)}
            {EventRouter.map((element, index) => <Route key={index} path={element.path} component={element.component} />)}
            {CircularRouter.map((element, index) => <Route key={index} path={element.path} component={element.component} />)}
            {PasswordRouter.map((element, index) => <Route key={index} path={element.path} component={element.component} />)}
            {ResultRouter.map((element, index) => <Route key={index} path={element.path} component={element.component} />)}
            {TicketRouter.map((element, index) => <Route key={index} path={element.path} component={element.component} />)}
            {ExamRouter.map((element, index) => <Route key={index} path={element.path} component={element.component} />)}
=======
            {UserRouter.map((element,index)=><Route key={index} {...element} />)}
            {EventRouter.map((element,index)=><Route key={index} {...element} />)}
            {CircularRouter.map((element,index)=><Route key={index} {...element} />)}
            {PasswordRouter.map((element,index)=><Route key={index} {...element} />)}
            {ResultRouter.map((element,index)=><Route key={index} {...element} />)}
            {TicketRouter.map((element,index)=><Route key={index} {...element} />)}
            {ExamRouter.map((element,index)=><Route key={index} {...element} />)}
>>>>>>> a44e72026dbb6ce5d97a2edd8daad1dcdb5427d4
            {/*<Route path="/formik" component={FormikForm} />*/}

            <Route path="/feedback" component={Feedback} />

            <Route path="/class" component={CreateClass} />
            <Route path="/subject" component={CreateSubject} />

            <Route path="/result" component={Result} />
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

import React from "react";
import { Route} from "react-router-dom";

import TeacherProfile from "../pages/Teacher/TeacherProfile";
import TeacherSearch from "../pages/Teacher/TeacherSearch";
import StudentSearch from "../pages/Student/StudentSearch";
import StudentProfile from "../pages/Student/StudentProfile";


const UserRouter = () => {
  return (

      <div>
          <Route path="/student" component={StudentProfile} />
          <Route path="/studentsearch" component={StudentSearch} />
          <Route path="/teacher" component={TeacherProfile} />
          <Route path="/teachersearch" component={TeacherSearch} />
      </div>
     
  );
}

export default UserRouter;
//

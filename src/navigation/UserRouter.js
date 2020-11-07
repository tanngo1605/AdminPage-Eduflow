import TeacherProfile from "../pages/Teacher/TeacherProfile";
import TeacherSearch from "../pages/Teacher/TeacherSearch";
import StudentSearch from "../pages/Student/StudentSearch";
import StudentProfile from "../pages/Student/StudentProfile";
import SchoolProfile from '../pages/Accounts/SchoolProfile'
import MoveStudent from "../pages/StudentMigration/MoveStudent";
import StudentMigration from "../pages/StudentMigration/StudentMigration";
import Attendance from "../pages/TeacherAttendance/Attendance";
import SearchAttendace from "../pages/TeacherAttendance/SearchAttendance";
import EditAttendance from "../pages/TeacherAttendance/EditAttendance";

const UserRouter = [
  {path:"/studentsearch",component:StudentSearch},
  {path:"/student",component:StudentProfile},
  {path:"/teachersearch",component:TeacherSearch},
  {path:"/teacher",component:TeacherProfile},
  {path:"/schoolprofile",component:SchoolProfile},
  {path:"/studentmigration",component:StudentMigration},
  {path:"/movestudent",component:MoveStudent},
  {path:"/editattendance",component:EditAttendance},
  {path:"/attendance",component:Attendance},
  {path:"/searchattendance",component:SearchAttendace}
]

export default UserRouter;
//

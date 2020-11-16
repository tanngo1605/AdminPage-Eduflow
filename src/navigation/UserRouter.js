import TeacherProfile from "../pages/AdminScreen/Teacher/TeacherProfile";
import TeacherSearch from "../pages/AdminScreen/Teacher/TeacherSearch";
import StudentSearch from "../pages/AdminScreen/Student/StudentSearch";
import StudentProfile from "../pages/AdminScreen/Student/StudentProfile";
import SchoolProfile from '../pages/AdminScreen/Accounts/SchoolProfile'
import MoveStudent from "../pages/AdminScreen/StudentMigration/MoveStudent";
import StudentMigration from "../pages/AdminScreen/StudentMigration/StudentMigration";
import Attendance from "../pages/AdminScreen/TeacherAttendance/Attendance";
import SearchAttendace from "../pages/AdminScreen/TeacherAttendance/SearchAttendance";
import EditAttendance from "../pages/AdminScreen/TeacherAttendance/EditAttendance";

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

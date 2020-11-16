import ForgotPassword from "../pages/AdminScreen/PasswordReset/ForgetPassword";
import ResetPassword from "../pages/AdminScreen/PasswordReset/ResetPassword";
import SendOTP from "../pages/AdminScreen/PasswordReset/SendOTP";
import ChangePassWord from "../pages/AdminScreen/PasswordReset/ChangePassword";
const PasswordRouter = [
  {path:"/forgotpassword",component:ForgotPassword},
  {path:"/resetpassword",component:ResetPassword},
  {path:"/sendotp",component:SendOTP},
  {path:"/changepassword",component:ChangePassWord}
]
export default PasswordRouter;
//

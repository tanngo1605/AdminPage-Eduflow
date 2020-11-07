import ForgotPassword from "../pages/PasswordReset/ForgetPassword";
import ResetPassword from "../pages/PasswordReset/ResetPassword";
import SendOTP from "../pages/PasswordReset/SendOTP";
import ChangePassWord from "../pages/PasswordReset/ChangePassword";
const PasswordRouter = [
  {path:"/forgotpassword",component:ForgotPassword},
  {path:"/resetpassword",component:ResetPassword},
  {path:"/sendotp",component:SendOTP},
  {path:"/changepassword",component:ChangePassWord}
]
export default PasswordRouter;
//

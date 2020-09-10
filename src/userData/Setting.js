import React from "react";
import { MdPersonPin,MdMessage,MdFingerprint } from "react-icons/md";
import { AiOutlineMail,AiOutlineExclamationCircle } from "react-icons/ai";

const icons = [
    {content:'Contact Us',web:'contact',icon: <AiOutlineMail size='1.2vw' color="#66C4E1" />},
    {content:'Feedback',web:'feedback',icon: <MdMessage size='1.2vw' color="#66C4E1" />},
    {content:'Log Out',web:'logout',icon: <MdPersonPin size='1.2vw' color="#66C4E1" />},
    {content:'Change Password',web:'changepassword',icon: <MdFingerprint size='1.2vw' color="#66C4E1" />},
    {content:'Help',web:'help',icon: <AiOutlineExclamationCircle size='1.2vw' color="#66C4E1" />}
];

export default icons;
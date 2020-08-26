import React from "react";
import { MdPersonPin,MdMessage,MdFingerprint } from "react-icons/md";
import { AiOutlineMail,AiOutlineExclamationCircle } from "react-icons/ai";

const icons = [
    {content:'Contact Us',icon: <AiOutlineMail size='1.2vw' color="#66C4E1" />},
    {content:'Feedback',icon: <MdMessage size='1.2vw' color="#66C4E1" />},
    {content:'Log Out',icon: <MdPersonPin size='1.2vw' color="#66C4E1" />},
    {content:'Change Password',icon: <MdFingerprint size='1.2vw' color="#66C4E1" />},
    {content:'Help',icon: <AiOutlineExclamationCircle size='1.2vw' color="#66C4E1" />}
];

export default icons;
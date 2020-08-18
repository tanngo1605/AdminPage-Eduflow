import React from "react";
import { MdPersonPin,MdMessage,MdFingerprint } from "react-icons/md";
import { AiOutlineMail,AiOutlineExclamationCircle } from "react-icons/ai";

const icons = [
    {content:'Contact Us',icon: <AiOutlineMail color="#66C4E1" />},
    {content:'Feedback',icon: <MdMessage color="#66C4E1" />},
    {content:'Log Out',icon: <MdPersonPin color="#66C4E1" />},
    {content:'Change Password',icon: <MdFingerprint color="#66C4E1" />},
    {content:'Help',icon: <AiOutlineExclamationCircle color="#66C4E1" />}
];

export default icons;
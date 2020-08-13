import React from "react";

import "./Header.styles.css";

const Header = (props) => (
    <div className="title">
        <a  style={{ 
                display:'flex',
                alignItem:'center',
                fontSize:36,
                color:'#0A0A0B',
                fontFamily:'Prata',
                textTransform:'uppercase',
                marginLeft:40,
                marginTop:15
                
                    }} 
            > Shri Ji Baba Public School 
        </a>
    </div>
);

export default Header;

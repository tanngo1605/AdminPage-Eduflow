import React, { Component } from "react";

import Drawer from "../../component/Drawer/Drawer"
import Header from "../../component/Header/Header"

import OtpInput from 'react-otp-input';


class Syllabus extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
    
  }
  


  render() {
    
    return (
      <div className="dashboard">
        <div style={{display: "flex"}}>
          <Drawer/>
          <div className='flexcolumn'>
            <Header/>
            
            
          </div>
        
      </div>  
      </div>
    );
  }
}
export default (Syllabus);




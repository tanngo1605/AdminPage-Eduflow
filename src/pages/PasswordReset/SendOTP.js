import React, { Component } from "react";

import Drawer from "../../component/Drawer/Drawer"
import Header from "../../component/Header/Header"

import OtpInput from 'react-otp-input';


class Syllabus extends Component {
  constructor (props) {
    super(props)
    this.state = {
      otp:'',
 
    }
    
  }
  


  handleChange = otp => this.setState({ otp });

  render() {
    
    return (
      <div className="dashboard">
        <div style={{display: "flex"}}>
          <Drawer/>
          <div className='flexcolumn'>
            <Header/>
            <div className="form" onSubmit={this.handleSubmit}>
                <OtpInput
                    onChange={this.handleChange}
                    numInputs={6}
                    separator={<span>-</span>}
                    value={this.state.otp}
                    />              
                {console.log(this.state)}

              
            </div>
            
          </div>
        
      </div>  
      </div>
    );
  }
}
export default (Syllabus);




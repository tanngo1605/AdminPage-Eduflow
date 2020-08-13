import React, { Component } from "react";
import { AiOutlineClose } from 'react-icons/ai';
import Drawer from "../../component/Drawer/Drawer"
import Header from "../../component/Header/Header"
import './accountsetting.styles.css'


class LoginForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      schoolname: false,
      schooladdress:false,
      schoolcode:false,
      city:false,
      schoolbranch:false,
      director:false,
      principle:false,  
      viceprinciple:false,
      admin:false,
      image:null,
    }
    this.handleChange = this.handleChange.bind(this)
  }
  displayImage = () =>{
      if (this.state.image!=null){
          return (
              <div style={{width:'400px'}}>
                <div className='image'>
                    <img src={this.state.image} style={{width:"200px",height:"100px"}} />
                    <AiOutlineClose style={{width:"25px",height:"25px"}} onClick={()=>this.setState({image:null})}/>
                </div>
              </div>
          )
      }
      else {
          return (
              <div style={{width:'400px'}}>
                <div className='image'>
            
                </div>
              </div>
          )
      }
  }

  handleChange = (event) => {
      console.log(event.target.id);
    if (event.target.id=='image'){
        this.setState({
            image: URL.createObjectURL(event.target.files[0])
          });
    }
    else
    {
        this.setState({[event.target.id]: event.target.value})
    }
  }
  handleSubmit = (event) => {
    console.log(this.state);
    event.preventDefault();
    document.getElementById("create-course-form").reset();
    
  }


  render() {
    return (
      <div className="dashboard">
        <div style={{display: "flex"}}>
          <Drawer/>
          <div className='display'>
            <Header/>
            <form className="form" onSubmit={this.handleSubmit} id="create-course-form">
              <div style={{marginLeft:25}}>
                
                <div style={{color:'#262F56',fontSize:18,fontWeight:'bold',marginBottom:10,marginTop:"20px"}}>Account Settings</div>
                
                <div style={{display:'flex',marginBottom:10}}>
                    <div className='display'>
                        <label htmlFor="schoolname" className='section' style={Object.assign({},boxStyle,sectionStyle)}>School name</label>
                        <input type="text" id='schoolname' className="box" style={boxStyle} onChange={this.handleChange} />
                    </div>
                        
                    <div style={{marginLeft:40}}>
                        <label htmlFor="schooladdress" className='section' style={Object.assign({},boxStyle,sectionStyle)}>School Address</label>
                        <input type="text" id='schooladdress' className="box" style={boxStyle} onChange={this.handleChange} />
                    </div>
                </div>
                <div style={{display:'flex',marginBottom:10}}>
                    <div className='display'>
                        <label htmlFor="schoolcode" className='section' style={Object.assign({},boxStyle,sectionStyle)}>School code</label>
                        <input type="text" id='schoolcode' className="box" style={boxStyle} onChange={this.handleChange} />
                    </div>
                        
                    <div style={{marginLeft:40}}>
                        <label htmlFor="city" className='section' style={Object.assign({},boxStyle,sectionStyle)}>City</label>
                        <input type="text" id='city' className="box" style={boxStyle} onChange={this.handleChange} />
                    </div>
                </div>
                <div style={{display:'flex',marginBottom:10}}>
                    <div className='display'>
                        <label htmlFor="schoolbranch" className='section' style={Object.assign({},boxStyle,sectionStyle)}>School branch</label>
                        <input type="text" id='schoolbranch' className="box" style={boxStyle} onChange={this.handleChange} />
                    </div>
                        
                    <div style={{marginLeft:40}}>
                        <label htmlFor="director" className='section' style={Object.assign({},boxStyle,sectionStyle)}>Director</label>
                        <input type="text" id='director' className="box" style={boxStyle} onChange={this.handleChange} />    
                    </div>
                </div>
                <div style={{display:'flex',marginBottom:10}}>
                  <div style={{marginBottom:10}}>
                    {this.displayImage()}

                    <div style={{display:'flex',marginTop:10}}>
                        <label className='attachment' htmlFor="image" style={{marginLeft:60}}> <a >Upload a photo</a> </label>
                        <label className='attachment' htmlFor="image" style={{marginLeft:20}}> <a >Take a photo</a> </label>
                    </div>
                    <input type="file" id='image' onChange={this.handleChange} accept="image/*"/>
                  </div>
                  <div className='display'>
                    <div className='display' style={{marginLeft:40,marginBottom:10}}>
                        <label htmlFor="principle" className='section' style={Object.assign({},boxStyle,sectionStyle)}>Principle</label>
                        <input type="text" id='principle' className="box" style={boxStyle} onChange={this.handleChange} />
                    </div>
                        
                    <div className='display' style={{marginLeft:40,marginBottom:10}}>
                        <label htmlFor="viceprinciple" className='section' style={Object.assign({},boxStyle,sectionStyle)}>Vice Principle</label>
                        <input type="text" id='viceprinciple' className="box" style={boxStyle} onChange={this.handleChange} />    
                    </div>
                    <div className='display' style={{marginLeft:40}}>
                        <label htmlFor="admin" className='section' style={Object.assign({},boxStyle,sectionStyle)}>Admin</label>
                        <input type="text" id='admin' className="box" style={boxStyle} onChange={this.handleChange} />    
                    </div>
                  </div>
                </div>
                <div style={{display:'flex',marginTop:-20,marginBottom:10}}>
                    <div className='display'>
                        <label htmlFor="totalteacher" className='section' style={Object.assign({},footersectionStyle,footerStyle)}>Total Teachers</label>
                        <input type="number" id='totalteacher' className="box" style={footerStyle} onChange={this.handleChange} />
                    </div>
                        
                    <div className='display' style={{marginLeft:40}}>
                        <label htmlFor="totalstudent" className='section' style={Object.assign({},footersectionStyle,footerStyle)}>Total Staff</label>
                        <input type="number" id='totalstudent' className="box" style={footerStyle} onChange={this.handleChange} />    
                    </div>
                    <div className='display' style={{marginLeft:40}}>
                        <label htmlFor="totalstaff" className='section' style={Object.assign({},footersectionStyle,footerStyle)}>Total Students</label>
                        <input type="number" id='totalstaff' className="box" style={footerStyle} onChange={this.handleChange} />    
                    </div>
                </div>
                <div style={{display:'flex'}} >
                    <input type="submit" value="Save" className="button" style={{marginLeft:"18%"}}/>
                    <input type="reset" value="Reset" className="button" />
                    
                </div>
                
            
              </div>
            </form>
          </div>
        
      </div>  
      </div>
    );
  }
}

export default LoginForm;

const boxStyle = {
    fontSize: '15px',
    width:'400px'
};

const sectionStyle = {
    paddingLeft:'20px',
};
const footerStyle = {
    fontSize: '15px',
    width:'250px',
};
const footersectionStyle = {
    paddingLeft:'30px',
};
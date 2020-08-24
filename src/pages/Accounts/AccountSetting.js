import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { AiOutlineClose } from 'react-icons/ai';
import { BsPlus } from "react-icons/bs";
import Drawer from '../../component/Drawer/Drawer'
import Header from '../../component/Header/Header'


class LoginForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      schoolname: '',
      schooladdress:'',
      schoolcode:'',
      city:'',
      schoolbranch:'',
      director:'',
      principle:'',  
      viceprinciple:'',
      admin:'',
      image:null,
    }
  }
  displayImage = () =>{
    if (this.state.image!=null)
      return (
              <div style={{width:'400px'}}>
                <div className='imagearea'>
                    <img src={this.state.image} alt="yourimage" style={{width:'200px',height:'100px'}} />
                    <AiOutlineClose style={{width:'25px',height:'25px'}} onClick={()=>this.setState({image:null})}/>
                </div>
              </div>
          )
    return (
      <div style={{width:'400px'}}>
          <div className='imagearea'></div>
      </div>
  )}
  onDrop = (images) => {
    this.setState({image:URL.createObjectURL(images[0])})
  }    

  handleChange = (event) => {
    this.setState({[event.target.id]: event.target.value})
  }
  handleSubmit = (event) => {
    event.preventDefault();
    document.getElementById('create-course-form').reset();
    
  }


  render() {
    return (
      <div className='dashboard'>
        <div className='flexrow'>
          <Drawer/>
          <div className='flexcolumn'>
            <Header/>
            <form className='form' onSubmit={this.handleSubmit} id='create-course-form'>
              <div style={{marginLeft:25}}>
                <h1 className='titleform'>Account Settings</h1>
                <div className='flexrow' style={{marginBottom:10}}>
                    <div className='flexcolumn'>
                        <label htmlFor='schoolname' className='section' style={sectionStyle}>School name</label>
                        <input type='text' id='schoolname' className='longbox' onChange={this.handleChange} />
                    </div>
                        
                    <div className='flexcolumn' style={{marginLeft:40}}>
                        <label htmlFor='schooladdress' className='section' style={sectionStyle}>School Address</label>
                        <input type='text' id='schooladdress' className='longbox' onChange={this.handleChange} />
                    </div>
                </div>
                <div className='flexrow' style={{marginBottom:10}}>
                    <div className='flexcolumn'>
                        <label htmlFor='schoolcode' className='section' style={sectionStyle}>School code</label>
                        <input type='text' id='schoolcode' className='longbox' onChange={this.handleChange} />
                    </div>
                        
                    <div className='flexcolumn' style={{marginLeft:40}}>
                        <label htmlFor='city' className='section' style={sectionStyle}>City</label>
                        <input type='text' id='city' className='longbox' onChange={this.handleChange} />
                    </div>
                </div>
                <div className='flexrow' style={{marginBottom:10}}>
                    <div className='flexcolumn'>
                        <label htmlFor='schoolbranch' className='section' style={sectionStyle}>School branch</label>
                        <input type='text' id='schoolbranch' className='longbox' onChange={this.handleChange} />
                    </div>
                        
                    <div className='flexcolumn' style={{marginLeft:40}}>
                        <label htmlFor='director' className='section' style={sectionStyle}>Director</label>
                        <input type='text' id='director' className='longbox' onChange={this.handleChange} />    
                    </div>
                </div>
                <div className='flexrow' style={{marginBottom:20}}>
                  <div style={{marginBottom:10}}>
                    {this.displayImage()}
                    <div className='flexrow' style={{marginTop:10}}>
                      <Dropzone onDrop={this.onDrop} accept='image/*'>
                        {({getRootProps, getInputProps}) => (
                          <section className='flexrow' style={{marginLeft:50}}>
                            <div {...getRootProps({className: 'attachment'})}>
                              <input {...getInputProps()} />
                                <BsPlus color="white" size={18} style={{marginRight:'15px',marginLeft:"6px",marginTop:"1px"}}/>
                                <p>Upload a photo</p>  
                            </div>
                          </section>
                        )}
                      </Dropzone>
                
                      <div className='attachment' style={{marginLeft:20}}>
                        <BsPlus color="white" size={18} style={{marginRight:'15px',marginLeft:"6px",marginTop:"1px"}}/>
                        <p>Take a photo</p>  
                      </div>
                        
                    </div>
                    
                  </div>
                  <div className='flexcolumn' style={{marginLeft:50}} >
                    <div className='flexcolumn'>
                        <label htmlFor='principle' className='section' style={sectionStyle}>Principle</label>
                        <input type='text' id='principle' className='longbox'  onChange={this.handleChange} />
                    </div>
                        
                    <div className='flexcolumn' style={{marginTop:10}}>
                        <label htmlFor='viceprinciple' className='section' style={sectionStyle}>Vice Principle</label>
                        <input type='text' id='viceprinciple' className='longbox'  onChange={this.handleChange} />    
                    </div>
                    <div className='flexcolumn' style={{marginTop:10}}>
                        <label htmlFor='admin' className='section' style={sectionStyle}>Admin</label>
                        <input type='text' id='admin' className='longbox' onChange={this.handleChange} />    
                    </div>
                  </div>
                </div>
                <div className='flexrow' style={{marginTop:-20,marginBottom:"2%"}}>
                    <div className='flexcolumn'>
                        <label htmlFor='totalteacher' className='section' style={Object.assign({},footersectionStyle,footerStyle)}>Total Teachers</label>
                        <input type='number' id='totalteacher' className='shortbox' style={footerStyle} onChange={this.handleChange} />
                    </div>
                        
                    <div className='flexcolumn' style={{marginLeft:40}}>
                        <label htmlFor='totalstudent' className='section' style={Object.assign({},footersectionStyle,footerStyle)}>Total Staff</label>
                        <input type='number' id='totalstudent' className='shortbox' style={footerStyle}  onChange={this.handleChange} />    
                    </div>
                    <div className='flexcolumn' style={{marginLeft:40}}>
                        <label htmlFor='totalstaff' className='section' style={Object.assign({},footersectionStyle,footerStyle)}>Total Students</label>
                        <input type='number' id='totalstaff' className='shortbox' style={footerStyle} onChange={this.handleChange} />    
                    </div>
                </div>
                <div className='flexrow' >
                    <input type='submit' value='Save' className='button' style={{marginLeft:'18%'}}/>
                    <input type='reset' value='Reset' className='button' />
                    
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


const sectionStyle = {
    paddingLeft:'20px',
};
const footerStyle = {
    width:'250px',
};
const footersectionStyle = {
    paddingLeft:'30px',
};
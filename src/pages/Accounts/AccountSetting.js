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
                <div className='imagearea'>
                    <img src={this.state.image} alt="yourimage" style={{width:'15vw',height:'15vh',marginRight:'1vw'}} />
                    <AiOutlineClose size='1.2vw' onClick={()=>this.setState({image:null})}/>
                </div>
     
      )
    return <div className='imagearea'></div>
      
  }
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
              
                <h1 className='titleform'>Account Settings</h1>
                <div className='flexrow' style={{marginBottom:'1vh'}}>
                    <div className='flexcolumn'>
                        <label htmlFor='schoolname' className='section' style={sectionStyle}>School name</label>
                        <input type='password' id='schoolname' className='longbox' onChange={this.handleChange} />
                    </div>
                        
                    <div className='flexcolumn' style={{marginLeft:'6vw'}}>
                        <label htmlFor='schooladdress' className='section' style={sectionStyle}>School Address</label>
                        <input type='password' id='schooladdress' className='longbox' onChange={this.handleChange} />
                    </div>
                </div>
                <div className='flexrow' style={{marginBottom:'1vh'}}>
                    <div className='flexcolumn'>
                        <label htmlFor='schoolcode' className='section' style={sectionStyle}>School code</label>
                        <input type='text' id='schoolcode' className='longbox' onChange={this.handleChange} />
                    </div>
                        
                    <div className='flexcolumn' style={{marginLeft:'6vw'}}>
                        <label htmlFor='city' className='section' style={sectionStyle}>City</label>
                        <input type='text' id='city' className='longbox' onChange={this.handleChange} />
                    </div>
                </div>
                <div className='flexrow' style={{marginBottom:'1vh'}}>
                    <div className='flexcolumn'>
                        <label htmlFor='schoolbranch' className='section' style={sectionStyle}>School branch</label>
                        <input type='text' id='schoolbranch' className='longbox' onChange={this.handleChange} />
                    </div>
                        
                    <div className='flexcolumn' style={{marginLeft:'6vw'}}>
                        <label htmlFor='director' className='section' style={sectionStyle}>Director</label>
                        <input type='text' id='director' className='longbox' onChange={this.handleChange} />    
                    </div>
                </div>
                <div className='flexrow' style={{marginBottom:'2.5vh'}}>
                  <div className='flexcolumn'>
                    {this.displayImage()}
                    <div className='flexrow' style={{marginTop:'1.5vh'}}>
                      <Dropzone onDrop={this.onDrop} accept='image/*'>
                        {({getRootProps, getInputProps}) => (
                          <section className='flexrow' style={{marginLeft:'4vw'}}>
                            <div {...getRootProps({className: 'attachment'})}>
                              <input {...getInputProps()} />
                                <BsPlus color="white" size={'1.5vw'} className='attachmentplusicon'/>
                                <p>Upload a photo</p>  
                            </div>
                          </section>
                        )}
                      </Dropzone>
                
                      <div className='attachment' style={{marginLeft:'1vw'}}>
                        <BsPlus color="white" size={'1.5vw'} className='attachmentplusicon'/>
                        <p>Take a photo</p>  
                      </div>
                        
                    </div>
                    
                  </div>
                  <div className='flexcolumn' style={{marginLeft:'8.3vw'}} >
                    <div className='flexcolumn'>
                        <label htmlFor='principle' className='section' style={sectionStyle}>Principle</label>
                        <input type='text' id='principle' className='longbox'  onChange={this.handleChange} />
                    </div>
                        
                    <div className='flexcolumn' style={{marginTop:'0.5vh'}}>
                        <label htmlFor='viceprinciple' className='section' style={sectionStyle}>Vice Principle</label>
                        <input type='text' id='viceprinciple' className='longbox'  onChange={this.handleChange} />    
                    </div>
                    <div className='flexcolumn' style={{marginTop:'0.5vh'}}>
                        <label htmlFor='admin' className='section' style={sectionStyle}>Admin</label>
                        <input type='text' id='admin' className='longbox' onChange={this.handleChange} />    
                    </div>
                  </div>
                </div>
                <div className='flexrow' style={{marginTop:'-1.5vh',marginBottom:"1%"}}>
                    <div className='flexcolumn'>
                        <label htmlFor='totalteacher' className='section' style={sectionStyle}>Total Teachers</label>
                        <input type='number' id='totalteacher' className='shortbox' onChange={this.handleChange} />
                    </div>
                        
                    <div className='flexcolumn' style={{marginLeft:'3vw'}}>
                        <label htmlFor='totalstudent' className='section' style={sectionStyle}>Total Staff</label>
                        <input type='number' id='totalstudent' className='shortbox'  onChange={this.handleChange} />    
                    </div>
                    <div className='flexcolumn' style={{marginLeft:'3vw'}}>
                        <label htmlFor='totalstaff' className='section' style={sectionStyle}>Total Students</label>
                        <input type='number' id='totalstaff' className='shortbox' onChange={this.handleChange} />    
                    </div>
                </div>
                <div className='flexrow' >
                    <input type='submit' value='Save' className='button' style={{marginLeft:'18%'}}/>
                    <input type='reset' value='Reset' className='button' />
                    
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
    paddingLeft:'1.5vw',
};


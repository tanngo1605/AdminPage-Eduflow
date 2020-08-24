import React, { Component } from "react";
import { BsPlus,BsFillFolderFill } from "react-icons/bs";
import Drawer from "../../component/Drawer/Drawer"
import Header from "../../component/Header/Header"
import Dropzone from 'react-dropzone'

const syllabus={
  '1':{class:'',subject:'',files:null},
  '2':{class:'',subject:'',files:null},
  '3':{class:'',subject:'',files:null},
  '4':{class:'',subject:'',files:null},
  '5':{class:'',subject:'',files:null}
}

class Syllabus extends Component {
  constructor (props) {
    super(props)
    this.state = {
      '1':{class:'',subject:'',files:null},
      '2':{class:'',subject:'',files:null},
      '3':{class:'',subject:'',files:null},
      '4':{class:'',subject:'',files:null},
      '5':{class:'',subject:'',files:null}
 
    }
    
  }
  onDrop = (files,key) => {
    let update = Object.assign({},this.state[key],{files: files});

    this.setState({
      [key]:update
    })
  }


  handleChange = (event,key) => {
    
    let update = Object.assign({},this.state[key],{[event.target.id]: event.target.value});
    this.setState({
      [key]:update
    })
  }
  handleSubmit = (event) => {
    event.preventDefault();
    document.getElementById('create-course-form').reset();
    
  }

  render() {
    
    return (
      <div className="dashboard">
        <div style={{display: "flex"}}>
          <Drawer/>
          <div className='flexcolumn'>
            <Header/>
            <form className="form" onSubmit={this.handleSubmit} id="create-course-form">
              <div className="flexcolumn" style={{marginLeft:25}}>

                <h1 className='titleform'>Syllabus</h1>
                <div className='eventlistArea' style={{width:'70vw',height:'60vh',paddingTop:'15px'}}>
                  {Object.keys(syllabus).map((key,value) => 
                      <div className='flexrow' style={{marginBottom:'20px'}}  key={key}>
                        <div className='flexcolumn' style={{marginLeft:'20px'}}>
                          <label htmlFor="class" className='section' style={sectionStyle}>Class</label>
                          <input type="text" id='class' className="shortbox" placeholder='- Select' onChange={(event)=>this.handleChange(event,key)} />
                        </div>
                        <div className='flexcolumn' style={{marginLeft:'20px'}}>
                          <label htmlFor="subject" className='section' style={sectionStyle}>Subject</label>
                          <input type="text" id='subject' className="shortbox"  placeholder='- Select' onChange={(event)=>this.handleChange(event,key)} />
                        </div>
                        <Dropzone onDrop={(files)=>this.onDrop(files,key)}>
                          {({getRootProps, getInputProps}) => (
                            <section className='flexrow' style={{marginLeft:50,paddingTop:30}}>
                              <div {...getRootProps({className: 'attachment'})}>
                                <input {...getInputProps()} />
                                  <BsPlus color="white" size={18} style={{marginRight:'15px',marginLeft:"6px",marginTop:"1px"}}/>
                                  <p>Upload document</p>  
                                </div>
                            </section>
                          )}
                        </Dropzone>
                        <BsFillFolderFill style={{marginTop:40,marginLeft:80}}/>
                      </div>
                  )}
                </div>
                <div className="flexrow" style={{marginTop:'15px'}} >
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
export default (Syllabus);



const sectionStyle = {
  fontSize: '15px',
};
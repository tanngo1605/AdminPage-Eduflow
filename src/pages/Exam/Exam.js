import React, { Component } from 'react';
import Drawer from '../../component/Drawer/Drawer'
import Header from '../../component/Header/Header'
import Dropzone from 'react-dropzone';
import DayPickerInput from "react-day-picker/DayPickerInput";
import { BsPlus } from "react-icons/bs";
import {marginBottom65vh,marginLeft13vw} from '../../styles/globalStyles'
class Exam extends Component {
  constructor (props) {
    super(props)
    this.state = {
      exam:{
        exam:'',
        class: '',
        section:'',
        datefrom:new Date(),
        dateto:new Date(),
        files:[],
        
      },
    }  
  }


  onDrop = (files) => {
    let update = Object.assign({},this.state.exam,{files:files})
    this.setState({exam:update})
  }

  handleChange = (event) => {
    let update = Object.assign({},this.state.exam,{[event.target.id]: event.target.value})
    this.setState({exame:update})
  }
  handleDayChange(day,typeofpicker) {
    let update= Object.assign({},this.state.exam,{[typeofpicker]: day})
    this.setState({exam: update});
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
              
                <h1 className='titleform'>Schedule an exam</h1>
                <div style={marginBottom65vh}>
                  <label htmlFor='exam' className='section'>Exam name</label>
                  <input type='text' id='exam' className='shortbox' style={marginLeft13vw} placeholder='Maths' onChange={this.handleChange} />
                </div>
                <div style={marginBottom65vh}>
                  <label htmlFor='class' className='section' >Class </label>
                  <input type='text' id='class' className='shortbox' style={marginLeft13vw} placeholder='Type here' onChange={this.handleChange} />
                </div>
                <div style={marginBottom65vh}>
                  <label htmlFor='section' className='section'>Section </label>
                  <input type='text' id='section' className='shortbox' style={marginLeft13vw} placeholder='Type here' onChange={this.handleChange} />
                </div>
                <div className='flexrow' style={marginBottom65vh}>
                  <div className='flexrow'>
                    <label htmlFor='datefrom' className='section'>Date from: </label>
                    <DayPickerInput className="shortbox" style={marginLeft13vw} onDayChange={(day) => this.handleDayChange(day,'datefrom')} placeholder="- select -"/>
                  </div>
                  <div className='flexrow' style={{marginLeft:'25vw'}}>
                    <label htmlFor='dateto' className='section'>Date to:</label>
                    <DayPickerInput className="shortbox" style={marginLeft13vw} onDayChange={(day) => this.handleDayChange(day,'dateto')} placeholder="- select -"/>
                  </div>
                </div>
                
                
                <div className='flexrow'>
                  <p className='section'>Attachment </p>
                  
                  <Dropzone onDrop={this.onDrop}>
                    {({getRootProps, getInputProps}) => (
                      <section className="flexrow" style={marginLeft13vw}>
                        <div {...getRootProps({ className:'attachment'})}>
                          <input {...getInputProps()} />
                            <BsPlus color="white" size={'1.5vw'} className='attachmentplusicon'/>
                            <p>Choose File</p>
                        </div>
                      </section>
                    )}
                  </Dropzone>
                  
                </div>

                <div className='flexrow' style={{marginLeft:'13.5vw',marginTop:'10vh'}}>
                  <input type='submit' value='Save' className='button'/>
                  <input type='reset' value='Reset' className='button'/>
                </div>
              
            </form>
            
          </div>
        
      </div>  
    </div>
    );
  }
}

export default (Exam);


import React, { Component } from 'react';
import Drawer from '../../component/Drawer/Drawer'
import Header from '../../component/Header/Header'
import Dropzone from 'react-dropzone';
import DayPickerInput from "react-day-picker/DayPickerInput";
import { BsPlus } from "react-icons/bs";
import { MdClose } from 'react-icons/md';

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
                <div style={{marginTop:'10vh',marginBottom:'2.5vh'}}>
                  <label htmlFor='exam' className='section'>Exam name</label>
                  <input type='text' id='exam' className='shortbox' placeholder='Maths' onChange={this.handleChange} />
                </div>
                <div style={{marginBottom:'2.5vh'}}>
                  <label htmlFor='class' className='section'>Class </label>
                  <input type='text' id='class' className='shortbox' placeholder='Type here' onChange={this.handleChange} />
                </div>
                <div style={{marginBottom:'2.5vh'}}>
                  <label htmlFor='section' className='section'>Section </label>
                  <input type='text' id='section' className='shortbox' placeholder='Type here' onChange={this.handleChange} />
                </div>
                <div className='flexrow' style={{marginBottom:'2.5vh'}}>
                  <div className='flexrow'>
                    <label htmlFor='datefrom' className='section'>Date from: </label>
                    <DayPickerInput className="shortbox" style={{width:'20vw',height:'4.5vh'}} onDayChange={(day) => this.handleDayChange(day,'datefrom')} placeholder="- select -"/>
                  </div>
                  <div className='flexrow' style={{marginLeft:'3vw'}}>
                    <label htmlFor='dateto' className='section'>Date to:</label>
                    <DayPickerInput className="shortbox" style={{width:'20vw',height:'4.5vh'}} onDayChange={(day) => this.handleDayChange(day,'dateto')} placeholder="- select -"/>
                  </div>
                </div>
                
                
                <div className='flexrow'>
                  <p className='section'>Attachment </p>
                  
                  <Dropzone onDrop={this.onDrop}>
                    {({getRootProps, getInputProps}) => (
                      <section className="flexrow">
                        <div {...getRootProps({ className:'attachment'})}>
                          <input {...getInputProps()} />
                            <BsPlus color="white" size={'1.5vw'} className='attachmentplusicon'/>
                            <p>Choose File</p>
                        </div>
                        
                        <div>
                        {this.state.exam.files.map((file)=>(
                          <div className='flexrow' style={{marginLeft:'1.5vw',marginTop:'0.8vh'}} key={file.name}>
                            <p> {file.name} </p>
                            <MdClose onClick={()=>this.removeItem(file)} style={{marginTop:'1vh'}}/>
                            
                          </div>
                        ))} 
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


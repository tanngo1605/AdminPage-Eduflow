import React, { Component } from 'react';
import Drawer from '../../component/Drawer/Drawer'
import Header from '../../component/Header/Header'
import Dropzone from 'react-dropzone';
import Modal from 'react-modal';
import { NavLink} from 'react-router-dom'
import DayPickerInput from "react-day-picker/DayPickerInput";
import { BsPencilSquare,BsPlus } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";
import {marginBottom65vh,marginLeft130vw} from '../../styles/marginStyles'
const exams=[
  {exam:'Math',class:'VI',section:'TR',datefrom:'20/20/20'}
]
class Exam extends Component {
  constructor (props) {
    super(props)
    this.state = {
      exam:{
        exam:'',
        class: '',
        section:'',
        datefrom:(new Date()).toLocaleDateString(),
        dateto:(new Date()).toLocaleDateString(),
        files:[],
        
      },
      openmodal:false,
      
    }  
  }

  componentDidMount() {
    Modal.setAppElement('body');
  }

  onDrop = (files) => {
    let update = Object.assign({},this.state.exam,{files:files})
    this.setState({exam:update})
  }

  handleChange = (event) => {
    let update = Object.assign({},this.state.exam,{[event.target.id]: event.target.value})
    this.setState({exam:update})
  }
  handleDayChange(day,typeofpicker) {
    let update= Object.assign({},this.state.exam,{[typeofpicker]: day.toLocaleDateString()})
    this.setState({exam: update});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    document.getElementById('create-course-form').reset();
    
    this.setState({openmodal:true})
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
                  <input type='text' id='exam' className='shortbox' style={marginLeft130vw} placeholder='Maths' onChange={this.handleChange} />
                </div>
                <div style={marginBottom65vh}>
                  <label htmlFor='class' className='section' >Class </label>
                  <input type='text' id='class' className='shortbox' style={marginLeft130vw} placeholder='Type here' onChange={this.handleChange} />
                </div>
                <div style={marginBottom65vh}>
                  <label htmlFor='section' className='section'>Section </label>
                  <input type='text' id='section' className='shortbox' style={marginLeft130vw} placeholder='Type here' onChange={this.handleChange} />
                </div>
                <div className='flexrow' style={marginBottom65vh}>
                  <div className='flexrow'>
                    <label htmlFor='datefrom' className='section'>Date from: </label>
                    <DayPickerInput className="shortbox" style={marginLeft130vw} onDayChange={(day) => this.handleDayChange(day,'datefrom')} placeholder="- select -"/>
                  </div>
                  <div className='flexrow' style={{marginLeft:'25vw'}}>
                    <label htmlFor='dateto' className='section'>Date to:</label>
                    <DayPickerInput className="shortbox" style={marginLeft130vw} onDayChange={(day) => this.handleDayChange(day,'dateto')} placeholder="- select -"/>
                  </div>
                </div>
                
                
                <div className='flexrow' style={marginBottom65vh}>
                  <p className='section'>Attachment </p>
                  
                  <Dropzone onDrop={this.onDrop}>
                    {({getRootProps, getInputProps}) => (
                      <section className="flexrow" style={marginLeft130vw}>
                        <div {...getRootProps({ className:'attachment'})}>
                          <input {...getInputProps()} />
                            <BsPlus color="white" size={'1.5vw'} className='attachmentplusicon'/>
                            <p>Choose File</p>
                        </div>
                      </section>
                    )}
                  </Dropzone>
                  
                </div>
                <div className='eventlistArea' style={{width:'70vw',height:'33vh',textAlign:'center'}}>
                  <div className='headereventList'>
                    <p style={{width:'15%'}}>Exam</p>
                    <p style={{width:'20%'}}>Class</p>
                    <p style={{width:'20%'}}>Section</p>
                    <p style={{width:'20%'}}>Date</p>
                    <p style={{width:'10%'}}>Delete</p>
                    <p style={{width:'10%'}}>Edit</p>
                  </div>

                  <div className="flexcolumn">
                      {exams&&exams.map((exam,index)=>

                        <div  className="bodyeventList"  key={index} >
                          
                          <p style={{width:'15%'}}>{exam.exam}</p>
                          <p style={{width:'20%'}}>{exam.class}</p>
                          <p style={{width:'20%'}}>{exam.section}</p>
                          <p style={{width:'20%'}}>{exam.datefrom}</p>
                          <div className='itemcenter' style={{width:"10%"}}>
                            <MdDeleteForever size='1.5vw' onClick={()=>this.props.dispatch()}/>
                          </div>
                          <div className='itemcenter' style={{width:"10%",marginTop:'0.1vh'}}>
                            <NavLink exact to={{pathname:'/teacher/profile',examinfo:exam}}>
                              <BsPencilSquare size='1.3vw' color='black' />
                            </NavLink>
                          </div>
                        </div>
                      )}
                    
                  </div>
                </div>
                <div className='flexrow' style={{marginLeft:'13.5vw',marginTop:'3vh'}}>
                  <input type='submit' value='Save' className='button'/>
                  <input type='reset' value='Reset' className='button'/>
                </div>
              
            </form>
            <Modal isOpen={this.state.openmodal} className='exammodal' onRequestClose={()=>this.setState({openmodal:false})} > 
              <div className='headermodal'>Send a message to teachers for exam duty</div>
            
              <div className='flexrow' style={{marginTop:'3vh'}}>
                <button className='gallerybutton' onClick={()=>console.log('send')} style={Object.assign({},{marginLeft:'8vw',background: '#262F56'})} >Send</button>
                <button className='gallerybutton' onClick={()=>this.setState({openmodal:false})} style={Object.assign({},{marginLeft:'20vw',background: '#262F56'})} >Not now</button>
              </div>  
          
                    
                    
            </Modal>
          </div>
        
      </div>  
    </div>
    );
  }
}

export default (Exam);


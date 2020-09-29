import React, { Component } from 'react';
import Modal from 'react-modal';

import { connect } from 'react-redux'
import {getCurrentUser} from '../../redux/Stores/AccountReducer';
import {addSchoolEvent} from "../../redux/Action/EventAction";
import Drawer from '../../component/Drawer/Drawer'
import Header from '../../component/Header/Header'
import Dropzone from 'react-dropzone';
import DayPickerInput from "react-day-picker/DayPickerInput";
import { BsPlus } from "react-icons/bs";
import { MdClose } from 'react-icons/md';
import {marginLeft130vw,marginLeft250vw,marginLeft380vw,marginBottom65vh, marginTop120vh} from '../../styles/marginStyles'
class createEvent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      eventInput:{
        title:'',
        datefrom:new Date(),
        dateto:new Date(),
        startTime:'',
        endTime:'',        
        attachment:[],  
        description:'',
        classvalue:'',
        key:Math.random().toString()
      },
      openmodal:false
    }  
  }

  componentDidMount() {
    Modal.setAppElement('body');
    
    this.props.dispatch(getCurrentUser())

    
  }

  onDrop = (files) => {
    console.log(files);
    let update = Object.assign({},this.state.eventInput,{attachment: files})
    this.setState({eventInput:update})
  }

  handleChange = (event) => {
    let update = Object.assign({},this.state.eventInput,{[event.target.id]: event.target.value})
    this.setState({eventInput:update})
  }
  handleDayChange(day,typeofpicker) {
    let update= Object.assign({},this.state.eventInput,{[typeofpicker]: day})
    this.setState({eventInput: update});
  }

  handleSubmit =  (event) => {
    event.preventDefault();
    document.getElementById('create-course-form').reset();
    
    const userData = this.props.account.userData;

    addSchoolEvent(userData.data.id,this.state.eventInput)
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
              
                <h1 className='titleform'>Create an event for your class</h1>
                <div style={marginBottom65vh}>
                  <label htmlFor='classvalue' className='section'>Class</label>
                  <input type='text' id='classvalue' className='shortbox' style={marginLeft130vw} placeholder='Maths' onChange={this.handleChange} />
                </div>
                <div className='flexrow' style={marginBottom65vh}>
                  <div className='flexrow'>
                    <label htmlFor='datefrom' className='section'>Date from: </label>
                    <DayPickerInput className="shortbox" style={marginLeft130vw} onDayChange={(day) => this.handleDayChange(day,'datefrom')} placeholder="- select -"/>
                  </div>
                  <div className='flexrow' style={marginLeft250vw}>
                    <label htmlFor='dateto' className='section'>Date to:</label>
                    <DayPickerInput className="shortbox" style={marginLeft130vw} onDayChange={(day) => this.handleDayChange(day,'dateto')} placeholder="- select -"/>
                  </div>
                </div>
                <div className='flexrow' style={marginBottom65vh}>
                  <div>
                    <label htmlFor='startTime' className='section'>Time from: </label>
                    <input type='time' id='startTime' className='shortbox' style={marginLeft130vw}  onChange={this.handleChange} />
                  </div>
                  <div className='flexrow' style={marginLeft380vw}>
                    <label htmlFor='endTime' className='section'>Time To: </label>
                    <input type='time' id='endTime' className='shortbox' style={marginLeft130vw} onChange={this.handleChange} />
                  </div>
                </div>
                <div className='flexrow' style={marginBottom65vh}>
                  <label htmlFor='title' className='section'>Event title </label>
                  <input type='text' id='title' className='shortbox' style={marginLeft130vw} placeholder='Type here' onChange={this.handleChange} />
                </div>
                <div className='flexrow'>
                  <label htmlFor='description' className='section'>Description </label>
                  <textarea type='text' id='description' className='shortbox' style={Object.assign({},{height:'10vh',width:'58vw'},marginLeft130vw)} placeholder='Type here' onChange={this.handleChange}></textarea>
                </div>
                <div className='flexrow' style={Object.assign({},marginBottom65vh,marginTop120vh)}>
                  <p className='section'>Attachment </p>
                  
                  <Dropzone onDrop={this.onDrop}>
                    {({getRootProps, getInputProps}) => (
                      <section className="flexrow" style={marginLeft130vw}>
                        <div {...getRootProps({ className:'attachment'})}>
                          <input {...getInputProps()} />
                            <BsPlus color="white" size={'1.5vw'} className='attachmentplusicon'/>
                            <p>Choose File</p>
                        </div>
                        
                        <div>
                        {this.state.eventInput.attachment.map((file)=>(
                          <div className='flexrow'  style={{marginLeft:'1.5vw',marginTop:'0.8vh'}} key={file.name}>
                            <p> {file.name} </p>
                            <MdClose onClick={()=>this.removeItem(file)} style={{marginTop:'1vh'}}/>
                            
                          </div>
                        ))} 
                        </div>
                      </section>
                    )}
                  </Dropzone>
                  
                </div>

                <div className='flexrow' style={{marginLeft:'15vw',marginTop:'2vh'}}>
                  <input type='submit' value='Create' className='button'/>
                  <input type='reset' value='Reset' className='button'/>
                  <button className='button' onClick={()=>this.props.history.push('/')} style={{color:'#FFFFFF'}}> Cancel</button>
                </div>
              
            </form>
            <Modal isOpen={this.state.openmodal} onRequestClose={()=>this.setState({openmodal:false})} className='Modal'> 
                <div className='headermodal' style={{textAlign:'center',color:'#262F56',fontWeight:'bold'}}>Events</div>
                <p style={{marginTop:'15%',textAlign:'center'}}>Event saved successfully</p>
                <button className='button' onClick={()=>this.props.history.push('/event')} style={{marginTop:'5%',marginLeft:'29%'}}> Ok</button>
     
            </Modal>
          </div>
        
      </div>  
    </div>
    );
  }
}
const mapStateToProps = (state) => ({
  account:state.account,
})

export default connect(mapStateToProps)(createEvent);


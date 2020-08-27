import React, { Component } from 'react';
import Modal from 'react-modal';

import { connect } from 'react-redux'
import {loadData,addEvent} from '../../redux/Stores/EventReducer';
import Drawer from '../../component/Drawer/Drawer'
import Header from '../../component/Header/Header'
import Dropzone from 'react-dropzone';
import DayPickerInput from "react-day-picker/DayPickerInput";
import { BsPlus } from "react-icons/bs";
import { MdClose } from 'react-icons/md';
import {marginLeft13vw,marginLeft25vw,marginLeft38vw,marginBottom65vh, marginTop12vh} from '../../styles/globalStyles'
class createEvent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      event:{
        class: '',
        datefrom:new Date(),
        dateto:new Date(),
        timefrom:'',
        timeto:'',
        eventtitle:'',
        files:[],  
        description:'',
        key:Math.random().toString()
      },
      openmodal:false
    }  
  }

  componentDidMount() {
    Modal.setAppElement('body');
    this.props.dispatch(loadData());
  }

  onDrop = (files) => {
    console.log(files);
    let update = Object.assign({},this.state.event,{files: files})
    this.setState({event:update})
  }

  handleChange = (event) => {
    let update = Object.assign({},this.state.event,{[event.target.id]: event.target.value})
    this.setState({event:update})
  }
  handleDayChange(day,typeofpicker) {
    let update= Object.assign({},this.state.event,{[typeofpicker]: day})
    this.setState({event: update});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    document.getElementById('create-course-form').reset();
    this.setState({openmodal:true})
    setTimeout(()=>{ this.props.dispatch(addEvent({value: this.state.event})) },50)
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
                  <label htmlFor='class' className='section'>Class</label>
                  <input type='text' id='class' className='shortbox' style={marginLeft13vw} placeholder='Maths' onChange={this.handleChange} />
                </div>
                <div className='flexrow' style={marginBottom65vh}>
                  <div className='flexrow'>
                    <label htmlFor='datefrom' className='section'>Date from: </label>
                    <DayPickerInput className="shortbox" style={marginLeft13vw} onDayChange={(day) => this.handleDayChange(day,'datefrom')} placeholder="- select -"/>
                  </div>
                  <div className='flexrow' style={marginLeft25vw}>
                    <label htmlFor='dateto' className='section'>Date to:</label>
                    <DayPickerInput className="shortbox" style={marginLeft13vw} onDayChange={(day) => this.handleDayChange(day,'dateto')} placeholder="- select -"/>
                  </div>
                </div>
                <div className='flexrow' style={marginBottom65vh}>
                  <div>
                    <label htmlFor='timefrom' className='section'>Time from: </label>
                    <input type='time' id='timefrom' className='shortbox' style={marginLeft13vw}  onChange={this.handleChange} />
                  </div>
                  <div className='flexrow' style={marginLeft38vw}>
                    <label htmlFor='timeto' className='section'>Time To: </label>
                    <input type='time' id='timeto' className='shortbox' style={marginLeft13vw} onChange={this.handleChange} />
                  </div>
                </div>
                <div className='flexrow' style={marginBottom65vh}>
                  <label htmlFor='eventtitle' className='section'>Event title </label>
                  <input type='text' id='eventtitle' className='shortbox' style={marginLeft13vw} placeholder='Type here' onChange={this.handleChange} />
                </div>
                <div className='flexrow'>
                  <label htmlFor='description' className='section'>Description </label>
                  <textarea type='text' id='description' className='shortbox' style={Object.assign({},{height:'10vh',width:'58vw'},marginLeft13vw)} placeholder='Type here' onChange={this.handleChange}></textarea>
                </div>
                <div className='flexrow' style={Object.assign({},marginBottom65vh,marginTop12vh)}>
                  <p className='section'>Attachment </p>
                  
                  <Dropzone onDrop={this.onDrop}>
                    {({getRootProps, getInputProps}) => (
                      <section className="flexrow" style={marginLeft13vw}>
                        <div {...getRootProps({ className:'attachment'})}>
                          <input {...getInputProps()} />
                            <BsPlus color="white" size={'1.5vw'} className='attachmentplusicon'/>
                            <p>Choose File</p>
                        </div>
                        
                        <div>
                        {this.state.event.files.map((file)=>(
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
  event: state.event
})
export default connect(mapStateToProps)(createEvent);


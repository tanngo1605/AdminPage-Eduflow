import React, { Component } from 'react';
import Drawer from '../../component/Drawer/Drawer'
import Header from '../../component/Header/HeaderAdmin'
import {Scrollbars} from 'react-custom-scrollbars';
import DayPickerInput from "react-day-picker/DayPickerInput";
import {marginBottom100vh,marginBottom65vh,marginLeft130vw} from '../../styles/marginStyles'

import {image100vw} from '../../styles/imageStyles'

let numberofperiod=5;
const subjects = [
  {subject:'Math',value:'math'},
  {subject:'History',value:'history'},
  {subject:'Math',value:'math'},

]

class Exam extends Component {
  constructor (props) {
    super(props)
    this.state = {
      exam:{
        exam:'',
        date: '',
        '1shifttiming':'',
        '2shifttiming':'',
        task:{},
        
      },
      trigger:false,
    }  
  }

  displayPeriod=()=>{
    let period=[];
    
    for (let i = 1;i<=numberofperiod;i++) 
      period.push(
        <div className='flexcolumn' key={i} style={marginBottom65vh}>
          <div className='flexrow'>  
            <p className='section' style={{width:'15%'}}>{i}</p>
            <input type='text' id='room' className='shortbox' style={{marginLeft:'20%',width:'8vw'}}  onChange={(event) => this.handleChange(event,i.toString())} />
            <select className="shortbox" required id='teacher' style={{marginLeft:'40%',width:'8vw'}} onChange={(event) => this.handleChange(event,i.toString())}>
              <option disabled value="" defaultValue>{" "}- select -</option>
              {subjects.map((subject,index)=><option key={index} value={subject.value}>{subject.subject}</option>)}
              
            </select>

            <select className="shortbox" required id='teacher' style={{marginLeft:'60%',width:'8vw'}} onChange={(event) => this.handleChange(event,i.toString())}>
              <option disabled value="" defaultValue>{" "}- select -</option>
              {subjects.map((subject,index)=><option key={index} value={subject.value}>{subject.subject}</option>)}
              
            </select>
            <select className="shortbox" required id='teacher' style={{marginLeft:'80%',width:'8vw'}} onChange={(event) => this.handleChange(event,i.toString())}>
              <option disabled value="" defaultValue>{" "}- select -</option>
              {subjects.map((subject,index)=><option key={index} value={subject.value}>{subject.subject}</option>)}
              
            </select>
            
        </div>
      </div>)

    return (
      <div className="bodyeventList" style={{height:'23vh'}}>
          <Scrollbars>
            {period}
          </Scrollbars>
      </div>
    )
  }
  handleChange = (event,key) => {
    let update;
    if (key){
      update= {...this.state.exam.task,[key]:{...this.state.exam.task[key],[event.target.id]: event.target.value}}
      this.setState({exam:{...this.state.exam,task:update}})
    }
    else {
      update= {...this.state.exam,[event.target.id]: event.target.value}
      this.setState({exam:update})
    }
    console.log(this.state)
  }
  
  handleDayChange(day) {
    let update= Object.assign({},this.state.exam,{date: day})
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
                  <input type='text' id='exam' className='shortbox' style={marginLeft130vw} placeholder='Maths' onChange={this.handleChange} />
                </div>
                <div className='flexrow' style={marginBottom65vh}>
                  <label htmlFor='date' className='section'>Choose Date: </label>
                  <DayPickerInput className="shortbox" style={marginLeft130vw} onDayChange={(day) => this.handleDayChange(day)} placeholder="- select -"/>
                </div>
                <div className='flexrow' style={marginBottom100vh}>
                  <div className='flexrow'>
                    <label htmlFor='1shifttiming' className='section'>1 Shift Timing: </label>
                    <input type='time' id='1shifttiming' className='shortbox' style={Object.assign({},marginLeft130vw,image100vw)}  onChange={this.handleChange} />
                  </div>
                  <div className='flexrow' style={{marginLeft:'30vw'}}>
                    <label htmlFor='2shifttiming' className='section'>2 Shift Timing: </label>
                    <input type='time' id='2shifttiming' className='shortbox' style={Object.assign({},marginLeft130vw,image100vw)}  onChange={this.handleChange} />
                  </div>
                </div>
                <div className='eventlistArea' style={{width:'70vw',height:'32.5vh',textAlign:'center'}}>
                  <div className='headereventList'>
                    <p style={{width:'15%'}}>Serial No</p>
                    <p style={{width:'20%'}}>Room No</p>
                    <p style={{width:'20%'}}>Shift</p>
                    <p style={{width:'20%'}}>Teacher 1</p>
                    <p style={{width:'20%'}}>Teacher 2</p>
                    
                  </div>
                  {this.displayPeriod()}
                </div>
                <button 
                  className='buttonshownothing'
                  onClick={()=>{ numberofperiod=numberofperiod+1; this.setState({trigger:!this.state.trigger})}} 
                  style={{color: '#0F1E36',fontSize:'1vw',marginTop:'1vh'}}> + Add More </button>   
                <div className='flexrow' style={{marginLeft:'13.5vw',marginTop:'3vh'}}>
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


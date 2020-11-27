import React, { Component } from 'react';
import { connect } from "react-redux"
import {getCurrentUser} from "../../../redux/Stores/AccountReducer";
import {getSubject} from "../../../redux/Action/SchoolAction";
import Drawer from '../../../component/Drawer/Drawer'
import Header from '../../../component/Header/HeaderAdmin'
import {Scrollbars} from 'react-custom-scrollbars';
import DayPickerInput from "react-day-picker/DayPickerInput";
import {marginBottom20vh, marginLeft20vw} from '../../../styles/marginStyles'
import {image200percent,image150percent} from '../../../styles/imageStyles'
let numberofperiod=5;

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
      subject:[],
      trigger:false,
    }  
  }
  async componentDidMount(){
      this.props.dispatch(getCurrentUser())
      try {
        const userData = this.props.account.userData.userdata.data.data;
        const subjectData = await getSubject(userData.school.uuid)
        
        this.setState({subject:subjectData})
      }
      catch(err){
        console.log(err)
      }
  }
  displayPeriod=()=>{
    let period=[];
    
    for (let i = 1;i<=numberofperiod;i++) 
      period.push(
        <div className='flexrow' key={i} style={marginBottom20vh}>
          
            <p className='section' style={{marginLeft:'5vw'}}>{i}</p>
            <input type='text' id='room' className='shortbox' style={{width:'8vw',marginLeft:'-3vw'}}  onChange={(event) => this.handleChange(event,i.toString())} />
            <select className="shortbox" required id='teacher' style={{width:'8vw',marginLeft:'7vw'}} onChange={(event) => this.handleChange(event,i.toString())}>
              <option disabled value="" defaultValue>{" "}- select -</option>
              {this.state.subject && this.state.subject.map((subject,index)=><option key={index} value={subject.name}>{subject.name}</option>)}
              
            </select>

            <select className="shortbox" required id='teacher' style={{width:'8vw',marginLeft:'6vw'}} onChange={(event) => this.handleChange(event,i.toString())}>
              <option disabled value="" defaultValue>{" "}- select -</option>
              {this.state.subject && this.state.subject.map((subject,index)=><option key={index} value={subject.name}>{subject.name}</option>)}
              
            </select>
            <select className="shortbox" required id='teacher' style={{width:'8vw',marginLeft:'6vw'}} onChange={(event) => this.handleChange(event,i.toString())}>
              <option disabled value="" defaultValue>{" "}- select -</option>
              {this.state.subject && this.state.subject.map((subject,index)=><option key={index} value={subject.name}>{subject.name}</option>)}
              
            </select>
      </div>)

    return (
      <div className="bodytableList" style={{height:'23vh'}}>
          <Scrollbars>
            {period}
          </Scrollbars>
      </div>
    )
  }
  

  handleSubmit = (event) => {
  }

  render() {
    
    return (

      <div className='dashboard'>
        <div className='flexrow'>
        
          <Drawer/>
          <div className='flexcolumn'>
            <Header {...this.props}/>
            <form className='form' onSubmit={this.handleSubmit} id='create-course-form'>
              
                <h1 className='titleform'>Schedule an exam</h1>
                <div className='flexrow' style={marginBottom20vh}>
                  <label htmlFor='exam' className='section'>Exam name</label>
                  <input type='text' id='exam' className='shortbox' style={marginLeft20vw} placeholder='Maths' onChange={this.handleChange} />
                </div>
                <div className='flexrow' style={marginBottom20vh}>
                  <label htmlFor='date' className='section'>Choose Date: </label>
                  <DayPickerInput className="shortbox" style={marginLeft20vw} onDayChange={(day) => this.handleDayChange(day)} placeholder="- select -"/>
                </div>
                <div className='flexrow' style={marginBottom20vh}>
                  <label htmlFor='1shifttiming' className='section'>1 Shift Timing: </label>
                  <input type='time' id='1shifttiming' className='shortbox' style={marginLeft20vw}  onChange={this.handleChange} />
                  <label htmlFor='2shifttiming' className='section' style={marginLeft20vw}>2 Shift Timing: </label>
                  <input type='time' id='2shifttiming' className='shortbox' style={marginLeft20vw}  onChange={this.handleChange} />
                  
                </div>
                <div className='tablelistArea' style={{width:'70vw',height:'32.5vh'}}>
                  <div className='headertableList'>
                    <p style={image150percent}>Serial No</p>
                    <p style={image200percent}>Room No</p>
                    <p style={image200percent}>Shift</p>
                    <p style={image200percent}>Teacher 1</p>
                    <p style={image200percent}>Teacher 2</p>
                    
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

const mapStateToProps = (state) => ({
  account:state.account,
})

export default connect(mapStateToProps)(Exam);


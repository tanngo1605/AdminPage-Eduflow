import React, { Component } from 'react';
import {connect} from 'react-redux';
import Drawer from '../../component/Drawer/Drawer'
import Header from '../../component/Header/Header'
import {loadTeacherData} from "../../redux/Stores/TeacherReducer";
import {loadAttendance,loadSpecificAttendance,modifyAttendance} from "../../redux/Stores/AttendanceReducer";
import DayPickerInput from "react-day-picker/DayPickerInput";
import {
  marginTop45vh,
  marginLeft55vw,
} from '../../styles/marginStyles'

class SearchAttendance extends Component {
  constructor (props) {
    super(props)
    this.state = {
      date:this.props.location.date,
      name:'',
      trigger:true
    }
  }
  componentDidMount() {
    this.props.dispatch(loadTeacherData());
    this.props.dispatch(loadAttendance());
    this.props.dispatch(
        loadSpecificAttendance({ date: this.state.date })
      );
}


  handleDayChange(day) {

    this.setState({ date: day });
    this.props.dispatch(loadSpecificAttendance({ date: day }));
    document.getElementById('create-course-form').reset();
    
  }
  handleChange = (event) => {
    this.setState({[event.target.id]: event.target.value })
  }

  searchResult=(event,attendances)=>{
    event.preventDefault();
    
    
    this.setState({trigger:!this.state.trigger})
  }
  

  render() {
    let attendances = this.props.attendance.filteredAttendance;
    let originalteacherdata = this.props.teacher.teachers;
    
    return (
      <div className='dashboard'>
        <div className='flexrow'>
          <Drawer/>
          <div className='flexcolumn'>
            <Header/>
            <div className='form'>
              
                <h1 className='titleform'>Teacher's Attendance</h1>
                <h1 className='subtitleform'>Edit  Attendance</h1>
                <form className='flexcolumn' onChange={(event)=>this.searchResult(event,attendances)} id='create-course-form' style={marginTop45vh}>

                    <div className='flexrow'>
                        <p className='section' style={marginLeft55vw}>Date</p>
                        <DayPickerInput className="shortbox" style={{marginLeft:'11vw'}} placeholder={this.state.date?`${this.state.date.toLocaleDateString()}`:'Choosing date'} onDayChange={(day) => this.handleDayChange(day)}/>
                        <p className='section' style={{marginLeft:'34vw'}}>Teacher's Name</p>
                        <select className="shortbox" required id='name' style={{marginLeft:'45vw'}} onChange={(event) => this.handleChange(event,originalteacherdata)}>
                            <option value="" defaultValue>{" "}-select-</option>
                            {originalteacherdata&&originalteacherdata.map((teacher,index)=><option key={index} value={teacher.value}>{teacher.name}</option>)}
                        </select>
                    </div>
                    
                    
                
                  
                </form>
                
                <div className='eventlistArea' style={{width:'70vw',textAlign:'center',height:'40vh',marginTop:'8vh'}}>
                  <div className='headereventList'>
                    
                    <p style={{width:'33%'}}>Date</p>
                    <p style={{width:'33%'}}>Teacher</p>
                    <p style={{width:'33%'}}>Attendance</p>
                    
                  </div>

                  <div className="bodyeventList" style={{height:'30vh'}}>
                  {
                    (this.state.date)?
                        (
                            attendances&& attendances[0] && Object.keys(attendances[0]).slice(1).map((key,index) =>
                                <div className='flexrow'  key={index} >
                                
                                <p style={{width:'33%'}}>{attendances[0]['date'].toLocaleDateString()}</p>
                                <p style={{width:'33%'}}>{key}</p>
                                <p style={{width:'33%'}}>
                                    {attendances[0][key]?
                                        <button className='switchbox' style={{backgroundColor:'#27AE60'}} onClick={()=>{attendances[0][key]=false;this.setState({trigger:false})}}></button>
                                        :
                                        <button className='switchbox' style={{backgroundColor:'#FFFFFF'}} onClick={()=>{attendances[0][key]=true;this.setState({trigger:true})}}></button>
                                    }
                                </p>
                      
                                </div>
                                )
                        ) : null
                }
                    
                    
                  </div>
                  <button 
                    className='button' 
                    style={{marginTop:'3vh'}} 
                    onClick={()=>{
                        this.props.dispatch(modifyAttendance({ date: this.state.date }));
                        this.props.history.push('/searchattendance');
                    }}
                    >Save</button>
                </div>
                
      
              
            </div>
          </div>
        
        </div>  
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    teacher: state.teacher,
    attendance:state.attendance,
  })
  
export default connect(mapStateToProps)(SearchAttendance);


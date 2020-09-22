import React, { Component } from 'react';
import {connect} from 'react-redux';
import Drawer from '../../component/Drawer/Drawer'
import Header from '../../component/Header/Header'
import {loadTeacherData} from "../../redux/Stores/TeacherReducer";
import {loadAttendance,loadSpecificAttendance} from "../../redux/Stores/AttendanceReducer";
import DayPickerInput from "react-day-picker/DayPickerInput";
import {
  marginTop45vh,
  marginLeft55vw,
  marginBottom100vh
} from '../../styles/marginStyles'

class SearchAttendance extends Component {
  constructor (props) {
    super(props)
    this.state = {
      date:this.props.location.date,
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
    let update = Object.assign({}, this.state.ticket, { date: day });
    
    this.setState({ searchteacherattendance: update });
    
  }
  handleChange = (event) => {
    let updatesearch= Object.assign({},this.state.teachersearchinput,{[event.target.id]: event.target.value})
        
    this.setState({ teachersearchinput: updatesearch })
  }
  searchResult=(event)=>{
    event.preventDefault();
    console.log('run')
  }
  

  render() {
    let teachers = this.props.teacher.filteredTeachers;
    let attendances = this.props.attendance.filteredAttendance;
    return (
      <div className='dashboard'>
        <div className='flexrow'>
          <Drawer/>
          <div className='flexcolumn'>
            <Header/>
            <div className='form'>
              
                <h1 className='titleform'>Teacher's Attendance</h1>
                <h1 className='subtitleform'>Edit  Attendance</h1>
                <form className='flexcolumn' onChange={this.searchResult} style={marginTop45vh}>
                  <div className='flexrow' style={marginBottom100vh}>
                    
                    <p className='section' style={marginLeft55vw}>Date From </p>
                    <DayPickerInput className="shortbox" style={{marginLeft:'15vw'}} onDayChange={(day) => this.handleDayChange(day)}/>
                    <p className='section' style={{marginLeft:'38vw'}}>Date To </p>
                    <DayPickerInput className="shortbox" style={{marginLeft:'33vw'}} onDayChange={(day) => this.handleDayChange(day)}/>
                    
                  </div>
                  <div className='flexrow'>
                    <p className='section' style={marginLeft55vw}>Teacher's Name</p>
                        <select className="shortbox" required id='subject' style={{marginLeft:'15vw'}} onChange={(event) => this.handleChange(event)}>
                            <option value="" defaultValue>{" "}-select-</option>
                            {teachers&&teachers.map((teacher,index)=><option key={index} value={teacher.value}>{teacher.name}</option>)}
                        </select>
                  </div>
                  
                </form>
                
                <div className='eventlistArea' style={{width:'70vw',textAlign:'center',height:'40vh',marginTop:'8vh'}}>
                  <div className='headereventList'>
                    
                    <p style={{width:'50%'}}>Date</p>
                    <p style={{width:'50%'}}>Attendance</p>
                    
                  </div>

                  <div className="bodyeventList" style={{height:'30vh'}}>
                    {
                        (this.state.date)?
                            (
                                attendances&&attendances.map((attendance,index)=>{
                                    Object.keys(attendance).map((key) => 
                                    <div className='flexrow'  key={index} >
                                        
                                        <p style={{width:'50%'}}>{attendance.date.toLocaleDateString()}</p>
                                        <p style={{width:'50%'}}>{}</p>
                                  
                                    </div>
                                )}
                              )
                            ):
                        null
                    }
                    
                  </div>
                  <button className='button' style={{marginTop:'3vh'}} onClick={()=>this.submitTodayAttendance(teachers)}>Save</button>
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


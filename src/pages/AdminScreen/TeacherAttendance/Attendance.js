import React, { Component } from 'react';
import {connect} from 'react-redux';
import { NavLink} from 'react-router-dom'
import Drawer from '../../../component/Drawer/Drawer'
import Header from '../../../component/Header/HeaderAdmin'
import {loadTeacherData,filterTeacherData} from "../../../redux/Stores/TeacherReducer";
import {loadAttendance,addAttendance} from "../../../redux/Stores/AttendanceReducer";
import { BsPlus } from "react-icons/bs";
import {addaProfileAttachment, marginTop20vh, marginLeft60vw} from '../../../styles/marginStyles'
import {image300percent,image200percent} from "../../../styles/imageStyles";
let currentdate = new Date();
class Attendance extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name:'',
      trigger:false,
      }
  }
  componentDidMount=()=> {
    this.props.dispatch(loadTeacherData());
    this.props.dispatch(loadAttendance());
}


 
  handleChange = (event) => {
    this.setState({[event.target.id]: event.target.value })
  }
  searchResult=(event)=>{
    event.preventDefault();
    setTimeout(()=>{ this.props.dispatch(filterTeacherData({value:this.state})) },50)
    
  }

  submitTodayAttendance=(teachers)=>{
    let attendancearray={date:currentdate};
    teachers.map((teacher)=>{
        attendancearray[teacher.value]=teacher.attendance
    })
    
    this.props.dispatch(addAttendance({value:attendancearray}))
    this.props.history.push('/searchattendance');
  }
  

  render() {
    let originalteacherdata = this.props.teacher.teachers;
    let teachers = this.props.teacher.filteredTeachers;
    
    return (
      <div className='dashboard'>
        <div className='flexrow'>
          <Drawer/>
          <div className='flexcolumn'>
            <Header/>
            <div className='form'>
              
                <h1 className='titleform'>Teacher's Attendance</h1>
                <h1 className='subtitleform'>Today Attendance</h1>
                <NavLink exact to={{pathname:'/teacher/profile'}} className='attachment' style={addaProfileAttachment}>
                    <BsPlus color="white" size={'1.5vw'} className='attachmentplusicon'/>
                    <p style={{color:'#FFFFFF'}}> Find Attendance </p>
                </NavLink>
                <form className='flexrow' onChange={this.searchResult} style={marginTop20vh}>
                  
                    
                  <p className='section'>Date</p>
                  <p className="shortbox"> {currentdate.toLocaleDateString()}</p>
                  <p className='section' style={marginLeft60vw}>Teacher's Name</p>
                    <select className="shortbox" required id='name' onChange={(event) => this.handleChange(event)}>
                        <option value="" defaultValue>{" "}-select-</option>
                        {originalteacherdata&&originalteacherdata.map((teacher,index)=><option key={index} value={teacher.value}>{teacher.name}</option>)}
                    </select>
                </form>
                
                <div className='tablelistArea' style={{width:'70vw',height:'40vh',marginTop:'2vh'}}>
                  <div className='headertableList'>
                    <p style={image200percent}>No</p>
                    <p style={image300percent}>Teacher's Name</p>
                    <p style={image300percent}>Date</p>
                    <p style={image200percent}>Attendance</p>
                    
                  </div>

                  <div className="bodytableList" style={{height:'30vh'}}>
                      {teachers&&teachers.map((teacher,index)=>

                        <div className='flexrow'  key={index} >
                          
                          <p style={image200percent}>{index}</p>
                          <p style={image300percent}>{teacher.name}</p>
                          <p style={image300percent}>{currentdate.toLocaleDateString()}</p>
                          <div style={image200percent}>
                            {teacher.attendance?
                                <button className='switchbox' style={{backgroundColor:'#27AE60'}} onClick={()=>{teacher.attendance=false;this.setState({trigger:false})}}></button>
                                :
                                <button className='switchbox' style={{backgroundColor:'#FFFFFF'}} onClick={()=>{teacher.attendance=true;this.setState({trigger:true})}}></button>
                            }
                          </div>
                        </div>
                      )}
                    
                  </div>
                  <button className='button' style={{marginTop:'3vh',marginLeft:'15vw'}} onClick={()=>this.submitTodayAttendance(teachers)}>Save</button>
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
    attendance:state.attendance
  })
  
  export default connect(mapStateToProps)(Attendance);


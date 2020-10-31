import React, { Component } from 'react';
import {connect} from 'react-redux';
import { NavLink} from 'react-router-dom'
import Drawer from '../../component/Drawer/Drawer'
import Header from '../../component/Header/HeaderAdmin'
import {loadTeacherData,filterTeacherData} from "../../redux/Stores/TeacherReducer";
import {loadAttendance,addAttendance} from "../../redux/Stores/AttendanceReducer";
import { BsPlus } from "react-icons/bs";
import {marginTop45vh,marginLeft55vw,addaProfileAttachment} from '../../styles/marginStyles'

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
                <form className='flexrow' onChange={this.searchResult} style={marginTop45vh}>
                  
                    
                  <p className='section' style={marginLeft55vw}>Date</p>
                  <p className="shortbox" style={{marginLeft:'11vw'}}> {currentdate.toLocaleDateString()}</p>
                    
                  
                  <p className='section' style={{marginLeft:'34vw'}}>Teacher's Name</p>
                    <select className="shortbox" required id='name' style={{marginLeft:'45vw'}} onChange={(event) => this.handleChange(event)}>
                        <option value="" defaultValue>{" "}-select-</option>
                        {originalteacherdata&&originalteacherdata.map((teacher,index)=><option key={index} value={teacher.value}>{teacher.name}</option>)}
                    </select>
                </form>
                
                <div className='eventlistArea' style={{width:'70vw',textAlign:'center',height:'40vh',marginTop:'10vh'}}>
                  <div className='headereventList'>
                    <p style={{width:'20%'}}>No</p>
                    <p style={{width:'30%'}}>Teacher's Name</p>
                    <p style={{width:'30%'}}>Date</p>
                    <p style={{width:'20%'}}>Attendance</p>
                    
                  </div>

                  <div className="bodyeventList" style={{height:'30vh'}}>
                      {teachers&&teachers.map((teacher,index)=>

                        <div className='flexrow'  key={index} >
                          
                          <p style={{width:'20%'}}>{index}</p>
                          <p style={{width:'30%'}}>{teacher.name}</p>
                          <p style={{width:'30%'}}>{currentdate.toLocaleDateString()}</p>
                          <div style={{width:'20%'}}>
                            {teacher.attendance?
                                <button className='switchbox' style={{backgroundColor:'#27AE60'}} onClick={()=>{teacher.attendance=false;this.setState({trigger:false})}}></button>
                                :
                                <button className='switchbox' style={{backgroundColor:'#FFFFFF'}} onClick={()=>{teacher.attendance=true;this.setState({trigger:true})}}></button>
                            }
                          </div>
                        </div>
                      )}
                    
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
    attendance:state.attendance
  })
  
  export default connect(mapStateToProps)(Attendance);


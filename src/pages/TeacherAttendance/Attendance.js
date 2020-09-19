import React, { Component } from 'react';
import {connect} from 'react-redux';
import Dropzone from 'react-dropzone'
import { NavLink} from 'react-router-dom'
import Drawer from '../../component/Drawer/Drawer'
import Header from '../../component/Header/Header'
import {loadTeacherData} from "../../redux/Stores/TeacherReducer";
import { BsPencilSquare,BsPlus } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";
import DayPickerInput from "react-day-picker/DayPickerInput";
import {
  marginTop45vh,
  marginLeft55vw,
  addaProfileAttachment,
  
  marginTop110vh} from '../../styles/marginStyles'

class Attendance extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchteacherattendance:{
        date:'',
        name:'',
    
      },
    }
  }
  componentDidMount() {
    this.props.dispatch(loadTeacherData());
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
    let currentdate = new Date().toLocaleDateString();
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
                  <p className="shortbox" style={{marginLeft:'11vw'}}> {currentdate}</p>
                    
                  
                  <p className='section' style={{marginLeft:'34vw'}}>Teacher's Name</p>
                    <select className="shortbox" required id='subject' style={{marginLeft:'45vw'}} onChange={(event) => this.handleChange(event)}>
                        <option value="" defaultValue>{" "}-select-</option>
                        {teachers&&teachers.map((teacher,index)=><option key={index} value={teacher.value}>{teacher.subject}</option>)}
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
                          <p style={{width:'30%'}}>{currentdate}</p>
                          <p style={{width:'20%'}}>non</p>
                        </div>
                      )}
                    
                  </div>
                  <button className='button' style={{marginTop:'3vh'}}>Save</button>
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


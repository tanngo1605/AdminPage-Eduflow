import React, { Component } from 'react';
import {connect} from 'react-redux';
import { NavLink} from 'react-router-dom'
import Drawer from '../../component/Drawer/Drawer'
import Header from '../../component/Header/HeaderAdmin'
import {loadTeacherData} from "../../redux/Stores/TeacherReducer";
import {loadAttendance,filterAttendance} from "../../redux/Stores/AttendanceReducer";
import DayPickerInput from "react-day-picker/DayPickerInput";
import { BsPencilSquare } from "react-icons/bs";
import {marginTop45vh} from '../../styles/marginStyles'



class SearchAttendance extends Component {
  constructor (props) {
    super(props)
    this.state = {
        timefrom:'',
        timeto:'',
        
    }
  }
  componentDidMount() {
      
    this.props.dispatch(loadTeacherData());
    this.props.dispatch(loadAttendance())
}


  handleDayChange=(day,statepointto)=> {
    this.setState({ [statepointto]: day });
    
  }
  handleChange = (event) => {
    let updatesearch= Object.assign({},this.state.teachersearchinput,{[event.target.id]: event.target.value})
        
    this.setState({ teachersearchinput: updatesearch })
  }
  searchResult=(event)=>{
    event.preventDefault();
    this.props.dispatch(filterAttendance({value:this.state}))
  }
  PresentorAbsent=(attendance)=>{
    let counter = 0; 
    Object.keys(attendance).map((key) => {if (attendance[key]===true) counter++})
    
    if (counter===(Object.keys(attendance).length-1))
        return <div className='switchbox' style={{backgroundColor:'green'}}>Present</div>

    
    return <div className='switchbox' style={{backgroundColor:'red'}}>Absent</div>
      
  }

  render() {
    
    let attendances = this.props.attendance.filteredAttendance;
    
    return (
      <div className='dashboard'>
        <div className='flexrow'>
          <Drawer/>
          <div className='flexcolumn'>
            <Header/>
            <div className='form'>
              
                <h1 className='titleform'>Teacher's Attendance</h1>
                <h1 className='subtitleform'>Find  Attendance</h1>
                <form className='flexcolumn' onSubmit={this.searchResult} style={marginTop45vh}>
                  <div className='flexrow' >
                    
                    <p className='section' >Date From </p>
                    <DayPickerInput className="shortbox"  onDayChange={(day) => this.handleDayChange(day,'datefrom')}/>
                    <p className='section' style={{marginLeft:'25vw '}}>Date To </p>
                    <DayPickerInput className="shortbox"  onDayChange={(day) => this.handleDayChange(day,'dateto')}/>
                    
                  </div>
                  
                  <input type='submit' value='Search' className='button' style={{marginLeft:'35%',marginTop:'8vh',marginBottom:'5vh'}}/>
                </form>
                
                <div className='tablelistArea' style={{width:'70vw',height:'40vh'}}>
                  <div className='headertableList'>
                    
                    <p style={{width:'33%'}}>Date</p>
                    <p style={{width:'33%'}}>Status</p>
                    <p style={{width:'33%'}}>Edit</p>
                    
                  </div>

                  <div className="bodytableList" style={{height:'30vh'}}>
                      {attendances&&attendances.reverse().map((attendance,index)=>

                        <div className='flexrow'  key={index} >
                          
                          <p style={{width:'33%'}}>{attendance.date.toLocaleDateString()}</p>
                          <div className='itemcenter' style={{width:'33%'}}>
                          {this.PresentorAbsent(attendance)}
                          </div>
                          
                          <div className='itemcenter' style={{width:"33%",marginTop:'0.1vh'}}>
                            <NavLink exact to={{pathname:'/editattendance',date:attendance.date}}>
                              <BsPencilSquare size='1.3vw' color='black' />
                            </NavLink>
                          </div>
                          
                        </div>
                      )}
                    
                  </div>
                  
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


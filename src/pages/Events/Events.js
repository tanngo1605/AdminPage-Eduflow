import React, { Component } from "react";
import { connect } from 'react-redux'
import { NavLink} from 'react-router-dom'
import {addEvent} from "../../redux/Stores/EventReducer";
import Drawer from "../../component/Drawer/Drawer"
import Header from "../../component/Header/Header"

import "./Events.styles.css"
class createEvent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      class: '',
      datefrom:'',
      dateto:'',
      timefrom:'',
      timeto:'',
      eventtitle:'',
      file:'',  
      description:'',
 
    }
  }
  

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }
  handleSubmit = (event) => {
    event.preventDefault();
    document.getElementById("create-course-form").reset();
    this.props.dispatch(addEvent({value: this.state}));
  }

  render() {
    return (
      <div className="dashboard">
        <div style={{display: "flex"}}>
          <Drawer/>
          <div style={{display:"flex",flexDirection:'column'}}>
            <Header/>
            <form className="form" onSubmit={this.handleSubmit} id="create-course-form">
              <div style={{marginLeft:25}}>
              <div style={{color:'#262F56',fontSize:18,fontWeight:'bold',marginBottom:"30px",marginTop:"20px"}}>Create an event for your class</div>
                <div style={{marginBottom:20,marginTop:40}}>
                  <label htmlFor="class" className='section'>Class</label>
                  <input type="text" id='class' className="box" placeholder='Maths' onChange={this.handleChange} />
                </div>
                <div style={{display:'flex',marginBottom:20}}>
                  <div>
                    <label htmlFor="datefrom" className='section'>Date from: </label>
                    <input type="date" id='datefrom' className="box" onChange={this.handleChange} />
                  </div>
                  <div style={{marginLeft:40}}>
                    <label htmlFor="dateto" className='section'>Date to:</label>
                    <input type="date" id='dateto' className="box" onChange={this.handleChange} />
                  </div>
                </div>
                <div style={{display:'flex',marginBottom:20}}>
                  <div>
                    <label htmlFor="timefrom" className='section'>Time from: </label>
                    <input type="time" id='timefrom' className="box"  onChange={this.handleChange} />
                  </div>
                  <div style={{marginLeft:40}}>
                    <label htmlFor="timeto" className='section'>Time To: </label>
                    <input type="time" id='timeto' className="box" onChange={this.handleChange} />
                  </div>
                </div>
                <div style={{marginBottom:20}}>
                  <label htmlFor="eventtitle" className='section'>Event title </label>
                  <input type="text" id='eventtitle' className="box" placeholder='Type here' onChange={this.handleChange} />
                </div>
                <div style={{marginBottom:20,display:'flex'}}>
                  <label htmlFor="description" className='section'>Description </label>
                  <textarea type="text" id='description' className="box" placeholder='Type here' onChange={this.handleChange} style={{height:150,width:"83%"}}></textarea>
                </div>
                <div style={{marginBottom:20,display:'flex'}}>
                  <a className='section'>Attachment </a>
                  <label className='attachment' for="files">
                    <a >Choose File</a>
                  </label>
                  <input type="file" id='files' onChange={this.handleChange} multiple/>
                </div>

                <div style={{marginLeft:150,marginTop:20,display:'flex'}}>
                  <input type="submit" value="Create" className="button"/>
                  <input type="reset" value="Reset" className="button"/>
                  <div className="button">
                    <NavLink exact to={'/dashboard/student'} style={{color:'#FFFFFF',marginLeft:'40%'}}>Cancel</NavLink> 
                  </div>
                </div>
              </div>
            </form>
          </div>
        
      </div>  
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {state}
}
export default connect(mapStateToProps)(createEvent);


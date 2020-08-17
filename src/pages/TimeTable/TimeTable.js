import React, { Component } from "react";
import { connect } from 'react-redux'
import { NavLink} from 'react-router-dom'
import {addEvent} from "../../redux/Stores/EventReducer";
import Drawer from "../../component/Drawer/Drawer"
import Header from "../../component/Header/Header"
import Dropzone from 'react-dropzone'
import { MdClose } from "react-icons/md";
import "./Events.styles.css"
const day={
    '20-05-05':{day},

}
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
      files:[],  
      description:'',
 
    }
    
  }
  

  render() {
    
    return (
      <div className="dashboard">
        <div style={{display: "flex"}}>
          <Drawer/>
          <div style={{display:"flex",flexDirection:'column'}}>
            <Header/>
            
          </div>
        
      </div>  
      </div>
    );
  }
}
export default (createEvent);


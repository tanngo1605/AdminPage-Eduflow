import React, { Component } from "react";
import { connect } from 'react-redux'
import { NavLink} from 'react-router-dom'
import {addEvent} from "../../redux/Stores/EventReducer";
import Drawer from "../../component/Drawer/Drawer"
import Header from "../../component/Header/Header"
import Dropzone from 'react-dropzone'
import { MdClose } from "react-icons/md";
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
      files:[],  
      description:'',
 
    }
    
  }
  onDrop = (files,event) => {
    this.setState({files})
  }

  removeItem=(file)=>{
    const files = this.state.files;
    files.splice(file, 1);
    this.setState({ files });
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
              <div style={{color:'#262F56',fontSize:18,fontWeight:'bold',marginBottom:"10px",marginTop:"20px"}}>Create an event for your class</div>
                <div style={{marginBottom:20,marginTop:20}}>
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
                  
                  <Dropzone onDrop={this.onDrop}>
                    {({getRootProps, getInputProps}) => (
                      <section style={{display:'flex'}}>
                        <div {...getRootProps({className: 'dropzone'})}>
                          <input {...getInputProps()} />
                              <a className='attachment'>Choose File</a>
                        </div>
                        <div>
                        {this.state.files.map((file)=>(
                          <div style={{marginLeft:20}}>
                            <a key={file.name}> {file.name} </a>
                            <MdClose onClick={()=>this.removeItem(file)}/>
                            
                          </div>
                        ))} 
                        </div>
                      </section>
                    )}
                  </Dropzone>
                  
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
const mapStateToProps = (state) => ({
  event: state.event
})
export default connect(mapStateToProps)(createEvent);


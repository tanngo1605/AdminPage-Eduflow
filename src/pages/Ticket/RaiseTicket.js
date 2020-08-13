import React, { Component } from "react";
import {connect} from 'react-redux';
import {addTicket} from "../../redux/Stores/TicketReducer";
import Drawer from "../../component/Drawer/Drawer";
import Header from "../../component/Header/Header";
class RaiseTicket extends Component {
  constructor (props) {
    super(props)
    this.state = {
      serialno: '',
      date:'',
      subject:'',
      topic:'',
      name:'',
      problem:'',
      status:'',  
    }
  }

  handleChange = (event) => {
    this.setState({[event.target.id]: event.target.value})
  }
  handleSubmit = (event) => {
    console.log(this.state);

    event.preventDefault();
    document.getElementById("create-course-form").reset();
    this.props.dispatch(addTicket({value: this.state}));
  }


  render() {
    return (
      <div className="dashboard">
        <div style={{display: "flex"}}>
          <Drawer/>
          <div className='display'>
            <Header/>
            <form className="form" onSubmit={this.handleSubmit} id="create-course-form">
              <div className="display" style={{marginLeft:25}}>

                <div style={{color:'#262F56',fontSize:18,fontWeight:'bold',marginBottom:"30px",marginTop:"20px"}}>Raise a ticket</div>
                
                <div style={{marginBottom:'20px'}}>
                  <label htmlFor="serialno" className='section' style={sectionStyle}>Serial No</label>
                  <input type="text" id='serialno' className="box" style={longbox} placeholder='Type here' onChange={this.handleChange} />
                </div>

                <div style={{marginBottom:'20px'}}>
                  <label htmlFor="date" className='section' style={sectionStyle}>Date</label>
                  <input type="date" id='date' className="box" style={shortbox} onChange={this.handleChange} />
                </div>

                <div style={{marginBottom:'20px'}}>
                  <label htmlFor="subject" className='section' style={sectionStyle}>Subject</label>
                  <input type="text" id='subject' className="box" style={shortbox} onChange={this.handleChange} />
                </div>

                <div style={{marginBottom:'20px'}}>
                  <label htmlFor="topic" className='section' style={sectionStyle}>Topic</label>
                  <input type="text" id='topic' className="box" style={longbox} placeholder='Type here' onChange={this.handleChange} />
                </div>

                <div style={{marginBottom:'20px'}}>
                  <label htmlFor="name" className='section' style={sectionStyle}>Name</label>
                  <input type="text" id='name' className="box" style={longbox} placeholder='Type here' onChange={this.handleChange} />
                </div>

                <div style={{marginBottom:'20px',display:'flex'}}>
                  <label htmlFor="problem" className='section' style={sectionStyle}>Problem</label>
                  <textarea type="text" id='problem' className="box" placeholder='Type here' onChange={this.handleChange} style={{height:100,width:"400px"}}></textarea>
                </div>

                <div style={{marginBottom:'20px'}}>
                  <label htmlFor="status" className='section' style={sectionStyle}>Status</label>
                  <input type="text" id='status' className="box" style={longbox} placeholder='Type here' onChange={this.handleChange} />
                </div>

                <div style={{display:'flex'}} >
                    <input type="submit" value="Save" className="button" style={{marginLeft:"18%"}}/>
                    <input type="reset" value="Reset" className="button" />        
                </div>
              </div>
            </form>
          </div>
        
      </div>  
    </div>
  );}
}

function mapStateToProps(state) {
  return {state}
}

export default connect(mapStateToProps)(RaiseTicket);

const longbox = {
    width:'400px'
};

const sectionStyle = {
    width:'100px',
    marginLeft:'10px',
    fontSize: '15px',
};
const shortbox ={
  width:'150px',
}
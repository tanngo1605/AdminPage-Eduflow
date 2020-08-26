import React, { Component } from 'react';
import DayPickerInput from "react-day-picker/DayPickerInput";
import {connect} from 'react-redux';
import {loadData,addTicket} from '../../redux/Stores/TicketReducer';
import Drawer from '../../component/Drawer/Drawer';
import Header from '../../component/Header/Header';

class RaiseTicket extends Component {
  constructor (props) {
    super(props)
    this.state = {
      ticket:{
        serialno: '',
        date: new Date(),
        subject:'',
        topic:'',
        name:'',
        problem:'',
        status:'',
        key:Math.random().toString()
      },
        
    }
  }
  componentDidMount() {
    this.props.dispatch(loadData());
  }

  handleChange = (event) => {
    let update= Object.assign({},this.state.ticket,{[event.target.id]: event.target.value})
    this.setState({ticket: update})
  }
  
  handleDayChange(day) {
    let update= Object.assign({},this.state.ticket,{date: day})
    console.log(this.state.ticket);
    this.setState({ticket: update});
  }

  handleSubmit = (event) => {
  
    event.preventDefault();
    document.getElementById('create-course-form').reset();
    this.props.dispatch(addTicket({value: this.state.ticket}));
    this.props.history.push('/ticket/ticketlist')
  }


  render() {
    return (
      <div className='dashboard'>
        <div className='flexrow'>
          <Drawer/>
          <div className='flexcolumn'>
            <Header/>
            <form className='form' onSubmit={this.handleSubmit} id='create-course-form'>
              


                <h1 className='titleform'>Raise a ticket</h1>
                <div style={{marginLeft:'1.5vw'}}>
                  <div style={{marginBottom:'2.5vh'}}>
                    <label htmlFor='serialno' className='section'>Serial No</label>
                    <input type='text' id='serialno' className='longbox' placeholder='Type here' onChange={this.handleChange} />
                  </div>

                  <div className='flexrow' style={{marginBottom:'2.5vh'}}>
                    <label htmlFor='date' className='section'>Date</label>
                    <DayPickerInput className='shortbox' style={{ width:'20vw',height:'4.5vh'}} onDayChange={(day) => this.handleDayChange(day)} placeholder='- select -'/>
                  </div>

                  <div style={{marginBottom:'2.5vh'}}>
                    <label htmlFor='subject' className='section'>Subject</label>
                    <input type='text' id='subject' className='shortbox'  onChange={this.handleChange} />
                  </div>

                  <div style={{marginBottom:'2.5vh'}}>
                    <label htmlFor='topic' className='section'>Topic</label>
                    <input type='text' id='topic' className='longbox' placeholder='Type here' onChange={this.handleChange} />
                  </div>

                  <div style={{marginBottom:'2.5vh'}}>
                    <label htmlFor='name' className='section'>Name</label>
                    <input type='text' id='name' className='longbox' placeholder='Type here' onChange={this.handleChange} />
                  </div> 

                  <div className='flexrow' style={{marginBottom:'2.5vh'}}>
                    <label htmlFor='problem' className='section' >Problem</label>
                    <textarea type='text' id='problem' className='longbox' placeholder='Type here' onChange={this.handleChange} style={{height:100}}></textarea>
                  </div>

                  <div style={{marginBottom:'2.5vh'}}>
                    <label htmlFor='status' className='section'>Status</label>
                    <input type='text' id='status' className='longbox'  placeholder='Type here' onChange={this.handleChange} />
                  </div>
                </div>
                <div className='flexrow' >
                  <input type='submit' value='Save' className='button' style={{marginLeft:'18%'}}/>
                  <input type='reset' value='Reset' className='button' />        
                </div>
              
            </form>
          </div>
        
      </div>  
    </div>
  );}
}

const mapStateToProps = (state)=> ({
  ticket: state.ticket
})

export default connect(mapStateToProps)(RaiseTicket);






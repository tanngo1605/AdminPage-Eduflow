import React, { Component } from 'react';
import DayPicker from 'react-day-picker';
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
      datepickershow:false,
        
    }
  }
  componentDidMount() {
    this.props.dispatch(loadData());
  }

  handleChange = (event) => {
    let update= Object.assign({},this.state.ticket,{[event.target.id]: event.target.value})
    this.setState({ticket: update})
  }
  showdatepicker=()=>{
    if (this.state.datepickershow===true) this.setState({datepickershow:false})
    else this.setState({datepickershow:true})
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
              <div className='flexcolumn' style={{marginLeft:25}}>

                <div className='titleform'>Raise a ticket</div>
                
                <div style={{marginBottom:'20px'}}>
                  <label htmlFor='serialno' className='section' style={sectionStyle}>Serial No</label>
                  <input type='text' id='serialno' className='box' style={longbox} placeholder='Type here' onChange={this.handleChange} />
                </div>

                <div className='flexrow' style={{marginBottom:'20px',height:'40px'}}>
                  <label htmlFor='date' className='section' style={sectionStyle}>Date</label>
                  <div className='flexcolumn'>
                  
                    <div style={{position:'relative'}}><div className='box'  onClick={()=>this.showdatepicker()}>{this.state.ticket.date.toLocaleDateString()}</div></div>
                    <div style={{marginBottom:'15px'}}></div>
                    {(this.state.datepickershow)? <DayPicker  onDayClick={(day)=>this.handleDayChange(day)} selectedDays={this.state.ticket.date}/>: null}
                  </div>
                  
                  
                </div>

                <div style={{marginBottom:'20px'}}>
                  <label htmlFor='subject' className='section' style={sectionStyle}>Subject</label>
                  <input type='text' id='subject' className='box' style={{width:150}} onChange={this.handleChange} />
                </div>

                <div style={{marginBottom:'20px'}}>
                  <label htmlFor='topic' className='section' style={sectionStyle}>Topic</label>
                  <input type='text' id='topic' className='box' style={longbox} placeholder='Type here' onChange={this.handleChange} />
                </div>

                <div style={{marginBottom:'20px'}}>
                  <label htmlFor='name' className='section' style={sectionStyle}>Name</label>
                  <input type='text' id='name' className='box' style={longbox} placeholder='Type here' onChange={this.handleChange} />
                </div> 

                <div className='flexrow' style={{marginBottom:'20px'}}>
                  <label htmlFor='problem' className='section' style={sectionStyle}>Problem</label>
                  <textarea type='text' id='problem' className='box' placeholder='Type here' onChange={this.handleChange} style={{height:100,width:'400px'}}></textarea>
                </div>

                <div style={{marginBottom:'20px'}}>
                  <label htmlFor='status' className='section' style={sectionStyle}>Status</label>
                  <input type='text' id='status' className='box' style={longbox} placeholder='Type here' onChange={this.handleChange} />
                </div>

                <div className='flexrow' >
                    <input type='submit' value='Save' className='button' style={{marginLeft:'18%'}}/>
                    <input type='reset' value='Reset' className='button' />        
                </div>
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

const longbox = {
    width:'400px'
};

const sectionStyle = {
    marginLeft:'10px',
    fontSize: '15px',
};


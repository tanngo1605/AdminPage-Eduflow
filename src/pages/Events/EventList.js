import React, {Component} from 'react';
import {Scrollbars} from 'react-custom-scrollbars';
import {connect} from 'react-redux';
import {loadData, filterByValue} from '../../redux/Stores/TicketReducer';
import Drawer from '../../component/Drawer/Drawer'
import Header from '../../component/Header/Header'
import { BsPencilSquare } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";

class TicketList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      class:'',
      text:'',
      event:'',
    }
  }
  componentDidMount() {
      this.props.dispatch(loadData());
  }

  handleChange = (event) => {
    this.setState({[event.target.id]: event.target.value})
  }
  filterByInput=(event)=>{
    event.preventDefault()
    this.props.dispatch(filterByValue({class: this.state.class, text:this.state.text,event:this.state.event}));
  }
  
  render() {

      let events = this.props.event.filteredEvents;
      
      return (
          <div className='dashboard'>
              
            <div className='flexrow'>
              <Drawer/>
              <div className='flexcolumn'>
                <Header/>
                <div className='form' >
                  <div style={{marginLeft:25}}>
                    <div className='titleform'>Events list</div>
                    <form onSubmit={this.filterByInput}>
                      <div style={{marginBottom:20,marginTop:30}}>
                        <label htmlFor='class' className='section'>Class</label>
                        <input type='text' id='class' className='box' placeholder='Type here' onChange={this.handleChange} />
                      </div>
                      <div style={{marginBottom:20}}> 
                        <label className='section'>Events</label>
                        <input type='radio' id='event' value='upcoming' style={{marginLeft:25}}/>
                        <label htmlFor='event' style={{marginLeft:15}}>Upcoming</label>
                        <input type='radio' id='event' value='past' style={{marginLeft:25}}/>
                        <label htmlFor='event' style={{marginLeft:15}}>Past due</label>
                        <input type='radio' id='event' value='all' style={{marginLeft:25}}/>
                        <label htmlFor='event' style={{marginLeft:15}}>All</label>
                        <input type='radio' id='event' value='custom' style={{marginLeft:'125px'}}/>
                        <label htmlFor='event' style={{marginLeft:15}}>Custom date</label>
                          
        
                      </div>
                      <div className='flexrow' style={{marginBottom:20}}>
                        <label htmlFor='text' className='section'>Search text</label>
                        <input type='text' id='text' className='box' style={{width:'400px'}} placeholder='Type here' onChange={this.handleChange} />
                        <input type='submit' value='Search' className='button' style={{width:'150px',marginTop:'-5px'}}/>
                        <input type='reset' value='Reset' className='button' style={{width:'150px',marginTop:'-5px'}}/>
                      </div>
                    </form>
                  <div className='eventlistArea' style={{marginTop:'5%',marginLeft:'17%',width:'58vw'}}>
                    <div className='bodyeventList' style={{width: '58vw',paddingTop:'15px'}}>
                      <p style={{width:'100px',textAlign:'center'}}>#</p>
                      <p style={{width:'180px',textAlign:'center'}}>From Date</p>
                      <p style={{width:'75px',textAlign:'center'}}>To Date</p>
                      <p style={{width:'180px',textAlign:'center'}}>Attachment</p>
                      <p style={{width:'180px',textAlign:'center'}}>Options</p>
                      
                    </div>
                    <div style={{height:'35vh',marginTop:'5px'}}>
                     <Scrollbars>      
                      {events && events.map(event => (        
                        <div className='flexrow' style={{paddingLeft:'15px',height:'20px'}}>
                        
                          <p style={{width:'100px',textAlign:'center'}}>id</p>
                          <p style={{width:'180px',textAlign:'center'}}>{event.datefrom}</p>
                          <p style={{width:'75px',textAlign:'center'}}>{event.dateto}</p>
                          <p style={{width:'180px',textAlign:'center'}}>no</p>
                          <div className='flexrow' style={{width:'180px',justifyContent:'space-around'}}>
                            <BsPencilSquare size={15}/>
                            <MdDeleteForever size={15}/>
                            <p  style={{width:10,height:10,marginTop:'-3px'}}>...</p>
                          </div>
                          
                        </div>
                      ))}
                     </Scrollbars>
                    </div>
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
  event: state.event
})

export default connect(mapStateToProps)(TicketList);
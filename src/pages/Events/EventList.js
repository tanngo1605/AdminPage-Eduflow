import React, {Component} from 'react';
import {Scrollbars} from 'react-custom-scrollbars';
import {connect} from 'react-redux';
import {loadData, filterByValue,deleteData} from '../../redux/Stores/EventReducer';
import Drawer from '../../component/Drawer/Drawer'
import Header from '../../component/Header/Header'
import { BsPencilSquare } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";



class EventList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      classteacher:'',
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
    this.props.dispatch(filterByValue({classteacher: this.state.classteacher, text:this.state.text,event:this.state.event}));
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
                  
                    <h1 className='titleform'>Events list</h1>
                    <form onSubmit={this.filterByInput} style={{marginLeft:'1vw'}}>
                      <div style={{marginBottom:'2.5vh',marginTop:'3vh'}}>
                        <label htmlFor='classteacher' className='section'>Class</label>
                        <input type='text' id='classteacher' className='shortbox' placeholder='Type here' onChange={this.handleChange} />
                      </div>
                      <div style={{marginBottom:'2.5vh'}}> 
                        <label className='section'>Events</label>
                        <input type='radio' id='event' value='upcoming' name='event' onChange={this.handleChange} style={{marginLeft:'1.5vw'}}/>
                        <label htmlFor='event' style={{marginLeft:'1vw'}}>Upcoming</label>
                        <input type='radio' id='event' value='past' name='event' onChange={this.handleChange} style={{marginLeft:'1.5vw'}}/>
                        <label htmlFor='event' style={{marginLeft:'1vw'}}>Past due</label>
                        <input type='radio' id='event' value='all' name='event' onChange={this.handleChange} style={{marginLeft:'1.5vw'}}/>
                        <label htmlFor='event' style={{marginLeft:'1vw'}}>All</label>
                        <input type='radio' id='event' value='custom' name='event' onChange={this.handleChange} style={{marginLeft:'13vw'}}/>
                        <label htmlFor='event' style={{marginLeft:'1vw'}}>Custom date</label>
                              
                      </div>
                      <div className='flexrow' style={{marginBottom:'2.5vh'}}>
                        <label htmlFor='text' className='section'>Search text</label>
                        <input type='text' id='text' className='longbox' placeholder='Type here' onChange={this.handleChange} />
                        <input type='submit' value='Search' className='button' style={{width:'10vw',marginTop:'-1vh'}} />
                        <input type='reset' value='Reset' className='button' style={{width:'10vw',marginTop:'-1vh'}}/>
                      </div>
                    </form>
                  <div className='eventlistArea' style={{marginTop:'5%',marginLeft:'17%',width:'58vw'}}>
                    <div className='headereventList' style={{width: '58vw'}}>
                      <p style={{width:'13.2%'}}>#</p>
                      <p style={{width:'22%'}}>From Date</p>
                      <p style={{width:'10%'}}>To Date</p>
                      <p style={{width:'22%'}}>Attachment</p>
                      <p style={{width:'22%'}}>Options</p>
                      
                    </div>
                    <div style={{height:'35vh',marginTop:'5px'}}>
                     <Scrollbars>      
                      {events && events.map(event => (        
                        <div key={event.key} className='bodyeventList' >
                        
                          <p style={{width:'13.2%'}}>id</p>
                          <p style={{width:'22%'}}>{event.datefrom.toLocaleDateString()}</p>
                          <p style={{width:'10%'}}>{event.dateto.toLocaleDateString()}</p>
                          <p style={{width:'22%'}}>no</p>
                          <div className='flexrow' style={{width:'22%',justifyContent:'space-around'}}>
                            <BsPencilSquare size={'1.1vw'}/>
                            <MdDeleteForever size={'1.3vw'} onClick={()=>this.props.dispatch(deleteData(event))}/>
                            
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

      );
  }
}

const mapStateToProps = (state) => ({
  event: state.event
})

export default connect(mapStateToProps)(EventList);
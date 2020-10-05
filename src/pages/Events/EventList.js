import React, {Component} from 'react';
import {Scrollbars} from 'react-custom-scrollbars';
import {connect} from 'react-redux';
import {loadData, filterByValue,deleteData} from '../../redux/Stores/EventReducer';
import {getSchoolEvent} from "../../redux/Action/EventAction";
import {getCurrentUser} from '../../redux/Stores/AccountReducer';
import Drawer from '../../component/Drawer/Drawer'
import Header from '../../component/Header/Header'
import { BsPencilSquare } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";
import {marginLeft130vw,marginBottom65vh,marginBottom100vh} from '../../styles/marginStyles'


class EventList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      classteacher:'',
      text:'',
      event:'',
      schoolEvents:{}
    }
  }
  componentDidMount = () => {
      this.props.dispatch(loadData());
      this.props.dispatch(getCurrentUser())
      
      
      const userData = this.props.account.userData;
      
      setTimeout( ()=>{
        
        try {
          /*userData.userdata.data.schoolId */
          
          const schoolEvents = getSchoolEvent(userData.userdata.data.school.uuid,userData.userdata.data.token)
          console.log(schoolEvents)
          this.setState({schoolEvents:schoolEvents})
        } 
        catch (err){
          console.log(err)
        }
      },100)
  }

  handleChange = (event) => {
    this.setState({[event.target.id]: event.target.value})
  }
  filterByInput=(event)=>{
    event.preventDefault()
    this.props.dispatch(filterByValue({classteacher: this.state.classteacher, text:this.state.text,event:this.state.event}));
  }
  
  render() {
      const userData = this.props.account.userData;
      let events = this.props.event.filteredEvents;
      console.log(this.state.schoolEvents)
      return (
          <div className='dashboard'>
              
            <div className='flexrow'>
              <Drawer/>
              <div className='flexcolumn'>
                <Header/>
                <div className='form' >
                  
                    <h1 className='titleform'>Events list</h1>
                    <form onSubmit={this.filterByInput} style={{marginLeft:'1vw',paddingTop:'3vh'}}>
                      <div className='flexrow' style={marginBottom100vh}>
                        <label htmlFor='classteacher' className='section'>Class</label>
                        <input type='text' id='classteacher' className='shortbox' style={marginLeft130vw} placeholder='Type here' onChange={this.handleChange} />
                        <label htmlFor='section' className='section' style={{marginLeft:'36vw'}}>Section</label>
                        <input type='text' id='section' className='shortbox' style={{marginLeft:'45vw'}} placeholder='Type here' onChange={this.handleChange} />
                      </div>
                      <div style={marginBottom65vh}> 
                        <label className='section'>Events</label>
                        <input type='radio' id='event' value='upcoming' name='event' onChange={this.handleChange} style={{marginLeft:'15vw'}}/>
                        <label htmlFor='event' className='radiostyle'>Upcoming</label>
                        <input type='radio' id='event' value='past' name='event' onChange={this.handleChange} style={{marginLeft:'1.5vw'}}/>
                        <label htmlFor='event' className='radiostyle'>Past due</label>
                        <input type='radio' id='event' value='all' name='event' onChange={this.handleChange} style={{marginLeft:'1.5vw'}}/>
                        <label htmlFor='event' className='radiostyle'>All</label>
                        <input type='radio' id='event' value='custom' name='event' onChange={this.handleChange} style={{marginLeft:'13vw'}}/>
                        <label htmlFor='event' className='radiostyle'>Custom date</label>
                              
                      </div>
                      <div className='flexrow' style={marginBottom65vh}>
                        <label htmlFor='text' className='section'>Search text</label>
                        <input type='text' id='text' className='longbox' style={marginLeft130vw} placeholder='Type here' onChange={this.handleChange} />
                        <input type='submit' value='Search' className='gallerybutton' style={{marginLeft:'47vw',marginTop:'-1vw'}} />
                        <input type='reset' value='Reset' className='gallerybutton' style={{marginLeft:'60vw',marginTop:'-1vw'}} />
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
                    <div className='bodyeventList'>
                     <Scrollbars>      
                      {events && events.map(event => (        
                        <div key={event.key} className='flexrow'>
                        
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
  account:state.account,
  event: state.event
})

export default connect(mapStateToProps)(EventList);
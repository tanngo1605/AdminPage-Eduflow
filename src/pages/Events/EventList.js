import React, {Component} from 'react';
import {Scrollbars} from 'react-custom-scrollbars';
import {connect} from 'react-redux';
import {loadData, filterByValue} from "../../redux/Stores/TicketReducer";
import Drawer from "../../component/Drawer/Drawer"
import Header from "../../component/Header/Header"


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
    console.log(this.state);
    this.setState({
      [event.target.id]: event.target.value
    })
  }
  filterByInput=(event)=>{
    event.preventDefault()
    this.props.dispatch(filterByValue({class: this.state.class, text:this.state.text,event:this.state.event}));
  }
  
  render() {

      let events = this.props.event.filteredEvents;
      
      return (
          <div className="dashboard">
              
            <div style={{display: "flex"}}>
              <Drawer/>
              <div className='display'>
                <Header/>
                <div className="form" >
                  <div style={{marginLeft:25}}>
                    <div style={{color:'#262F56',fontSize:18,fontWeight:'bold',marginBottom:"10px",marginTop:"20px"}}>Events list</div>
                    <form onSubmit={this.filterByInput}>
                      <div style={{marginBottom:20,marginTop:30}}>
                        <label htmlFor="class" className='section'>Class</label>
                        <input type='text' id='class' className='box' placeholder='Type here' onChange={this.handleChange} />
                      </div>
                      <div style={{marginBottom:20}}> 
                        <label className='section'>Events</label>
                        <input type="radio" id="event" value="upcoming" style={{marginLeft:25}}/>
                        <label htmlFor="event" style={{marginLeft:15}}>Upcoming</label>
                        <input type="radio" id="event" value="past" style={{marginLeft:25}}/>
                        <label htmlFor="event" style={{marginLeft:15}}>Past due</label>
                        <input type="radio" id="event" value="all" style={{marginLeft:25}}/>
                        <label htmlFor="event" style={{marginLeft:15}}>All</label>
                        <input type="radio" id="event" value="custom" style={{marginLeft:"125px"}}/>
                        <label htmlFor="event" style={{marginLeft:15}}>Custom date</label>
                          
        
                      </div>
                      <div style={{marginBottom:20,display:'flex'}}>
                        <label htmlFor="text" className='section'>Search text</label>
                        <input type='text' id='text' className='box' style={{width:'400px'}} placeholder='Type here' onChange={this.handleChange} />
                        <input type="submit" value="Search" className="button" style={{width:"150px",marginTop:"-5px"}}/>
                        <input type="reset" value="Reset" className="button" style={{width:"150px",marginTop:"-5px"}}/>
                      </div>
                    </form>
                  <div className="eventList" style={{marginTop:"5%"}}>
                    <div className="headereventList">
                      <a style={{width:"100px",textAlign:'center'}}>#</a>
                      <a style={{width:"180px",textAlign:'center'}}>From Date</a>
                      <a style={{width:"75px",textAlign:'center'}}>To Date</a>
                      <a style={{width:"180px",textAlign:'center'}}>Attachment</a>
                      <a style={{width:"180px",textAlign:'center'}}>Options</a>
                      
                    </div>
                    <div style={{height:"35vh"}}>
                     <Scrollbars>      
                      {events && events.map(event => (        
                        <div style={{paddingLeft:"15px",height:"20px",display:"flex",alignItems:'center'}}>
                        
                          <a style={{width:"100px",textAlign:'center'}}>id</a>
                          <a style={{width:"180px",textAlign:'center'}}>{event.datefrom}</a>
                          <a style={{width:"75px",textAlign:'center'}}>{event.dateto}</a>
                          <a style={{width:"180px",textAlign:'center'}}>no</a>
                          <div style={{width:"180px",display:'flex',justifyContent:'space-around'}}>
                            <img src={require('../../assets/delete.png')} alt={'dete'} style={{width:15,height:15,marginTop:'1px'}}/>
                            <img src={require('../../assets/edit.png')} alt={'edit'} style={{width:10,height:10,marginTop:'3px'}}/>
                            <a  style={{width:10,height:10,marginTop:'-3px'}}>...</a>
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
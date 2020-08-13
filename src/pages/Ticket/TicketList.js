import React, {Component} from 'react';
import {Scrollbars} from 'react-custom-scrollbars';
import {connect} from 'react-redux';
import {loadData, filterByValue} from "../../redux/Stores/TicketReducer";
import Drawer from "../../component/Drawer/Drawer"
import Header from "../../component/Header/Header"
import './TicketList.styles.css'

class TicketList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      text:'',
      status:'',
    }
  }
  componentDidMount() {
      this.props.dispatch(loadData());
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }
  filterByInput=(event)=>{
    event.preventDefault()
    setTimeout(()=>{
      this.props.ticket.dispatch(filterByValue({text: this.state.text, status:this.state.status}))}, 50);
  }
  changetextstatus = (status) => {
    if (status==='Pending')
        return (
          <div style={{height:30,borderRadius:15,backgroundColor:'#F4E55E',marginTop:10,marginLeft:20}}>
            <a style={{color:'#FFFFFF',fontSize:13,fontWeight:'bold',margin:10}}>Pending</a>
          </div>
        )
    else if (status === 'Approved')
        return (
          <div style={{height:30,borderRadius:15,backgroundColor:'#27AE60',marginTop:10,marginLeft:15}}>
            <a style={{color:'#FFFFFF',fontSize:13,fontWeight:'bold',margin:10}}>Approved</a>
          </div>
        )
    else 
        return (
          <div style={{height:30,borderRadius:15,backgroundColor:'#FF6260',marginTop:10,marginLeft:25}}>
            <a style={{color:'#FFFFFF',fontSize:13,fontWeight:'bold',margin:10}}>Denied</a>
          </div>
        )
  }

  
  render() {

      let tickets = this.props.state.filteredTickets;
      
      return (
          <div className="dashboard">
              
            <div style={{display: "flex"}}>
              <Drawer/>
              <div className='display'>
                <Header/>
                <div className="form" >
                  <div style={{marginLeft:25}}>
                    <div style={{color:'#262F56',fontSize:18,marginBottom:"10px",marginTop:"20px"}}>Raise a ticket</div>
                    <form style={{display:'flex'}} onChange={this.filterByInput}>
                      <div className='searchBox'>
                        <input type='text' id='text' className='searchBox' placeholder='Search' onChange={this.handleChange} style={{color:"#FFFFFF",paddingLeft:'20px'}} />
                      </div>
                      <div className='searchBox' style={{marginLeft:"250px"}}>        
                        <select id='status' className='searchBox' onChange={this.handleChange}>
                          <option value="">Status</option>
                          <option value='Pending'>Pending</option>
                          <option value='Approved'>Approved</option>
                          <option value='Denied'>Denied</option>
                        </select>
                      </div>
                    </form>
                  <div className="ticketList" style={{marginTop:"10%"}}>
                    <div className="headerticketList">
                      <a style={{width:"75px",textAlign:'center'}}>ID</a>
                      <a style={{width:"180px",textAlign:'center'}}>Name</a>
                      <a style={{width:"180px",textAlign:'center'}}>Date</a>
                      <a style={{width:"120px",textAlign:'center'}}>Issue</a>
                      <a style={{width:"120px",textAlign:'center'}}>Details</a>
                      <a style={{width:"100px",textAlign:'center'}}>File</a>
                      <a style={{width:"120px",textAlign:'center'}}>Status</a>
                    </div>
                    <div style={{height:"55vh"}}>
                    <Scrollbars>      
                      {tickets && tickets.map(ticket => (        
                        <div style={{paddingLeft:"20px",height:"70px",display:"flex",alignItems:'center'}}>
                        
                          <div style={{width:"75px",textAlign:'center'}}>{ticket.serialno}</div>
                          <a style={{width:"180px",textAlign:'center'}}>{ticket.name}</a>
                          <a style={{width:"180px",textAlign:'center'}}>{ticket.date}</a>
                          <a style={{width:"120px",textAlign:'center'}}>{ticket.subject}</a>
                          <a style={{width:"120px",textAlign:'center'}}>{ticket.problem}</a>
                          <a style={{width:"100px",textAlign:'center'}}>File</a>
                          {this.changetextstatus(ticket.status)}
                          
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

function mapStateToProps(state) {
  return {state}
}

export default connect(mapStateToProps)(TicketList);
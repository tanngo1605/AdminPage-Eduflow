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
  searchResult=(event)=>{
    event.preventDefault()
    setTimeout(()=>{
      this.props.dispatch(filterByValue({text: this.state.text, status:this.state.status}))}, 50);
  }


  changetextstatus = (status) => {
    if (status==='Pending')
        return (
          <div style={{height:30,borderRadius:15,backgroundColor:'#F4E55E',marginLeft:30,marginTop:-15}}>
            <p style={{color:'#FFFFFF',fontSize:13,fontWeight:'bold',margin:5}}>Pending</p>
          </div>
        )
    else if (status === 'Approved')
        return (
          <div style={{height:30,borderRadius:15,backgroundColor:'#27AE60',marginLeft:25,marginTop:-15}}>
            <p style={{color:'#FFFFFF',fontSize:13,fontWeight:'bold',margin:5}}>Approved</p>
          </div>
        )
    return (
          <div style={{height:30,borderRadius:15,backgroundColor:'#FF6260',marginLeft:35,marginTop:-15}}>
            <p style={{color:'#FFFFFF',fontSize:13,fontWeight:'bold',margin:5}}>Denied</p>
          </div>
        )
  }

  
  render() {

      let tickets = this.props.ticket.filteredTickets;
      
      return (
          <div className="dashboard">
              
            <div className="flexrow">
              <Drawer/>
              <div className='flexcolumn'>
                <Header/>
                <div className="form" >
                  <div style={{marginLeft:25}}>
                    <div className='titleform'>Raise a ticket</div>
                    <form className="flexrow" onChange={this.searchResult}>
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
                      <p style={{width:"13%",textAlign:'center'}}>ID</p>
                      <p style={{width:"18%",textAlign:'center'}}>Name</p>
                      <p style={{width:"18%",textAlign:'center'}}>Date</p>
                      <p style={{width:"13%",textAlign:'center'}}>Issue</p>
                      <p style={{width:"13%",textAlign:'center'}}>Details</p>
                      <p style={{width:"10%",textAlign:'center'}}>File</p>
                      <p style={{width:"120px",textAlign:'center'}}>Status</p>
                    </div>
                    <div style={{height:"55vh"}}>
                    <Scrollbars>      
                      {tickets && tickets.map(ticket => (        
                        <div style={{paddingLeft:"20px",marginTop:"10px",height:"70px",display:"flex",alignItems:'center'}} key={ticket.key}>
                        
                          <p style={{width:"13%",textAlign:'center'}}>{ticket.serialno}</p>
                          <p style={{width:"18%",textAlign:'center'}}>{ticket.name}</p>
                          <p style={{width:"18%",textAlign:'center'}}>{ticket.date.toLocaleDateString()}</p>
                          <p style={{width:"13%",textAlign:'center'}}>{ticket.subject}</p>
                          <p style={{width:"13%",textAlign:'center'}}>{ticket.problem}</p>
                          <p style={{width:"10%",textAlign:'center'}}>File</p>
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

const mapStateToProps = (state)=> ({
  ticket: state.ticket
})

export default connect(mapStateToProps)(TicketList);
import React, { Component } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { connect } from "react-redux";
import { loadData, filterByValue } from "../../../redux/Stores/TicketReducer";
import Drawer from "../../../component/Drawer/Drawer";
import Header from "../../../component/Header/HeaderAdmin";

class TicketList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      status: "",
    };
  }
  componentDidMount() {
    this.props.dispatch(loadData());
  }

  handleChange = (event) => {
    this.setState({[event.target.id]: event.target.value})
  }
  searchResult=(event)=>{
    event.preventDefault()
    setTimeout(()=>{
      this.props.dispatch(filterByValue({text: this.state.text, status:this.state.status}))}, 50);
  }

  render() {
    let tickets = this.props.ticket.filteredTickets;

    return (
      <div className="dashboard">
        <div className="flexrow">
          <Drawer />
          <div className="flexcolumn">
            <Header />
            <div className="form">
              <h1 className="titleform">Raise a ticket</h1>
              <form className="flexrow" onChange={this.searchResult}>
                <input type="text" id="text" className="searchBox" placeholder="Search"
                  onChange={this.handleChange}
                  style={{
                    color: "#FFFFFF",
                    paddingLeft: "1.5vw",
                    marginLeft: "1vw",
                  }}
                />

                <div className="searchBox" style={{ marginLeft: "5vw" }}>
                  <select id="status" className="searchBox" onChange={this.handleChange}>
                    <option value="">Status</option>
                    <option value="Pending">Pending</option>
                    <option value="Approved">Approved</option>
                    <option value="Denied">Denied</option>
                  </select>
                </div>
              </form>
              <div className="ticketList" style={{ marginTop: "2%" }}>
                <div className="headerticketList">
                  <p style={{ width: "13%" }}>ID</p>
                  <p style={{ width: "18%" }}>Name</p>
                  <p style={{ width: "18%" }}>Date</p>
                  <p style={{ width: "13%" }}>Issue</p>
                  <p style={{ width: "13%" }}>Details</p>
                  <p style={{ width: "10%" }}>File</p>
                  <p style={{ width: "12%" }}>Status</p>
                </div>
                <div style={{ height: "55vh" }}>
                  <Scrollbars>
                    {tickets && tickets.map((ticket) => (
                        <div className="bodyticketlist" key={ticket.key}>
                          <p style={{ width: "13%" }}>{ticket.serialno}</p>
                          <p style={{ width: "18%" }}>{ticket.name}</p>
                          <p style={{ width: "18%" }}>{ticket.date.toLocaleDateString()}</p>
                          <p style={{ width: "13%" }}>{ticket.subject}</p>
                          <p style={{ width: "13%" }}>{ticket.problem}</p>
                          <p style={{ width: "10%" }}>File</p>
                          <div 
                            className="boxforstatus" 
                            style={ticket.status==='Pending'?{ backgroundColor: "#F4E55E" }:(ticket.status==='Approved'?{ backgroundColor: "#27AE60" }:{ backgroundColor: "#FF6260" })}>
                            <p className="textforstatus">{ticket.status==='Pending'?'Pending': ticket.status==='Approved'?"Approved":"Denied"}</p>
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
  ticket: state.ticket,
});

export default connect(mapStateToProps)(TicketList);

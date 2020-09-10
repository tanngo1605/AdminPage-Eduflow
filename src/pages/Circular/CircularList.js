import React, { Component } from 'react';
import {connect} from 'react-redux';
import { NavLink} from 'react-router-dom'
import DayPickerInput from "react-day-picker/DayPickerInput";
import Drawer from '../../component/Drawer/Drawer'
import Header from '../../component/Header/Header'
import {loadCircularData,deleteCircularData,filterCircularData} from "../../redux/Stores/CircularReducer";
import { BsPencilSquare,BsPlus } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";
import {
  marginLeft250vw,
  marginLeft130vw,
  marginTop55vh,
  addaProfileAttachment,
  marginBottom130vhandTop10vh,
  } from '../../styles/marginStyles'

class CircularList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      circularsearchinput:{
        date:'',
        subject:'',
      },
    }
  }
  componentDidMount() {
    this.props.dispatch(loadCircularData());
}


  handleChange = (event) => {
    let updatesearch= Object.assign({},this.state.circularsearchinput,{[event.target.id]: event.target.value})
        
    this.setState({ circularsearchinput: updatesearch })
  }
  handleDayChange(day) {
    let update= Object.assign({},this.state.circularsearchinput,{date: day})
    console.log(this.state.circularsearchinput)
    this.setState({circularsearchinput: update});
  }
  searchResult=(event)=>{
    event.preventDefault();
    console.log(this.state)
    setTimeout(()=>{
      
      this.props.dispatch(
        filterCircularData({value:this.state.circularsearchinput}))}, 50);
  }
  

  render() {
    let circulars = this.props.circular.filteredCirculars;
    
    return (
      <div className='dashboard'>
        <div className='flexrow'>
          <Drawer/>
          <div className='flexcolumn'>
            <Header/>
            <div className='form'>
              
                <h1 className='titleform'>Teacher Info</h1>
                <NavLink exact to={{pathname:'/teacher/profile'}} className='attachment' style={addaProfileAttachment}>
                    <BsPlus color="white" size={'1.5vw'} className='attachmentplusicon'/>
                    <p style={{color:'#FFFFFF'}}> Add a circular </p>
                </NavLink>
                <form className='flexrow' onChange={this.searchResult} style={marginBottom130vhandTop10vh}>
                  
                    <div className='flexcolumn' style={marginLeft130vw} >
                      <p className='section'>Date </p>
                      <DayPickerInput className='shortbox' style={marginTop55vh} onDayChange={(day) => this.handleDayChange(day)} placeholder='- select -'/>
                    </div>
                    <div className='flexcolumn' style={marginLeft250vw}>
                      <label htmlFor='Subject' className='section' >Subject</label>
                      <input type='text' id='Subject' className='shortbox' style={marginTop55vh} onChange={this.handleChange} />
                    </div>
                  
                  
                </form>
                <div className='eventlistArea' style={{width:'70vw',textAlign:'center'}}>
                  <div className='headereventList'>
                    <p style={{width:'15%'}}>Serial No</p>
                    <p style={{width:'20%'}}>Date</p>
                    <p style={{width:'20%'}}>Subject</p>
                    <p style={{width:'20%'}}>Attachment</p>
                    <p style={{width:'10%'}}>Delete</p>
                    <p style={{width:'10%'}}>Edit</p>
                  </div>

                  <div className="flexcolumn" style={{height:'30vh'}}>
                      {circulars&&circulars.map((circular,index)=>

                        <div  className="bodyeventList"  key={circular.key} >
                          
                          <p style={{width:'15%'}}>{index+1}</p>
                          <p style={{width:'20%'}}>{circular.date.toLocaleDateString()}</p>
                          <p style={{width:'20%'}}>{circular.subject}</p>
                          <p style={{width:'20%'}}>{circular.files.name}</p>
                          <div className='itemcenter' style={{width:"10%"}}>
                            <MdDeleteForever size='1.5vw' onClick={()=>this.props.dispatch(deleteCircularData(circular))}/>
                          </div>
                          <div className='itemcenter' style={{width:"10%",marginTop:'0.1vh'}}>
                            <NavLink exact to={{pathname:'/circular',circulardata:circular}}>
                              <BsPencilSquare size='1.3vw' color='black' />
                            </NavLink>
                          </div>
                        </div>
                      )}
                    
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
  circular: state.circular
})

export default connect(mapStateToProps)(CircularList);


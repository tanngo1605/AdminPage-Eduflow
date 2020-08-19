import React,{Component} from "react";
import Drawer from "../../component/Drawer/Drawer"
import Header from "../../component/Header/Header"
import DayPicker from 'react-day-picker';
import {Scrollbars} from 'react-custom-scrollbars';
import "./Homescreen.styles.css";
import './calendar.styles.css';
const modifiers = {
  "Parents Meeting": new Date(2020, 7, 7),
  "Exam": new Date(2020, 7, 11),
  "Outling at the park": new Date(2020,7,6)

};
 
const modifiersStyles = {
  "Parents Meeting": {
    background: "linear-gradient(#F4E55E 0%, #F1EFD5 100%)"
    
  },
  "Exam": {
    background: "linear-gradient(0deg, #E81515 0%, #F47575 100%)",
  },
  "Outling at the park":{
    background: "linear-gradient(0deg, #B5B7B8 0%, #D8D8D8 100%)",
  },
  outside: {
    backgroundColor: '#6EC1DB',
    opacity: 0
  },
};
const sections= [
  {roles:'Students',image:'Student.png',number:'400000'},
  {roles:'Teachers',image:'Teacher.png',number:'400000'},
  {roles:'Staff',image:'Staff.png',number:'400000'},
];  

const ticket= [
  {date:'June 28, 2020',personincharge:'Ms.Clark',reason:'Transaction Failed. Ask for a techincal support',type:'Fee',status:'Denied',clicked:false},
  {date:'June 20, 2020',personincharge:'Mr.Robinson',reason:'Transaction Failed. Ask for a techincal support',type:'Salary',status:'Denied',clicked:false},
  {date:'June 17, 2020',personincharge:'Mr.Robinson',reason:'Transaction Failed. Ask for a techincal support',type:'Parking',status:'Approved',clicked:true},
  {date:'June 15, 2020',personincharge:'Mr.Robinson',reason:'Transaction Failed. Ask for a techincal support',type:'Syllabus',status:'Pending',clicked:false},
  {date:'June 14, 2020',personincharge:'Mr.Robinson',reason:'Transaction Failed. Ask for a techincal support',type:'Sallary',status:'Denied',clicked:false},
];


class Homescreen extends Component {

  constructor (props) {
    super(props)
    this.state = {
      trigger: false,   
    }
  }

  handleClick(e,condition,index,array) {   
    e.preventDefault();
    if (condition===false){
      array.map((item)=>item.clicked=false);
      array[index]['clicked']=true;
      this.setState({trigger:true});
    }
    else {
      this.setState({trigger:false})
    }
  }

  changetextstatus = (status,type) => {
    if (status==='Pending')
        return (
          <div style={{height:30,borderRadius:15,backgroundColor:'#F4E55E',marginTop:10,marginLeft:20}}>
            <a style={{color:'#FFFFFF',fontSize:13,fontWeight:'bold',margin:10}}>{type}</a>
          </div>
        )
    else if (status === 'Approved')
        return (
          <div style={{height:30,borderRadius:15,backgroundColor:'#27AE60',marginTop:10,marginLeft:20}}>
            <a style={{color:'#FFFFFF',fontSize:13,fontWeight:'bold',margin:10}}>{type}</a>
          </div>
        )
    else 
        return (
          <div style={{height:30,borderRadius:15,backgroundColor:'#FF6260',marginTop:10,marginLeft:20}}>
            <a style={{color:'#FFFFFF',fontSize:13,fontWeight:'bold',margin:10}}>{type}</a>
          </div>
        )
  }

  render(){

   return(
   <div className="dashboard">
    <div className="flexrow">
      <Drawer/>
      <div className="flexcolumn">
          <Header/>
          <div className="flexrow" style={{marginTop:20}}>
          {sections&&sections.map(item=>
            <div className="total">
              <a style={{textAlign:'center',marginTop:10}}>Total NO of {item.roles}:</a>
              <div className="flexrow" style={{marginTop:10}}>
                <div className="smallbox">
                  <img src={require('../../assets/'+item.image)} alt={item.imagedescription} style={{width:20,height:20,marginLeft:"31%",marginTop:"28%"}}/>
                </div>
                <a style={{marginLeft:20,fontFamily:'Poly',lineHeight:"100%",marginTop:'5%'}}>{item.number}</a>
              </div>
            </div>
          )}
          </div>
          <div className="flexrow" style={{marginTop:20}}>
            <div className='calendar'>
              <div style={{marginLeft:5}}>
                <DayPicker
                  month={new Date(2020,7 )}
                  modifiers={modifiers}
                  modifiersStyles={modifiersStyles}
                />
                <div style={{marginLeft:10,height:"24%"}}>
                 <Scrollbars>
                
                  {Object.keys(modifiers).map((key, value) => 
                    <div className='flexcolumn'>
                      <a style={{color:"#A2ABBF",fontSize:12,marginBottom:5}}>Events</a>
                      <div className="flexrow" style={{marginBottom:10}}>
                        <div style={{width:25,height:25,borderRadius:15,background:modifiersStyles[key]['background']}}></div>
                        <a style={{color:"#A2ABBF",fontSize:12,marginLeft:5}}>{key}</a>
                        <a style={{color:"#A2ABBF",fontSize:12,marginLeft:'auto',marginRight:45}}>date</a>
                      </div>
                    </div>
                  )}
                 </Scrollbars>
                </div>

              </div>
            </div>
            <div className="ticket">
              <Scrollbars>
                {ticket&&ticket.map((item,index)=>
                  (item.clicked)?(
                    <div className="ticketcolumn" onClick={(e)=>this.handleClick(e,item.clicked,index,ticket)} style={{backgroundColor:'#04044E',marginLeft:70}}>
                      <a style={{color:'#FFFFFF',marginLeft:20,margintop:20,fontSize:30}}>{index+1}</a>
                      <div className="flexcolumn" style={{marginLeft:15,marginTop:10}}>
                        <a style={{fontSize:10,color:'#FFFFFF'}}>{item.date}</a>
                        <a style={{fontSize:10,color:'#FFFFFF'}}> {item.personincharge}</a>
                      </div>
                      <div style={{width:120,marginLeft:10}}>
                        <a style={{fontSize:12,color:'#FFFFFF'}}> {item.reason}</a>
                      </div>
                      {this.changetextstatus(item.status,item.type)}
                    </div>
                  ):(
                    <div className="ticketcolumn" onClick={(e)=>this.handleClick(e,item.clicked,index,ticket)} style={{backgroundColor:'#FFFFFF',marginLeft:50}}>
                      <a style={{color:'#8C96AB',marginLeft:10,margintop:20,fontSize:30}}>{index+1}</a>
                      <div className="flexcolumn" style={{marginLeft:15,marginTop:10}}>
                        <a style={{fontSize:10,color:'#6B7897'}}>{item.date}</a>
                        <a style={{fontSize:10,color:'#8C96AB'}}> {item.personincharge}</a>
                      </div>
                      <div style={{width:120,marginLeft:10}}>
                        <a style={{fontSize:12,color:'#8C96AB'}}> {item.reason}</a>
                      </div>
                      {this.changetextstatus(item.status,item.type)}
                    </div>
                  )
                )}
              </Scrollbars>
            </div>
          </div>
      </div>
    </div>
   </div>
  )}
};

export default Homescreen;

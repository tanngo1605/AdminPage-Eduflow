import React,{Component} from 'react';
import Drawer from '../../component/Drawer/Drawer'
import Header from '../../component/Header/Header'
import DayPicker from 'react-day-picker';
import {Scrollbars} from 'react-custom-scrollbars';
import './calendar.styles.css';

const modifiers = {
  'Parents Meeting': new Date(2020, 7, 7),
  'Exam': new Date(2020, 7, 11),
  'Outling at the park': new Date(2020,7,6)

};
 
const modifiersStyles = {
  'Parents Meeting': {
    background: 'linear-gradient(#F4E55E 0%, #F1EFD5 100%)'
    
  },
  'Exam': {
    background: 'linear-gradient(0deg, #E81515 0%, #F47575 100%)',
  },
  'Outling at the park':{
    background: 'linear-gradient(0deg, #B5B7B8 0%, #D8D8D8 100%)',
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
  {date:'June 28, 2020',personincharge:'Ms.Clark',reason:'Transaction Failed. Ask for a techincal support',type:'Fee',status:'Denied',clicked:false,key:'1'},
  {date:'June 20, 2020',personincharge:'Mr.Robinson',reason:'Transaction Failed. Ask for a techincal support',type:'Salary',status:'Denied',clicked:false,key:'2'},
  {date:'June 17, 2020',personincharge:'Mr.Robinson',reason:'Transaction Failed. Ask for a techincal support',type:'Parking',status:'Approved',clicked:true,key:'3'},
  {date:'June 15, 2020',personincharge:'Mr.Robinson',reason:'Transaction Failed. Ask for a techincal support',type:'Syllabus',status:'Pending',clicked:false,key:'4'},
  {date:'June 14, 2020',personincharge:'Mr.Robinson',reason:'Transaction Failed. Ask for a techincal support',type:'Sallary',status:'Denied',clicked:false,key:'5'},
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
            <p style={textforstatusstyle}>{type}</p>
          </div>
        )
    else if (status === 'Approved')
        return (
          <div style={{height:30,borderRadius:15,backgroundColor:'#27AE60',marginTop:10,marginLeft:20}}>
            <p style={textforstatusstyle}>{type}</p>
          </div>
        )
    return (
          <div style={{height:30,borderRadius:15,backgroundColor:'#FF6260',marginTop:10,marginLeft:20}}>
            <p style={textforstatusstyle}>{type}</p>
          </div>
        )
  }

  render(){

   return(
   <div className='dashboard'>
    <div className='flexrow'>
      <Drawer/>
      <div className='flexcolumn'>
          <Header/>
          <div className='flexrow' style={{marginTop:20}}>
          {sections&&sections.map(item=>
            <div className='totalbox' key={item.roles}>
              <p style={{textAlign:'center',marginTop:10}}>Total NO of {item.roles}:</p>
              <div className='flexrow' >
                <div className='smalltotalbox'>
                  <img src={require('../../assets/'+item.image)} alt={item.imagedescription} style={{width:20,height:20,marginLeft:'31%',marginTop:'28%'}}/>
                </div>
                <p className='numberoffortotalbox'>{item.number}</p>
              </div>
            </div>
          )}
          </div>
          <div className='flexrow' style={{marginTop:20}}>
            <div className='calendararea'>
              <div style={{marginLeft:5}}>
                <DayPicker
                  month={new Date(2020,7 )}
                  modifiers={modifiers}
                  modifiersStyles={modifiersStyles}
                />
                <div style={{marginLeft:13,height:'24%'}}>
                 <Scrollbars>
                
                  {Object.keys(modifiers).map((key, value) => 
                    <div className='flexcolumn' key={key}>
                      <p style={{color:'#A2ABBF',fontSize:12,marginBottom:5}}>Events</p>
                      <div className='flexrow' style={{marginBottom:10}}>
                        <div style={{width:25,height:25,borderRadius:15,background:modifiersStyles[key]['background']}}></div>
                        <div className='flexrow' style={{marginTop:'3px',width:"100%"}}>
                          <p style={{color:'#A2ABBF',fontSize:12,marginLeft:10}}>{key}</p>
                          <p style={{color:'#A2ABBF',fontSize:12,marginLeft:'auto',marginRight:40}}>{modifiers[key].toLocaleDateString()}</p>
                        </div>
                      </div>
                    </div>
                  )}
                 </Scrollbars>
                </div>

              </div>
            </div>
            <div className='ticketarea'>
              <Scrollbars>
                {ticket&&ticket.map((item,index)=>
                  (item.clicked)?(
                    <div key={item.key} className='ticketrow' onClick={(e)=>this.handleClick(e,item.clicked,index,ticket)} style={{backgroundColor:'#04044E',marginLeft:70}}>
                      <p style={{color:'#FFFFFF',marginLeft:20,margintop:20,fontSize:30}}>{index+1}</p>
                      <div className='flexcolumn' style={{marginLeft:15,marginTop:10}}>
                        <h1 style={{fontSize:10,color:'#FFFFFF'}}>{item.date}</h1>
                        <h1 style={{fontSize:10,color:'#FFFFFF'}}> {item.personincharge}</h1>
                      </div>
                      <div style={{width:120,marginLeft:15,paddingTop:8}}>
                        <p style={{fontSize:12,color:'#FFFFFF'}}> {item.reason}</p>
                      </div>
                      {this.changetextstatus(item.status,item.type)}
                    </div>
                  ):(
                    <div key={item.key} className='ticketrow' onClick={(e)=>this.handleClick(e,item.clicked,index,ticket)} style={{backgroundColor:'#FFFFFF',marginLeft:50}}>
                      <p style={{color:'#8C96AB',marginLeft:10,margintop:20,fontSize:30}}>{index+1}</p>
                      <div className='flexcolumn' style={{marginLeft:15,marginTop:10}}>
                        <h1 style={{fontSize:10,color:'#6B7897'}}>{item.date}</h1>
                        <h1 style={{fontSize:10,color:'#8C96AB'}}> {item.personincharge}</h1>
                      </div>
                      <div style={{width:120,marginLeft:15,paddingTop:8}}>
                        <p style={{fontSize:12,color:'#8C96AB'}}> {item.reason}</p>
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

const textforstatusstyle={
  color:'#FFFFFF',
  fontSize:13,
  fontWeight:'bold',
  margin:5

}
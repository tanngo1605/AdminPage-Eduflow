import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Scrollbars} from 'react-custom-scrollbars';
import {loadClassData} from "../../redux/Stores/ClassReducer";
import {loadTeacherData} from "../../redux/Stores/TeacherReducer";
import Drawer from '../../component/Drawer/Drawer';
import Header from '../../component/Header/HeaderAdmin';
import {
  marginBottom65vh,
  marginLeft380vw,
  marginLeft200vw,
  marginLeft130vw,
  marginTop45vh,
  } from '../../styles/marginStyles'

let numberofperiod=6;
const subjects = [
  {subject:'Math',value:'math'},
  {subject:'History',value:'history'},
  {subject:'Math',value:'math'},

]

class createSubject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      class: '',
      section: '',
      trigger:false
    };
  }
  componentDidMount() {
    this.props.dispatch(loadClassData());
    this.props.dispatch(loadTeacherData());
  }
  assignSubject=(teachers)=>{
    let period=[];
    console.log(teachers)
    for (let i = 1;i<=numberofperiod;i++) 
      period.push(
        
          <div className='flexrow' key={i} style={marginBottom65vh}>

            <p className='section'>{i}</p>
            

            <select className='shortbox' required onChange={this.handleChange} style={marginLeft200vw}  id='subject'>
                <option value="" defaultValue>{" "}-select-</option>
                {subjects.map((subject,index)=><option key={index} value={subject.value}>{subject.subject}</option>)}
              
            </select>
            
            <select className="shortbox" required id='subject' style={{marginLeft:'50vw'}} onChange={(event) => this.handleChange(event,i.toString())}>
                <option value="" defaultValue>{" "}-select-</option>
                {teachers&&teachers.map((teacher,index)=><option key={index} value={teacher.value}>{teacher.name}</option>)}
            </select>
            
        </div>
      )

    return (
      <div className='eventlistArea' style={{marginTop:'8vh'}}>
        <div className='headereventList'>
            <p className='section' >Serial No</p>
            <p className='section' style={{marginLeft:'17vw'}}>Enter Subject </p>
            <p className='section' style={{marginLeft:'48vw'}}>Assign a teacher</p>
        </div>
        <div className='bodyeventList'>
          <Scrollbars>
            {period}
            <p className='textaligncenter' 
                onClick={()=>{ numberofperiod=numberofperiod+1; this.setState({trigger:!this.state.trigger})}} 
                style={{color: '#0F1E36',fontSize:'1vw'}}> + Add More </p> 
          </Scrollbars>
        </div>
      </div>
    )
  }
  handleChange = (event, key) => {
    if (typeof [event.target.id].includes(key)) {
      let update = Object.assign({},this.state[key], {[event.target.id]: event.target.value});
      if (key) 
        this.setState({[key]:update})  
      else 
        this.setState({[event.target.id]: event.target.value});

      console.log(this.state);
    }
  };

  handleDayChange(day) {
    this.setState({ date: day.toLocaleDateString() });
  }
  render() {
    let classdata = this.props.class.filteredClass; 
    let teachers = this.props.teacher.filteredTeachers;
    
    return (
      <div className='dashboard'>
        <div className='flexrow'>
          <Drawer/>
          <div className='flexcolumn'>
            <Header/>
            <div className='form' >
              
                <h1 className='titleform'>Create Subject</h1>
                
                  <div className='flexrow'>
                    
                    <div className='flexrow'>
                        <p className='section'>Enter Class</p>
                        <select className='shortbox' required onChange={this.handleChange} style={marginLeft130vw} id='class'>
                          <option value="" defaultValue>{" "}-select-</option>
                          {classdata&&classdata.map((item,index)=><option key={index} value={item.class}>{item.class}</option>)}
                        </select>
                    </div>
                    
                    <div className='flexrow' style={marginLeft380vw}>
                        <p className='section'>Enter Section</p>
                        <select className='shortbox' required onChange={this.handleChange} style={marginLeft130vw}  id='section'>
                          <option value="" defaultValue>{" "}-select-</option>
                          {subjects.map((subject,index)=><option key={index} value={subject.value}>{subject.subject}</option>)}
              
                        </select>
                    </div>
                  </div>

                  {this.assignSubject(teachers)}
                  
                  <div className='flexrow' style={marginTop45vh}>
                    {/* <button>Save</button> <button>Reset</button> */}
                    <input type='submit' value='Save' className='button' style={{marginLeft:'27%'}} />
                    <input type='reset' value='Reset' className='button' />
                  </div>
                
              
            </div>
          </div>    
        
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  teacher: state.teacher,
  class:state.class,
});
export default connect(mapStateToProps)(createSubject);
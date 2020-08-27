import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Scrollbars} from 'react-custom-scrollbars';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import Drawer from '../../component/Drawer/Drawer';
import Header from '../../component/Header/Header';
import {loadData} from '../../redux/Stores/TeacherReducer';
import {marginBottom65vh,marginLeft13vw,marginTop55vh,fontsize12vw} from '../../styles/globalStyles'

const subjects = [
  {subject:'Math',value:'math'},
  {subject:'History',value:'history'},
  {subject:'Math',value:'math'},

]

class TimeTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // '1': { class: '', section: '', date: '', subject: '', teacher: '' },
      // '2': { class: '', section: '', date: '', subject: '', teacher: '' },
      // '3': { class: '', section: '', date: '', subject: '', teacher: '' },
      class: '',
      section: '',
      date: '',
    };
  }
  // handleChange = (event) => {

  //   this.setState({ [event.target.id]: event.target.value });
  //   console.log(this.state);
  // };

  // handleChange = (event, key) => {
  //   let update = Object.assign({}, this.state[key], {
  //     [event.target.id]: event.target.value,
  //   });
  //   this.setState({
  //     [key]: update,
  //   });
  //   console.log(this.state);
  // };
  componentDidMount(){
    this.props.dispatch(loadData());
  }
  displayPeriod=(teacherselection)=>{
    let period=[],numberofperiod=5;
    if (!teacherselection) return ;
    
    for (let i = 1;i<=numberofperiod;i++) 
      period.push(
        <div className='flexcolumn' key={i} style={{marginLeft:'5%',marginBottom:'12.5vh'}}>
          <div className='flexrow' style={{marginLeft:'3%'}}>
            <div className='flexcolumn'>
              <p className='section' style={fontsize12vw}>Period</p>
              <p className='section' style={{marginLeft:'1.2vw',marginTop:'5.5vh'}}>{i}</p>
            </div>
            <div className='flexcolumn' style={marginLeft13vw} >
              <p className='section' style={fontsize12vw}>Subject</p>
              <select className="shortbox" required id='subject' style={marginTop55vh}  onChange={(event) => this.handleChange(event,i.toString())}>
                <option value="" defaultValue>{" "}-select-</option>
                {subjects.map((subject,index)=><option key={index} value={subject.value}>{subject.subject}</option>)}
              </select>
            </div>
            <div className='flexcolumn' style={{marginLeft:'30vw'}}>                                                                                           
              <p className='section' style={fontsize12vw}>Teacher assign</p>
              <select className="shortbox" required id='teacher' style={marginTop55vh} onChange={(event) => this.handleChange(event,i.toString())}>
                <option value="" defaultValue>{" "}-select-</option>
                {teacherselection.map((teacher,index)=><option key={index} value={teacher.value}>{teacher.name}</option>)}
              
              </select>
            </div>
        </div>
      </div>)

    return (
      <div>{period}</div>
    )
  }
  handleChange = (event, key) => {
    if (typeof [event.target.id].includes(key)) {
      let update = Object.assign({},this.state[key], {[event.target.id]: event.target.value});
      if (key) 
        this.setState({[key]:update})  
      else 
        this.setState({[event.target.id]: event.target.value});
      
      // this.setState({
      //   [key]: update,
      //   [event.target.id]: event.target.value,
      // });
      // } else {
      //   let update = Object.assign({}, this.state, {
      //     [event.target.id]: event.target.value,
      //   });
      //   console.log([event.target.id], event.target.value);
      //   this.setState({ [event.target.id]: update });
      // }
      console.log(this.state);
    }
  };

  handleDayChange(day) {
    this.setState({ date: day.toLocaleDateString() });
  }
  render() {
    let teachers = this.props.teacher.filteredTeachers;
    
    return (
      <div className='dashboard'>
        <div className='flexrow'>
          <Drawer />
          <div className='flexcolumn'>
            <Header />
            <div className='form' >
              
                <h1 className='titleform'>Timetable</h1>
                
                  <div className='flexcolumn' style={{marginLeft:'1.5vw',marginTop:'3%'}}>
                    <div className='flexrow'>
                      <div className='flexrow' style={marginBottom65vh}>
                        <p className='section'>Enter Class</p>
                        <select className='shortbox' required onChange={this.handleChange} style={marginLeft13vw} id='class'>
                          <option value="" defaultValue>{" "}-select-</option>
                          <option value='lime'>Lime</option>
                          <option value='coconut'>Coconut</option>
                          <option value='mango'>Mango</option>
                        </select>
                      </div>
                      <div className='flexrow' style={{marginLeft:'38vw'}}>
                        <p className='section'>Enter Section</p>
                        <select className='shortbox' required onChange={this.handleChange} style={marginLeft13vw}   id='section'>
                          <option value="" defaultValue>{" "}-select-</option>
                          <option value='maths'>maths</option>
                          <option value='english'>English</option>
                          <option value='science'>Science</option>
                          <option value='history'>History</option>
                          <option value='pe'>PE</option>
                        </select>
                      </div>
                    </div>
                    <div className='flexrow' style={{marginTop:'2%'}}>
                      <p className='section'>Choose Day</p>
                      <DayPickerInput className='shortbox' style={marginLeft13vw} onDayChange={(day) => this.handleDayChange(day)} placeholder='- select -'/>
                    </div>
                  </div>
                  
                  <div className='eventlistArea' style={{marginTop:'8vh',paddingTop:'2%'}}>
                    <Scrollbars>
                      {this.displayPeriod(teachers)}
                    </Scrollbars>
                  </div>
                  <div style={{marginTop:'2%'}}>
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
});
export default connect(mapStateToProps)(TimeTable);
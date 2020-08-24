import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Scrollbars} from 'react-custom-scrollbars';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import Drawer from '../../component/Drawer/Drawer';
import Header from '../../component/Header/Header';
import {loadData} from '../../redux/Stores/TeacherReducer';


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
        <div className='flexcolumn' key={i}>
          <div className='flexrow' style={{marginLeft:'5%',marginBottom:15}}>
            <div className='flexcolumn'>
              <p className='section' style={{fontSize:18}}>Period</p>
              <p className='section' style={{marginLeft:18}}>{i}</p>
            </div>
            <div className='flexcolumn' >
              <p className='section' style={{fontSize:18}}>Subject</p>
              <select className="shortbox" name='gido' required id='subject'  onChange={(event) => this.handleChange(event,i.toString())}>
                <option value="" disabled defaultValue>-select-</option>
                {subjects.map((subject,index)=><option key={index} value={subject.value}>{subject.subject}</option>)}
              </select>
            </div>
            <div className='flexcolumn' style={{marginLeft:'10%'}}>                                                                                           
              <p className='section' style={{fontSize:18}}>Teacher assign</p>
              <select className="shortbox" required id='teacher' onChange={(event) => this.handleChange(event,i.toString())}>
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
      let update = Object.assign({}, {[event.target.id]: event.target.value});
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
        <div style={{ display: 'flex' }}>
          <Drawer />
          <div className='flexcolumn'>
            <Header />
            <div className='form' >
              <div className='flexcolumn' style={{marginLeft:25}}>
                <h1 className='titleform'>Timetable</h1>
                <div>
                  <div className='flexcolumn' style={{marginLeft:15,marginTop:'3%'}}>
                    <div className='flexrow'>
                      <div className='flexrow'>
                        <p className='section'>Enter Class</p>
                        <select className='shortbox' required onChange={this.handleChange} id='class'>
                          <option  value='' disabled defaultValue placeholder='-select-'>{' '}Maths</option>
                          <option value='lime'>Lime</option>
                          <option value='coconut'>Coconut</option>
                          <option value='mango'>Mango</option>
                        </select>
                      </div>
                      <div className='flexrow'>
                        <p className='section' style={{marginLeft:40}}>Enter Section</p>
                        <select className='shortbox' required onChange={this.handleChange} id='section'>
                          <option value='' disabled defaultValue placeholder='- select -'>{' '}123</option>
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
                      <DayPickerInput className='shortbox' style={{width:'20vw',height:'30px'}} onDayChange={(day) => this.handleDayChange(day)} placeholder='- select -'/>
                    </div>
                  </div>
                  
                  <div className='eventlistArea' style={{marginTop:'1%',paddingTop:'2%'}}>
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
        
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  teacher: state.teacher,
});
export default connect(mapStateToProps)(TimeTable);


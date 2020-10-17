import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Scrollbars } from 'react-custom-scrollbars';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import Drawer from '../../component/Drawer/Drawer';
import Header from '../../component/Header/Header';
import classes from '../../userData/GlobalData/classData'
import sections from '../../userData/GlobalData/sectionData'
import {
  marginBottom125vh,
  marginBottom65vh,
  marginLeft380vw,
  marginLeft200vw,
  marginLeft150vw,
  marginLeft130vw,
  marginLeft55vw,
  marginTop55vh,
  marginTop45vh,
  fontsize12vw
} from '../../styles/marginStyles'
import { image100vw } from '../../styles/imageStyles'

let numberofperiod = 5;
const subjects = [
  { subject: 'Math', value: 'math' },
  { subject: 'History', value: 'history' },
  { subject: 'Math', value: 'math' },

]



class TimeTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      class: '',
      section: '',
      date: '',
      trigger: false
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

  displayPeriod = () => {
    let period = [];
    for (let i = 1; i <= numberofperiod; i++)
      period.push(

        <div className='flexrow' key={i} style={Object.assign({}, marginBottom125vh, marginLeft55vw)}>
          <div className='flexcolumn'>
            <p className='section' style={fontsize12vw}>Period</p>
            <p className='section' style={{ marginLeft: '1.2vw', marginTop: '5.5vh' }}>{i}</p>
          </div>
          <div className='flexcolumn' style={marginLeft130vw} >
            <label htmlFor='starttime' className='section'>Start time: </label>
            <input type='time' id='starttime' className='shortbox' style={Object.assign({}, marginTop55vh, image100vw)} onChange={(event) => this.handleChange(event, i.toString())} />
          </div>
          <div className='flexcolumn' style={marginLeft150vw} >

            <label htmlFor='endtime' className='section'>End time: </label>
            <input type='time' id='endtime' className='shortbox' style={Object.assign({}, marginTop55vh, image100vw)} onChange={(event) => this.handleChange(event, i.toString())} />

          </div>
          <div className='flexcolumn' style={marginLeft200vw}>
            <p className='section' style={fontsize12vw}>Subject</p>
            <select className="shortbox" required id='subject' style={marginTop55vh} onChange={(event) => this.handleChange(event, i.toString())}>
              <option value="" defaultValue>{" "}-select-</option>
              {subjects.map((subject, index) => <option key={index} value={subject.value}>{subject.subject}</option>)}

            </select>
          </div>
        </div>)

    return (
      <div className='eventlistArea' style={{ marginTop: '8vh', paddingTop: '2%', width: '75vw' }}>
        <Scrollbars>
          <form>
            {period}
          </form>

          <button className='buttonshownothing'
            onClick={() => { numberofperiod = numberofperiod + 1; this.setState({ trigger: !this.state.trigger }) }}
            style={{ fontSize: '1vw', marginLeft: '45%', marginBottom: '1vh', background: 'white' }}> + Add More </button>
        </Scrollbars>
      </div>
    )
  }
  handleChange = (event, key) => {
    if (typeof [event.target.id].includes(key)) {
      let update = Object.assign({}, this.state[key], { [event.target.id]: event.target.value });
      if (key)
        this.setState({ [key]: update })
      else
        this.setState({ [event.target.id]: event.target.value });

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
    console.log(this.state.date)
    this.setState({ date: day.getDay() });
  }
  render() {
    return (
      <div className='dashboard'>
        <div className='flexrow'>
          <Drawer />
          <div className='flexcolumn'>
            <Header />
            <div className='form' >

              <h1 className='titleform'>Time table</h1>

              <div className='flexcolumn' style={{ marginLeft: '1.5vw', marginTop: '3%' }}>
                <div className='flexrow'>
                  <div className='flexrow' style={marginBottom65vh}>
                    <p className='section'>Enter Class</p>
                    <select className='shortbox' required onChange={this.handleChange} style={marginLeft130vw} id='class'>
                      <option value="" defaultValue>{" "}-select-</option>
                      {classes.map((eachclass, index) => <option key={index} value={eachclass.value}>{eachclass.name}</option>)}
                    </select>
                  </div>
                  <div className='flexrow' style={marginLeft380vw}>
                    <p className='section'>Enter Section</p>
                    <select className='shortbox' required onChange={this.handleChange} style={marginLeft130vw} id='section'>
                      <option value="" defaultValue>{" "}-select-</option>
                      {sections.map((section, index) => <option key={index} value={section.value}>{section.name}</option>)}
                    </select>
                  </div>
                </div>
                <div className='flexrow' style={marginTop45vh}>
                  <p className='section'>Choose Day</p>
                  <DayPickerInput className='shortbox' style={marginLeft130vw} onDayChange={(day) => this.handleDayChange(day)} placeholder='- select -' />
                </div>
              </div>

              <h1 className='titleform'>Time table</h1>

              <div className='flexcolumn' style={{ marginLeft: '1.5vw', marginTop: '3%' }}>
                <div className='flexrow'>
                  <div className='flexrow' style={marginBottom65vh}>
                    <p className='section'>Enter Class</p>
                    <select className='shortbox' required onChange={this.handleChange} style={marginLeft130vw} id='class'>
                      <option value="" defaultValue>{" "}-select-</option>
                      <option value='lime'>Lime</option>
                      <option value='coconut'>Coconut</option>
                      <option value='mango'>Mango</option>
                    </select>
                  </div>
                  <div className='flexrow' style={marginLeft380vw}>
                    <p className='section'>Enter Section</p>
                    <select className='shortbox' required onChange={this.handleChange} style={marginLeft130vw} id='section'>
                      <option value="" defaultValue>{" "}-select-</option>
                      <option value='maths'>maths</option>
                      <option value='english'>English</option>
                      <option value='science'>Science</option>
                      <option value='history'>History</option>
                      <option value='pe'>PE</option>
                    </select>
                  </div>
                </div>
                <div className='flexrow' style={marginTop45vh}>
                  <p className='section'>Choose Day</p>
                  <DayPickerInput className='shortbox' style={marginLeft130vw} onDayChange={(day) => this.handleDayChange(day)} placeholder='- select -' />
                </div>
              </div>

              {this.displayPeriod()}

              <div className='flexrow' style={marginTop45vh}>

                <input type='submit' value='Save' className='button' style={{ marginLeft: '27%' }} />
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
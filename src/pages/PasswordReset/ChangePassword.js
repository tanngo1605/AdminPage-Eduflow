import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Scrollbars} from 'react-custom-scrollbars';
import Drawer from '../../component/Drawer/Drawer';
import Header from '../../component/Header/Header';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import {loadData} from '../../redux/Stores/TeacherReducer';
import './TimeTable.styles.css';

const subjects = [
  {subject:'Math',value:'math'},
  {subject:'History',value:'history'},
  {subject:'Math',value:'math'},

]

class TimeTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  
  handleChange = (event, key) => {
    if (typeof [event.target.id].includes(key)) {
      let update = Object.assign({}, this.state[key], {[event.target.id]: event.target.value});
      if (key) 
        this.setState({[key]: update})  
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

  render() {
    
    
    return (
      <div className='dashboard'>
        <div style={{ display: 'flex' }}>
          <Drawer />
          <div className='flexcolumn'>
            <Header />
            <div className='form' >
              <div className='flexcolumn' style={{marginLeft:25}}>
                <h1 className='titleform'>Timetable</h1>
                
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


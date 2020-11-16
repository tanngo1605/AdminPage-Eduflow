import React, { Component } from 'react';
import { connect } from 'react-redux'
import {loadClassData,addClassData} from "../../../redux/Stores/ClassReducer";
import {loadTeacherData} from "../../../redux/Stores/TeacherReducer";
import Drawer from '../../../component/Drawer/Drawer'
import Header from '../../../component/Header/HeaderAdmin'
import {marginLeft130vw,marginBottom65vh} from '../../../styles/marginStyles'

class createClass extends Component {
  constructor (props) {
    super(props)
    this.state = {
      class:{
        class: '',
        section:'',
        roomno:'',
        teacher:'',
      },
    }  
  }

  componentDidMount() {
    this.props.dispatch(loadTeacherData());
    this.props.dispatch(loadClassData());
  }


  handleChange = (event) => {
    let update = Object.assign({},this.state.class,{[event.target.id]: event.target.value})
    this.setState({class:update})
    
  }

  handleSubmit = (event) => {
    event.preventDefault();
    document.getElementById('create-course-form').reset();
    this.props.dispatch(addClassData({value:this.state.class}))
    
    
  }

  render() {
    let teachers = this.props.teacher.filteredTeachers;
    
    return (
      <div className='dashboard'>
        <div className='flexrow'>
          <Drawer/>
          <div className='flexcolumn'>
            <Header/>
            <form className='form' onSubmit={this.handleSubmit} id='create-course-form'>
              
                <h1 className='titleform'>Create a new class</h1>
                <div className='flexrow' style={marginBottom65vh}>
                  <label htmlFor='class' className='section'>Enter Class</label>
                  <input type='text' id='class' required className='shortbox' style={marginLeft130vw} placeholder='Maths' onChange={this.handleChange} />
                </div>
                <div className='flexrow' style={marginBottom65vh}>
                  <label htmlFor='section' className='section'>Enter Section </label>
                  <input type='text' id='section' required className='shortbox' style={marginLeft130vw} placeholder='Type here' onChange={this.handleChange} />
                </div>
                <div className='flexrow' style={marginBottom65vh}>
                  <label htmlFor='roomno' className='section'>Room No </label>
                  <input type='text' id='roomno' required className='shortbox' style={marginLeft130vw} placeholder='Type here' onChange={this.handleChange}/>
                </div>
                <div className='flexrow' style={marginBottom65vh}>
                  <label htmlFor='roomno' className='section'>Class Teacher Name </label>
                  <select className="shortbox" required id='teacher' style={marginLeft130vw} onChange={this.handleChange}>
                    <option value="" defaultValue>{" "}-select-</option>
                    
                    {teachers&&teachers.map((teacher,index)=><option key={index} value={teacher.value}>{teacher.name}</option>)}
                    </select>
                </div>  
                

                <div className='flexrow' style={{marginLeft:'15vw',marginTop:'45vh'}}>
                  <input type='submit' value='Save' className='button'/>
                  <input type='reset' value='Reset' className='button'/>
                  
                </div>
              
            </form>
            
          </div>
        
      </div>  
    </div>
    );
  }
}
const mapStateToProps = (state) => ({
  class: state.class,
  teacher:state.teacher,
})
export default connect(mapStateToProps)(createClass);


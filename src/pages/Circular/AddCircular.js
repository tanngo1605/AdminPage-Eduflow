import React, { Component } from 'react';
import { connect } from 'react-redux'
import {loadCircularData,addCircularData} from "../../redux/Stores/CircularReducer";
import DayPickerInput from "react-day-picker/DayPickerInput";
import Dropzone from 'react-dropzone';
import { BsPlus } from "react-icons/bs";
import Drawer from '../../component/Drawer/Drawer'
import Header from '../../component/Header/Header'
import {marginLeft130vw,marginBottom125vh,marginBottom65vh} from '../../styles/marginStyles'

class AddCircular extends Component {
  constructor (props) {
    super(props)
    this.state = {
      circular:{
        subject: '',
        date:new Date(),
        files:'',
        key:Math.random().toString(),
      },
    }  
  }

  componentDidMount() {
    this.props.dispatch(loadCircularData());
    
  }

  onDrop = (files) => {
    if (files.length >1) return;
    let update = Object.assign({},this.state.circular,{files: files[0]})
    this.setState({circular:update})
  }
  handleChange = (event) => {
    let update = Object.assign({},this.state.circular,{[event.target.id]: event.target.value})
    this.setState({circular:update})
    
  }
  handleDayChange(day) {
    let update= Object.assign({},this.state.circular,{date: day})
    this.setState({circular: update});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    document.getElementById('create-course-form').reset();
    this.props.dispatch(addCircularData({value:this.state.circular}))
    this.props.history.push('/circular/circularlist');
    
    
  }

  render() {
    
    return (
      <div className='dashboard'>
        <div className='flexrow'>
          <Drawer/>
          <div className='flexcolumn'>
            <Header/>
            <form className='form' onSubmit={this.handleSubmit} id='create-course-form'>
                
                <h1 className='titleform'>Create a new class</h1>
                <div className='flexrow' style={marginBottom125vh}>
                  <label htmlFor='subject' className='section'>Subject</label>
                  <textarea type='text' id='subject' className='shortbox' style={Object.assign({},{height:'10vh'},marginLeft130vw)} placeholder='Type here' onChange={this.handleChange}></textarea>
                </div>
                <div className='flexrow' style={marginBottom65vh}>
                    <p className='section'>Date</p>
                    <DayPickerInput className='shortbox' style={marginLeft130vw} onDayChange={(day) => this.handleDayChange(day)} placeholder='- select -'/>
                </div>
                <div className='flexrow'>
                  <p className='section'>Attachment </p>
                  
                  <Dropzone onDrop={this.onDrop}>
                    {({getRootProps, getInputProps}) => (
                      <section className="flexrow" style={marginLeft130vw}>
                        <div {...getRootProps({ className:'attachment'})}>
                          <input {...getInputProps()} />
                            <BsPlus color="white" size={'1.5vw'} className='attachmentplusicon'/>
                            <p>Choose File</p>
                        </div>
                    
                      </section>
                    )}
                  </Dropzone>
                  
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
  circular: state.circular,
  
})
export default connect(mapStateToProps)(AddCircular);


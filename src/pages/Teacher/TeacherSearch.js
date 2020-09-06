import React, { Component } from 'react';
import {connect} from 'react-redux';
import Dropzone from 'react-dropzone'
import { NavLink} from 'react-router-dom'
import Drawer from '../../component/Drawer/Drawer'
import Header from '../../component/Header/Header'
import {loadTeacherData, filterTeacherData,deleteTeacherData} from "../../redux/Stores/TeacherReducer";
import { BsPencilSquare,BsPlus } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";
import {
  marginLeft250vw,
  marginLeft130vw,
  marginTop55vh,
  addaProfileAttachment,
  marginBottom130vhandTop10vh,
  marginTop110vh} from '../../styles/marginStyles'

class TeacherSearch extends Component {
  constructor (props) {
    super(props)
    this.state = {
      teachersearchinput:{
        name:'',
        classteacher:'',
        section:'',
        subject:'',
      },
    }
  }
  componentDidMount() {
    this.props.dispatch(loadTeacherData());
}

  onDrop = (files) => {
    if (files.length===0||files.length>1) return ;
    this.setState({files})
  }



  handleChange = (event) => {
    let updatesearch= Object.assign({},this.state.teachersearchinput,{[event.target.id]: event.target.value})
        
    this.setState({ teachersearchinput: updatesearch })
  }
  searchResult=(event)=>{
    event.preventDefault();
    
    setTimeout(()=>{
      
      this.props.dispatch(
        filterTeacherData(
          {
            name: this.state.teachersearchinput.name, 
            classteacher:this.state.teachersearchinput.classteacher,
            section:this.state.teachersearchinput.section,
            subject:this.state.teachersearchinput.subject
          }))}, 50);
  }
  

  render() {
    let teachers = this.props.teacher.filteredTeachers;
    
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
                    <p style={{color:'#FFFFFF'}}> Add a teacher </p>
                </NavLink>
                <form className='flexcolumn' onChange={this.searchResult} style={marginBottom130vhandTop10vh}>
                  <div className='flexrow'>
                    <div className='flexcolumn' style={marginLeft130vw} >
                      <label htmlFor='name' className='section'>Enter Teacher's Name </label>
                      <input type='text' id='name' className='shortbox' style={marginTop55vh} onChange={this.handleChange} />
                    </div>
                    <div className='flexcolumn' style={marginLeft250vw}>
                      <label htmlFor='classteacher' className='section' >Enter Class</label>
                      <input type='text' id='classteacher' className='shortbox' style={marginTop55vh} onChange={this.handleChange} />
                    </div>
                  </div>
                  <div className='flexrow' style={marginTop110vh}>
                    <div className='flexcolumn' style={marginLeft130vw}>
                      <label htmlFor='section' className='section' >Enter Section</label>
                      <input type='text' id='section' className='shortbox' style={marginTop55vh} onChange={this.handleChange} />
                    </div>
                    <div className='flexcolumn' style={marginLeft250vw}>
                      <label htmlFor='subject' className='section' >Enter Subject</label>
                      <input type='text' id='subject' className='shortbox' style={marginTop55vh}  onChange={this.handleChange} />
                    </div>
                  </div>
                </form>
                <div className='flexrow' style={{marginBottom:'3.5vh',marginLeft:"21vw"}}>
                  
                  <Dropzone onDrop={this.onDrop}>
                    {({getRootProps, getInputProps}) => (
                      <section className='flexrow'>
                        <div {...getRootProps({className: 'attachment'})}>
                          <input {...getInputProps()} />
                              <BsPlus color="white" size={'1.5vw'} className='attachmentplusicon'/>
                              <p>Import file</p>
                        </div>
                      </section>
                    )}
                  </Dropzone>
                  <div className="attachment" style={{marginLeft:'5vw'}}>
                    <BsPlus color="white" size={'1.5vw'} className='attachmentplusicon'/>
                    <p>Export file</p>
                  </div>
                </div>
                <div className='eventlistArea' style={{width:'70vw',textAlign:'center'}}>
                  <div className='headereventList'>
                    <p style={{width:'10%'}}>User ID</p>
                    <p style={{width:'30%'}}>Name of Teacher</p>
                    <p style={{width:'10%'}}>Class</p>
                    <p style={{width:'10%'}}>Section</p>
                    <p style={{width:'20%'}}>Delete</p>
                    <p style={{width:'20%'}}>Edit</p>
                  </div>

                  <div className="flexcolumn" style={{height:'30vh'}}>
                      {teachers&&teachers.map((teacher)=>

                        <div  className="bodyeventList"  key={teacher.key} >
                          
                          <p style={{width:'10%'}}>User ID</p>
                          <p style={{width:'30%'}}>{teacher.name}</p>
                          <p style={{width:'10%'}}>{teacher.classteacher}</p>
                          <p style={{width:'10%'}}>{teacher.section}</p>
                          <div className='itemcenter' style={{width:"20%"}}>
                            <MdDeleteForever size='1.5vw' onClick={()=>this.props.dispatch(deleteTeacherData(teacher))}/>
                          </div>
                          <div className='itemcenter' style={{width:"20%",marginTop:'0.1vh'}}>
                            <NavLink exact to={{pathname:'/teacher/profile',teacherdata:teacher}}>
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
  teacher: state.teacher
})

export default connect(mapStateToProps)(TeacherSearch);


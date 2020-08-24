import React, { Component } from 'react';
import {connect} from 'react-redux';
import Dropzone from 'react-dropzone'
import { NavLink} from 'react-router-dom'
import Drawer from '../../component/Drawer/Drawer'
import Header from '../../component/Header/Header'
import {loadData, filterByValue,deleteData} from "../../redux/Stores/StudentReducer";
import { BsPencilSquare,BsPlus } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";


class StudentSearch extends Component {
  constructor (props) {
    super(props)
    this.state = {
      studentseacrhinput:{
        name:'',
        class:'',
        section:'',
      },
      files:null,
    }
  }
  componentDidMount() {
    this.props.dispatch(loadData());
}
  onDrop = (files) => {
    if (files.length===0||files.length>1) return ;
    
    this.setState({files:files})
  }

  removeItem=(student)=>{
    
    
    this.props.dispatch(deleteData(student));
  }

  handleChange = (event) => {
    this.setState({
      studentsearchinput: {[event.target.id]: event.target.value}
    })
  }
  searchResult=(event)=>{
    event.preventDefault();
    setTimeout(()=>{
      this.props.dispatch(filterByValue({name: this.state.studentsearchinput.name, class:this.state.studentsearchinput.class,section:this.state.studentsearchinput.section}))}, 50);
  }
  

  render() {
    let students = this.props.student.filteredStudents;
    
    return (
      <div className='dashboard'>
        <div className='flexrow'>
          <Drawer/>
          <div className='flexcolumn'>
            <Header/>
            <div className='form'>
              <div style={{marginLeft:25}}>
                <h1 className='titleform'>Student Info</h1>
                <NavLink exact to={{pathname:'/student/profile'}} className='attachment' style={{backgroundColor:'#04044E',width:"150px",marginLeft:"60vw"}}>
                    <BsPlus color="white" size={18} style={{marginLeft:'6px',marginRight:'15px'}}/>
                    <p style={{color:'#FFFFFF'}}> Add a student </p>
                </NavLink>
                <form className='flexrow' onChange={this.searchResult} style={{marginBottom:20,marginTop:10}}>
                  <div>
                    <label htmlFor='name' className='section'>Enter Stud Name: </label>
                    <input type='text' id='name' className='shortbox' onChange={this.handleChange} />
                  </div>
                  <div style={{marginLeft:10}}>
                    <label htmlFor='class' className='section'>Enter Class:</label>
                    <input type='text' id='class' className='shortbox' onChange={this.handleChange} />
                  </div>
                  <div style={{marginLeft:10}}>
                    <label htmlFor='section' className='section'>Enter Section:</label>
                    <input type='text' id='section' className='shortbox' onChange={this.handleChange} />
                  </div>
                </form>
                <div className='flexrow' style={{marginBottom:20,paddingLeft:"25vw"}}>
                  
                  <Dropzone onDrop={this.onDrop}>
                    {({getRootProps, getInputProps}) => (
                      <section className='flexrow'>
                        <div {...getRootProps({className: 'attachment'})}>
                          <input {...getInputProps()} />
                              <BsPlus color="white" size={18} style={{marginRight:'15px',marginLeft:"6px",marginTop:"1px"}}/>
                              <p>Import file</p>
                        </div>
                      </section>
                    )}
                  </Dropzone>
                  <div className="attachment" style={{marginLeft:'5vw'}}>
                    <BsPlus color="white" size={18} style={{marginRight:'15px',marginLeft:"6px",marginTop:"1px"}}/>
                    <p>Export file</p>
                  </div>
                </div>
                <div className='eventlistArea' style={{width:'75vw'}}>
                  <div className='headereventList'>
                    <p style={{width:'10%',textAlign:'center'}}>User ID</p>
                    <p style={{width:'30%',textAlign:'center'}}>Name of Student</p>
                    <p style={{width:'10%',textAlign:'center'}}>Class</p>
                    <p style={{width:'10%',textAlign:'center'}}>Section</p>
                    <p style={{width:'20%',textAlign:'center'}}>Delete</p>
                    <p style={{width:'20%',textAlign:'center'}}>Edit</p>
                  </div>

                  <div className="flexcolumn" style={{height:'30vh'}}>
                      {students&&students.map((item)=>

                        <div className="flexrow" style={{paddingLeft:'15px',height:'20px'}}  key={item.key} >
                          
                          <p style={{width:'10%',textAlign:'center'}}>User ID</p>
                          <p style={{width:'30%',textAlign:'center'}}>{item.name}</p>
                          <p style={{width:'10%',textAlign:'center'}}>{item.class}</p>
                          <p style={{width:'10%',textAlign:'center'}}>{item.section}</p>
                          <div style={{width:"20%",display: 'flex',justifyContent:'center'}}>
                            <MdDeleteForever size={15} onClick={()=>this.removeItem(item)}/>
                          </div>
                          <div style={{width:"20%",marginTop:-1.5,display: 'flex',justifyContent:'center'}}>
                            <NavLink exact to={{pathname:'/student/profile',studentdata:item}}>
                              <BsPencilSquare size={15} color='black' />
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
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  student: state.student
})

export default connect(mapStateToProps)(StudentSearch);


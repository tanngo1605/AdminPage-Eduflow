import React, { Component } from 'react';
import {connect} from 'react-redux';
import Dropzone from 'react-dropzone'
import { NavLink} from 'react-router-dom'
import Drawer from '../../component/Drawer/Drawer'
import Header from '../../component/Header/Header'


import { BsPencilSquare,BsPlus } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";

const teachers=[
  {name:'Adam',class:'V',section:'HI',rollno:'25',address:'',classteacher:'',fathername:'',mothername:'',gender:'3211321',fatheroccupation:'312312',fathermobileno:'321312',othermobileno:'41321321',admission:'5464',image:null},
  {name:'Akhil',class:'H',section:'TL',rollno:'24',address:'',classteacher:'',fathername:'',mothername:'',gender:'3211321',fatheroccupation:'312312',fathermobileno:'321312',othermobileno:'3000',admission:'40',image:null},
  {name:'Adin',class:'H',section:'TL',rollno:'23',address:'',classteacher:'',fathername:'',mothername:'',gender:'3211321',fatheroccupation:'312312',fathermobileno:'321312',othermobileno:'3000',admission:'40',image:null},
]
let filteredteachers= teachers;


class TeacherSearch extends Component {
  constructor (props) {
    super(props)
    this.state = {
      student:{
        name:'',
        class:'',
        section:'',
      },
      trigger:false,
 
    }
    
  }
  onDrop = (files) => {
    this.setState({files})
  }

  removeItem=(teacher)=>{
    
    teachers.splice(teacher, 1);
    this.setState({trigger:true})
  }

  handleChange = (event) => {
    this.setState({
      student: {[event.target.id]: event.target.value}
    })
  }
  searchResult=(event)=>{
    event.preventDefault()
    setTimeout(()=>{
      filteredteachers=teachers.filter(teacher => {
        return (
          (teacher.name.toLowerCase().includes(this.state.student.name) ||
          teacher.section.toLowerCase().includes(this.state.student.section) ||
          teacher.class.toLowerCase().includes(this.state.student.class)) 
        );
      });
     
      if (!(this.state.student.name || this.state.student.section || this.state.student.class)) 
            filteredteachers=teachers;

      this.setState({trigger:true});
  },50)}
  

  render() {
    
    return (
      <div className='dashboard'>
        <div className='flexrow'>
          <Drawer/>
          <div className='flexcolumn'>
            <Header/>
            <div className='form'>
              <div style={{marginLeft:25}}>
                <div className='titleform'>Student Info</div>
                <NavLink exact to={{pathname:'/dashboard/student/teachersearch',studentdata:{}}} className='button' style={{backgroundColor:'#04044E',width:"150px",paddingTop:'8px',marginLeft:"60vw"}}>
                    <BsPlus color="white" size={18} style={{marginLeft:'15px',marginRight:'15px',marginTop:"1.5px"}}/>
                    <p style={{color:'#FFFFFF'}}> Add a teacher </p>
                </NavLink>
                <form className='flexrow' onChange={this.searchResult} style={{marginBottom:20,marginTop:10}}>
                  <div>
                    <label htmlFor='datefrom' className='section'>Enter Stud Name: </label>
                    <input type='text' id='name' className='box' onChange={this.handleChange} />
                  </div>
                  <div style={{marginLeft:10}}>
                    <label htmlFor='dateto' className='section'>Enter Section:</label>
                    <input type='text' id='class' className='box' onChange={this.handleChange} />
                  </div>
                  <div style={{marginLeft:10}}>
                    <label htmlFor='dateto' className='section'>Enter Class:</label>
                    <input type='text' id='section' className='box' onChange={this.handleChange} />
                  </div>
                </form>
                <div className='flexrow' style={{marginBottom:20,paddingLeft:"25vw"}}>
                  
                  <Dropzone onDrop={this.onDrop}>
                    {({getRootProps, getInputProps}) => (
                      <section className='flexrow'>
                        <div {...getRootProps({className: 'attachment'})}>
                          <input {...getInputProps()} />
                              <BsPlus color="white" size={18} style={{marginRight:'5px',marginLeft:"10px",marginTop:"1px"}}/>
                              <p>Import file</p>
                        </div>
                      </section>
                    )}
                  </Dropzone>
                  <div className="attachment" style={{marginLeft:'5vw'}}>
                    <BsPlus color="white" size={18} style={{marginRight:'5px',marginLeft:"10px",marginTop:"1px"}}/>
                    <p>Export file</p>
                  </div>
                </div>
                <div className='eventlistArea' style={{width:'70vw'}}>
                  <div className='headereventList'>
                    <p style={{width:'10%',textAlign:'center'}}>User ID</p>
                    <p style={{width:'30%',textAlign:'center'}}>Name of Student</p>
                    <p style={{width:'10%',textAlign:'center'}}>Class</p>
                    <p style={{width:'10%',textAlign:'center'}}>Section</p>
                    <p style={{width:'20%',textAlign:'center'}}>Delete</p>
                    <p style={{width:'20%',textAlign:'center'}}>Edit</p>
                  </div>

                  <div className="flexcolumn" style={{height:'30vh'}}>
                      {filteredteachers&&filteredteachers.map((item)=>

                        <div className="flexrow" style={{paddingLeft:'15px',height:'20px'}} key={item.rollno}>
                  
                          <p style={{width:'10%',textAlign:'center'}}>User ID</p>
                          <p style={{width:'30%',textAlign:'center'}}>{item.name}</p>
                          <p style={{width:'10%',textAlign:'center'}}>{item.class}</p>
                          <p style={{width:'10%',textAlign:'center'}}>{item.section}</p>
                          <div style={{width:"20%",display: 'flex',justifyContent:'center'}}>
                            <MdDeleteForever size={15} onClick={()=>this.removeItem(item)}/>
                          </div>
                          <div style={{width:"20%",marginTop:-1.5,display: 'flex',justifyContent:'center'}}>
                            <NavLink exact to={{pathname:'/dashboard/student/teachersearch',studentdata:item}}>
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
  teacher: state.teacher
})

export default connect(mapStateToProps)(TeacherSearch);


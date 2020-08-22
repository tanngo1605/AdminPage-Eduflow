import React, { Component } from 'react';
import {connect} from 'react-redux';
import Dropzone from 'react-dropzone'
import { NavLink} from 'react-router-dom'
import Drawer from '../../component/Drawer/Drawer'
import Header from '../../component/Header/Header'
import {loadData, filterByValue,deleteData} from "../../redux/Stores/TeacherReducer";
import { BsPencilSquare,BsPlus } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";


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
    this.props.dispatch(loadData());
}
  onDrop = (files) => {
    if (files.length===0||files.length>1) return ;
    this.setState({files})
  }

  removeItem=(teacher)=>{
    
    
    this.props.dispatch(deleteData(teacher));
  }

  handleChange = (event) => {
    let updatesearch= Object.assign({},this.state.teachersearchinput,{[event.target.id]: event.target.value})
        
    this.setState({
      teachersearchinput: updatesearch
    })
  }
  searchResult=(event)=>{
    event.preventDefault();
    
    setTimeout(()=>{
      
      this.props.dispatch(
        filterByValue(
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
              <div style={{marginLeft:25}}>
                <div className='titleform'>Teacher Info</div>
                <NavLink exact to={{pathname:'/teacher/profile'}} className='attachment' style={{backgroundColor:'#04044E',width:"150px",marginLeft:"60vw"}}>
                    <BsPlus color="white" size={18} style={{marginLeft:'6px',marginRight:'15px'}}/>
                    <p style={{color:'#FFFFFF'}}> Add a teacher </p>
                </NavLink>
                <form className='flexcolumn' onChange={this.searchResult} style={{marginBottom:20,marginTop:10}}>
                  <div className='flexrow' style={{marginBottom:'2vh'}}>
                    <div className='flexcolumn' style={{marginLeft:"12vw"}} >
                      <label htmlFor='name' className='section' style={{width:"20vw"}}>Enter Teacher's Name </label>
                      <input type='text' id='name' className='box' onChange={this.handleChange} />
                    </div>
                    <div className='flexcolumn' style={{marginLeft:"5vw"}}>
                      <label htmlFor='classteacher' className='section'>Enter Class</label>
                      <input type='text' id='classteacher' className='box' onChange={this.handleChange} />
                    </div>
                  </div>
                  <div className='flexrow'>
                    <div className='flexcolumn' style={{marginLeft:"12vw"}}>
                      <label htmlFor='section' className='section'>Enter Section</label>
                      <input type='text' id='section' className='box' onChange={this.handleChange} />
                    </div>
                    <div className='flexcolumn' style={{marginLeft:"5vw"}}>
                      <label htmlFor='subject' className='section'>Enter Subject</label>
                      <input type='text' id='subject' className='box' onChange={this.handleChange} />
                    </div>
                  </div>
                </form>
                <div className='flexrow' style={{marginBottom:20,marginLeft:"21vw"}}>
                  
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
                <div className='eventlistArea' style={{width:'70vw'}}>
                  <div className='headereventList'>
                    <p style={{width:'10%',textAlign:'center'}}>User ID</p>
                    <p style={{width:'30%',textAlign:'center'}}>Name of Teacher</p>
                    <p style={{width:'10%',textAlign:'center'}}>Class</p>
                    <p style={{width:'10%',textAlign:'center'}}>Section</p>
                    <p style={{width:'20%',textAlign:'center'}}>Delete</p>
                    <p style={{width:'20%',textAlign:'center'}}>Edit</p>
                  </div>

                  <div className="flexcolumn" style={{height:'30vh'}}>
                      {teachers&&teachers.map((item)=>

                        <div  className="flexrow" style={{paddingLeft:'15px',height:'20px'}}  key={item.key} >
                          
                          <p style={{width:'10%',textAlign:'center'}}>User ID</p>
                          <p style={{width:'30%',textAlign:'center'}}>{item.name}</p>
                          <p style={{width:'10%',textAlign:'center'}}>{item.class}</p>
                          <p style={{width:'10%',textAlign:'center'}}>{item.section}</p>
                          <div style={{width:"20%",display: 'flex',justifyContent:'center'}}>
                            <MdDeleteForever size={15} onClick={()=>this.removeItem(item)}/>
                          </div>
                          <div style={{width:"20%",marginTop:-1.5,display: 'flex',justifyContent:'center'}}>
                            <NavLink exact to={{pathname:'/teacher/profile',teacherdata:item}}>
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


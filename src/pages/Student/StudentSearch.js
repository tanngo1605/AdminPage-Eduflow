import React, { Component } from 'react';
import {connect} from 'react-redux';
import Dropzone from 'react-dropzone'
import { NavLink} from 'react-router-dom'
import Drawer from '../../component/Drawer/Drawer'
import Header from '../../component/Header/Header'
import {loadData, filterByValue,deleteData} from "../../redux/Stores/StudentReducer";
import { BsPencilSquare,BsPlus } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";
import * as xlsx from 'xlsx';
import {marginTop55vh,marginLeft25vw,addaProfileAttachment,marginBottom13vhandTop1vh} from '../../styles/globalStyles'
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
    var f = files[0];
    console.log(files)
    var reader = new FileReader();
    reader.onload = function (e) {
        var data = e.target.result;
        let readedData = xlsx.read(data, {type: 'binary'});
        const wsname = readedData.SheetNames[0];
        const ws = readedData.Sheets[wsname];

        /* Convert array to json*/
        const dataParse = xlsx.utils.sheet_to_json(ws, {header:1});
        console.log(dataParse);
    };
    reader.readAsBinaryString(f)
    this.setState({files:files})
  }

  handleChange = (event) => {
    this.setState({studentsearchinput: {[event.target.id]: event.target.value}})
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
              
                <h1 className='titleform'>Student Info</h1>
                <NavLink exact to={{pathname:'/student/profile'}} className='attachment' style={addaProfileAttachment}>
                    <BsPlus color="white" size={'1.5vw'} className='attachmentplusicon'/>
                    <p style={{color:'#FFFFFF'}}> Add a student </p>
                </NavLink>
                <form className='flexrow' onChange={this.searchResult} style={marginBottom13vhandTop1vh}>
                  <div className='flexrow'>
                    <label htmlFor='name' className='section'>Enter Stud Name: </label>
                    <input type='text' id='name' className='shortbox' style={marginTop55vh} onChange={this.handleChange} />
                  </div>
                  <div className='flexrow' style={marginLeft25vw}>
                    <label htmlFor='class' className='section'>Enter Class:</label>
                    <input type='text' id='class' className='shortbox' style={marginTop55vh} onChange={this.handleChange} />
                  </div>
                  <div className='flexrow' style={marginLeft25vw}>
                    <label htmlFor='section' className='section'>Enter Section:</label>
                    <input type='text' id='section' className='shortbox' style={marginTop55vh} onChange={this.handleChange} />
                  </div>
                </form>
                <div className='flexrow' style={marginLeft25vw}>
                  
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
                <div className='eventlistArea' style={{width:'75vw',marginTop:'3vh'}}>
                  <div className='headereventList'>
                    <p className='textaligncenter' style={{width:'10%'}}>User ID</p>
                    <p className='textaligncenter' style={{width:'30%'}}>Name of Student</p>
                    <p className='textaligncenter' style={{width:'10%'}}>Class</p>
                    <p className='textaligncenter' style={{width:'10%'}}>Section</p>
                    <p className='textaligncenter' style={{width:'20%'}}>Delete</p>
                    <p className='textaligncenter' style={{width:'20%'}}>Edit</p>
                  </div>

                  <div className="flexcolumn" style={{height:'30vh'}}>
                      {students&&students.map((student)=>

                        <div className="flexrow" style={{paddingLeft:'1vw',height:'3.5vh'}}  key={student.key} >
                          
                          <p style={{width:'10%',textAlign:'center'}}>User ID</p>
                          <p style={{width:'30%',textAlign:'center'}}>{student.name}</p>
                          <p style={{width:'10%',textAlign:'center'}}>{student.class}</p>
                          <p style={{width:'10%',textAlign:'center'}}>{student.section}</p>
                          <div className='itemcenter' style={{width:"20%"}}>
                            <MdDeleteForever size='1.5vw' onClick={()=>this.props.dispatch(deleteData(student))}/>
                          </div>
                          <div className='itemcenter' style={{width:"20%",marginTop:'0.1vh'}}>
                            <NavLink exact to={{pathname:'/student/profile',studentdata:student}}>
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
  student: state.student
})

export default connect(mapStateToProps)(StudentSearch);


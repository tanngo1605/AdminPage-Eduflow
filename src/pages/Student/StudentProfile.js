import React,{Component} from 'react';
import {connect} from 'react-redux';
import {addData,loadData,modifyData} from "../../redux/Stores/StudentReducer";
import Drawer from '../../component/Drawer/Drawer'
import Header from '../../component/Header/Header'
import studentprofiledata from '../../userData/StudentProfileData' ;


class StudentProfile extends Component {

  constructor (props) {
    super(props)
    if (props.location.studentdata) 
      this.state = {
        student:props.location.studentdata,
        edit:false
      }
      
    else
        this.state={
          student:{
            name:'',
            class:'',
            section:'',
            rollno:'',
            address:'',
            classteacher:'',
            fathername:'',
            mothername:'',
            gender:'',
            fatheroccupation:'',
            fathermobileno:'',
            othermobileno:'',
            admission:'',
            image:null,
            key:Math.random().toString()
          },
          edit:true

      }
  }
  componentDidMount() {
    this.props.dispatch(loadData());
}
  
  displayImage = () =>{
    if (this.state.edit===false) return <div className='profileimage'><img src={this.state.student.image} alt='' className='profileimagepreview' /></div>
    
    if (this.state.student.image!=null)
        return ( 
            <div className='profileimage'>
                <label htmlFor='image'><img src={this.state.student.image} alt='' className='profileimagepreview' /></label>
                <input type='file' id='image' onChange={this.handleChange} accept='image/*'/>   
            </div>
        )
    return (
            <div>
                <label htmlFor='image' className='profileimage'></label>
                <input type='file' id='image' onChange={this.handleChange} accept='image/*'/>
            </div>
        )
    }
  handleChange = (event) => {
    let update;
    if (event.target.id==='image')
        update= Object.assign({},this.state.student,{image: URL.createObjectURL(event.target.files[0])})
    else 
        update= Object.assign({},this.state.student,{[event.target.id]: event.target.value})
    this.setState({student:update});
  }
  handleSubmit = (event) => {
    
    if (this.props.location.studentdata) {
      this.props.dispatch(modifyData({value:this.state.student}))
      this.props.history.push('/student');
    }
    else {
      this.props.dispatch(addData({value:this.state.student}));
      this.props.history.push('/student');
    }
  }

  render(){
   
   return(
   <div className='dashboard'>
    <div className='flexrow'>
      <Drawer/>
      <div className='flexcolumn'>
          <Header/>
          <div className='form'>
            <div style={{marginLeft:25}}>
                <h1 className='titleform'>Student Profile </h1>
                {(this.state.edit)?
                  (
                      <div className='flexrow'>
                              
                          {this.displayImage()}
                          <div className='flexcolumn'>
                              <div className='flexcolumn'>
                                  {studentprofiledata.map((item)=>
                                      <div key={item.id} className='flexrow' style={{marginBottom:'0.3vh'}}>
                                          <label htmlFor={item.id} className='section' style={sectionStyle}>{item.content} </label>
                                          <input type={item.type} id={item.id} placeholder={this.state.student[item.id]} className='shortbox' onChange={this.handleChange} />
                                      </div>
                                  )}
                              </div>
                              <div className='flexrow' style={{marginTop:'2%'}}>
                                  <input type='button' value='Edit' className='button' style={{marginLeft:'5%'}} onClick={()=>{console.log('You have gone to edit page or havent')}}/>
                                  
                                <input type='button' value='Save' className='button' style={{marginLeft:'15%'}} onClick={(event)=>this.handleSubmit(event)}/>
                                  
                              </div>
                          </div>
                      </div>
                  )
                  :
                  (
                      <div className='flexrow'>
                  
                          {this.displayImage()}
                          <div className='flexcolumn'>
                              <div className='flexcolumn'>
                                  {studentprofiledata.map((item)=>
                                      <div key={item.id} className='flexrow' style={{marginBottom:'1vh'}}>
                                          <div className='section' style={sectionStyle}>{item.content} </div>
                                          <div className='shortbox' style={{backgroundColor:'#F2F4F7'}}>{this.state.student[item.id]}</div> 
                                      </div>
                                  )}
                              </div>
                              <div className='flexrow' style={{marginTop:'2%'}}>
                                  <input type='button' value='Edit' className='button' style={{marginLeft:'5%'}} onClick={()=>{this.setState({edit:true})}}/>
                                  <input type='submit' value='Save' className='button' style={{marginLeft:'15%'}} onClick={()=>console.log('You are not editing yet')}/>
                              </div>
                          </div>
                      </div>
                  )
              }
                    
                
            </div>
          </div>
          

      </div>
    </div>
   </div>
  )}
};

const mapStateToProps = (state) => ({
  student: state.student
})

export default connect(mapStateToProps)(StudentProfile);

const sectionStyle = {
    fontSize: '15px',
    width:'200px'
};
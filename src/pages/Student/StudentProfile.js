import React,{Component} from 'react';
import {connect} from 'react-redux';
import {addData,loadData} from "../../redux/Stores/StudentReducer";
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
          },
          edit:true

      }
  }
  componentDidMount() {
    this.props.dispatch(loadData());
}
  
  displayImage = () =>{
    if (this.state.image!=null)
        return ( 
            <div className='profileimage'>
                <label htmlFor='image' className='profileimage'><img src={this.state.image} alt='' style={{width:'150px',height:'150px',borderRadius:'50%'}} /></label>
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
    if (event.target.id==='image')
        this.setState({image: URL.createObjectURL(event.target.files[0])});
    else
        this.setState({[event.target.id]: event.target.value})
  }
  handleSubmit = (event) => {
    
    
    if (this.props.location.studentdata) {
      this.props.history.push('/dashboard/student');
    }
    else {
      this.props.dispatch(addData({value:this.state.student}));
      this.props.history.push('/dashboard/student');
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
                <div className='titleform'>Student Profile </div>
                {(this.state.edit)?
                  (
                      <div className='flexrow'>
                              
                          {this.displayImage()}
                          <div className='flexcolumn' style={{marginLeft:100}}>
                              <div className='flexcolumn'>
                                  {studentprofiledata.map((item)=>
                                      <div key={item.id} className='flexrow' style={{marginBottom:'10px'}}>
                                          <label htmlFor={item.id} className='section' style={boxStyle}>{item.content} </label>
                                          <input type={item.type} id={item.id} placeholder={this.state.student[item.id]} className='box' onChange={this.handleChange} />
                                      </div>
                                  )}
                              </div>
                              <div className='flexrow' style={{marginTop:'2%'}}>
                                  <input type='button' value='Edit' className='button' style={{marginLeft:'10%',width:'100px'}} onClick={()=>{console.log('You have gone to edit page or havent')}}/>
                                  
                                <input type='button' value='Save' className='button' style={{marginLeft:'25%',width:'100px'}} onClick={(event)=>this.handleSubmit(event)}/>
                                  
                              </div>
                          </div>
                      </div>
                  )
                  :
                  (
                      <div className='flexrow'>
                  
                          {this.displayImage()}
                          <div className='flexcolumn' style={{marginLeft:100}}>
                              <div className='flexcolumn'>
                                  {studentprofiledata.map((item)=>
                                      <div key={item.id} className='flexrow' style={{marginBottom:'10px'}}>
                                          <div className='section' style={boxStyle}>{item.content} </div>
                                          <div className='box' style={{backgroundColor:'#F2F4F7'}}>{this.state.student[item.id]}</div> 
                                      </div>
                                  )}
                              </div>
                              <div className='flexrow' style={{marginTop:'2%'}}>
                                  <input type='button' value='Edit' className='button' style={{marginLeft:'10%',width:'100px'}} onClick={()=>{this.setState({edit:true})}}/>
                                  <input type='submit' value='Save' className='button' style={{marginLeft:'25%',width:'100px'}} onClick={()=>console.log('You are not editing yet')}/>
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

const boxStyle = {
    fontSize: '15px',
    width:'200px'
};
import React,{Component} from 'react';
import {connect} from 'react-redux';
import {addData,loadData,modifyData} from "../../redux/Stores/TeacherReducer";
import Drawer from '../../component/Drawer/Drawer';
import Header from '../../component/Header/Header';
//import DayPicker from 'react-day-picker';
import teacherprofiledata from '../../userData/TeacherProfileData'; 



class TeacherProfile extends Component {

  constructor (props) {
    super(props)
    if (props.location.teacherdata) 
      this.state = {
        teacher:props.location.teacherdata,
        edit:false
      }
      
    else {
        this.state={
          teacher:{
            name:'',
            dateofbirth:'',
            gender:'',
            address:'',
            phone:'',
            classteacher:'',
            subject:'',
            role:'',
            image:'',
            key:Math.random().toString(),
          },
          edit:true

      }
    }
  }
  componentDidMount(){
    this.props.dispatch(loadData());
  }
  displayImage = () =>{
    if (this.state.edit===false) return <div className='profileimage'><img src={this.state.teacher.image} alt='' className='profileimagepreview' /></div>
    if (this.state.teacher.image!=null)
        return ( 
            <div className='profileimage'>
                <label htmlFor='image'><img src={this.state.image} alt='' className='profileimagepreview' /></label>
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
        update= Object.assign({},this.state.teacher,{image: URL.createObjectURL(event.target.files[0])})
    else
        update= Object.assign({},this.state.teacher,{[event.target.id]: event.target.value})
    this.setState({teacher:update})
  }
  handleSubmit = (event) => {
    if (this.props.location.teacherdata) {
        this.props.dispatch(modifyData({value:this.state.teacher}))
        this.props.history.push('/teacher');
      }
    else {
        
        this.props.dispatch(addData({value:this.state.teacher}));
        this.props.history.push('/teacher');
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
            
                <h1 className='titleform'>Teacher Profile </h1>
                {(this.state.edit)?
                  (
                      <div className='flexrow'>
                              
                          {this.displayImage()}
                          <div className='flexcolumn'>
                              <div className='flexcolumn'>
                                  {teacherprofiledata.map((item)=>
                                      <div key={item.id} className='flexrow' style={{marginBottom:'1vh'}}>
                                          <label htmlFor={item.id} className='section'>{item.content} </label>
                                          <input type={item.type} id={item.id} placeholder={this.state.teacher[item.id]} className='shortbox' onChange={this.handleChange} />
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
                                  {teacherprofiledata.map((item)=>
                                      <div key={item.id} className='flexrow' style={{marginBottom:'1vh'}}>
                                          <div className='section'>{item.content} </div>
                                          <div className='shortbox' style={{backgroundColor:'#F2F4F7'}}>{this.state.teacher[item.id]}</div> 
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
  )}
};
const mapStateToProps = (state) => ({
    teacher: state.teacher
  })
  
export default connect(mapStateToProps)(TeacherProfile);


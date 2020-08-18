import React,{Component} from "react";
import Drawer from "../../component/Drawer/Drawer"
import Header from "../../component/Header/Header"
import DayPicker from 'react-day-picker';
import teacherprofiledata from "../../userData/TeacherProfileData" 
import "./TeacherProfile.styles.css"

class TeacherProfile extends Component {

  constructor (props) {
    super(props)
    this.state = {
      name: '',
      dateofbirth:'',
      gender:'',
      address:'',
      phone:'',
      classteacher:'',
      subject:'',
      role:'',
      image:null,  
    }
  }
  //<AiOutlineClose style={{width:"25px",height:"25px"}} onClick={()=>this.setState({image:null})}/>
  displayImage = () =>{
    if (this.state.image!=null){
        return (
            
            <div className='profileimage'>
                
                <label htmlFor='image' className='profileimage'><img src={this.state.image} style={{width:"150px",height:"150px",borderRadius:"50%"}} /></label>
                <input type="file" id='image' onChange={this.handleChange} accept="image/*"/>
                  
            </div>
            
        )
    }
    else {
        return (
            <div>

                <label htmlFor='image' className='profileimage'></label>
                <input type="file" id='image' onChange={this.handleChange} accept="image/*"/>
            </div>
        )
    }
}
  handleChange = (event) => {
    if (event.target.id=='image'){
        this.setState({
            image: URL.createObjectURL(event.target.files[0])
          });
    }
    else
    {
        this.setState({[event.target.id]: event.target.value})
    }
  }
  handleSubmit = (event) => {
    event.preventDefault();
    document.getElementById("create-course-form").reset();
    
  }

  render(){
      console.log(teacherprofiledata);
   return(
   <div className="dashboard">
    <div className="flexrow">
      <Drawer/>
      <div className='flexcolumn'>
          <Header/>
          <form className="form" onSubmit={this.handleSubmit} id="create-course-form">
            <div style={{marginLeft:25}}>
                <div style={{color:'#262F56',fontSize:18,fontWeight:'bold',marginBottom:"30px",marginTop:"20px"}}>Teacher Profile </div>
                <div className="flexrow">
                    <div className="flexrow" style={{marginLeft:25}}>
                        {this.displayImage()}
                    </div>
            
                    <div className='flexcolumn' style={{marginLeft:100}}>
                        <div className='flexcolumn'>
                            {teacherprofiledata.map((item)=>
                                <div>
                                    <label htmlFor={item.id} className='section' style={boxStyle}>{item.content} </label>
                                    <input type={item.type} id={item.id} className="box" onChange={this.handleChange} />
                                </div>
                            )}
                        </div>
                        <div className="flexrow" style={{marginTop:"10%"}}>
                            <input type="submit" value="Edit" className="button" style={{marginLeft:"10%",width:"100px"}}/>
                            <input type="reset" value="Reset" className="button" style={{marginLeft:"25%",width:"100px"}} />
                        </div>
                    </div>
                </div>
            </div>
          </form>
          

      </div>
    </div>
   </div>
  )}
};

export default TeacherProfile;

const boxStyle = {
    fontSize: '15px',
    width:'200px'
};
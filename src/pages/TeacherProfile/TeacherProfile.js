import React,{Component} from "react";
import Drawer from "../../component/Drawer/Drawer"
import Header from "../../component/Header/Header"
import DayPicker from 'react-day-picker';
import teacherprofiledata from "../../userData/TeacherProfileData" 
import "./TeacherProfile.styles.css"

const teacher={
    'Adam':{name:'Adam',dateofbirth:'29/06/99',gender:'Male',address:'',phone:'',classteacher:'',subject:'',role:'',image:null,edit:false},
    'David':{name:'Adam',dateofbirth:'29/06/99',gender:'Male',address:'',phone:'',classteacher:'',subject:'',role:'',image:null,edit:false},
}

class TeacherProfile extends Component {

  constructor (props) {
    super(props)
    this.state = teacher['Adam'];
  }
  componentDidMount(){
    
    
      
  }
  //<AiOutlineClose style={{width:"25px",height:"25px"}} onClick={()=>this.setState({image:null})}/>
  displayImage = () =>{
    if (this.state.image!=null)
        return ( 
            <div className='profileimage'>
                <label htmlFor='image' className='profileimage'><img src={this.state.image} style={{width:"150px",height:"150px",borderRadius:"50%"}} /></label>
                <input type="file" id='image' onChange={this.handleChange} accept="image/*"/>   
            </div>
        )
    return (
            <div>
                <label htmlFor='image' className='profileimage'></label>
                <input type="file" id='image' onChange={this.handleChange} accept="image/*"/>
            </div>
        )
    }
  handleChange = (event) => {
    if (event.target.id=='image')
        this.setState({image: URL.createObjectURL(event.target.files[0])});
    else
        this.setState({[event.target.id]: event.target.value})
  }
  handleSubmit = (event) => {
    teacher['Adam']=this.state;
    event.preventDefault();
    document.getElementById("create-course-form").reset();
    
    this.setState({edit:true});
    console.log(this.state.edit);

  }

  render(){
   return(
   <div className="dashboard">
    <div className="flexrow">
      <Drawer/>
      <div className='flexcolumn'>
          <Header/>
          <div className="form">
            <div style={{marginLeft:25}}>
                <div style={{color:'#262F56',fontSize:18,fontWeight:'bold',marginBottom:"30px",marginTop:"20px"}}>Teacher Profile </div>
                {(this.state.edit)?
                    (
                        <form className="flexrow" onSubmit={this.handleSubmit} id="create-course-form">
                                
                            {this.displayImage()}
                            <div className='flexcolumn' style={{marginLeft:100}}>
                                <div className='flexcolumn'>
                                    {teacherprofiledata.map((item)=>
                                        <div className='flexrow' style={{marginBottom:"10px"}}>
                                            <label htmlFor={item.id} className='section' style={boxStyle}>{item.content} </label>
                                            <input type={item.type} id={item.id} placeholder={teacher['Adam'][item.id]} className="box" onChange={this.handleChange} />
                                        </div>
                                    )}
                                </div>
                                <div className="flexrow" style={{marginTop:"10%"}}>
                                    <input type="button" value="Edit" className="button" style={{marginLeft:"10%",width:"100px"}} onClick={()=>{console.log('da chay')}}/>
                                    <input type="submit" value="Save" className="button" style={{marginLeft:"25%",width:"100px"}} />
                                </div>
                            </div>
                        </form>
                    )
                    :
                    (
                        <div className="flexrow">
                    
                            {this.displayImage()}
                            <div className='flexcolumn' style={{marginLeft:100}}>
                                <div className='flexcolumn'>
                                    {teacherprofiledata.map((item)=>
                                        <div className='flexrow' style={{marginBottom:"10px"}}>
                                            <div className='section' style={boxStyle}>{item.content} </div>
                                            <div className="box"><p>{teacher['Adam'][item.id]}</p></div> 
                                        </div>
                                    )}
                                </div>
                                <div className="flexrow" style={{marginTop:"10%"}}>
                                    <input type="button" value="Edit" className="button" style={{marginLeft:"10%",width:"100px"}} onClick={()=>{this.setState({edit:true})}}/>
                                    <input type="submit" value="Save" className="button" style={{marginLeft:"25%",width:"100px"}} />
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

export default TeacherProfile;

const boxStyle = {
    fontSize: '15px',
    width:'200px'
};
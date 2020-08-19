import React,{Component} from "react";
import Modal from 'react-modal';
import Dropzone from 'react-dropzone';
import {Scrollbars} from 'react-custom-scrollbars';
import {AiOutlineExclamationCircle,AiOutlineCalendar,AiOutlineFileText} from "react-icons/ai";
import Drawer from "../../component/Drawer/Drawer"
import Header from "../../component/Header/Header"
import './Gallery.styles.css'

const todayDate=new Date();
const imagegallery=[];

class TeacherProfile extends Component {

  constructor (props) {
    super(props)
    this.state = {
        images:{image:null,imagesize:' '},
        modal:false,
    }
  }
  componentWillMount() {
    Modal.setAppElement('body');
  }

  onDrop = (images) => {
    this.setState({images:{image:images[0],imagesize:images[0].size},modal:true})
  }

  displayImage = () =>{
    if (this.state.images.image!=null) return (<img src={URL.createObjectURL(this.state.images.image)} style={{width:'200px',height:"100px",marginLeft:"30px"}} />)

    return (<div style={{width:'200px',height:"100px",marginLeft:"30px"}}></div>)
  }

  addImage=()=>{
    if (this.state.images.image==null) return ;
    imagegallery.push({image:this.state.images.image,imagesize:this.state.images.imagesize,date:todayDate.toLocaleDateString()});
    this.setState({images:{image:null,imagesize:''},modal:false})
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
                <div style={{color:'#262F56',fontSize:18,fontWeight:'bold',marginBottom:"30px",marginTop:"20px"}}> Gallery </div>
                <div className='attachment' onClick={()=>this.setState({modal:true})}>Upload Photo</div>
                <div style={{marginTop:"20px",height:"70vh",width:"80vw"}}>
                    <Scrollbars>
                     <div className='gallerylayout'>
                        {imagegallery.map((item)=>
                            <div className='flexcolumn' style={{marginBottom:'20px',marginRight:"40px"}}>
                                <div style={{backgroundColor:'white',width:'200px',height:"150px"}}><img src={URL.createObjectURL(item.image)} style={{width:'200px',height:"150px"}} /></div>
                                <div style={{color:'#262F56',fontSize:14}}>{item.date}</div>
                                <div style={{color:'#262F56',fontSize:14,marginTop:"3px"}}>{item.imagesize} bytes</div>
                            </div>
                        )}
                        </div>
                    </Scrollbars>
                    
                </div>
            </div>
          </div>
          <Modal 
            isOpen={this.state.modal} 
            onRequestClose={()=>this.setState({images:{image:null,imagesize:''},modal:false})} 
            className="Modal"> 
            <div className='headermodal' style={{textAlign:'center',color:'#262F56',fontWeight:'bold'}}>Upload file</div>
            <div className="flexrow" style={{marginTop:"20px"}}>
                {this.displayImage()}
                <div className="flexcolumn" style={{marginLeft:"70px",marginTop:"10px"}}>
                    <div className="flexrow">
                        <AiOutlineExclamationCircle size={20} color='#8C96AB'/>
                        <p style={{color:'#8C96AB',fontSize:16,marginTop:-2,marginLeft:30}}>{this.state.images.imagesize} bytes</p>
                    </div>
                    <div className="flexrow" >
                        <AiOutlineCalendar size={20} color='#8C96AB'/>
                        <p style={{color:'#8C96AB',fontSize:16,marginTop:-2,marginLeft:30}}>{todayDate.toLocaleDateString()}</p>
                    </div>
                    <div className="flexrow">
                        <AiOutlineFileText size={20} color='#8C96AB'/>
                        <p style={{color:'#8C96AB',fontSize:16,marginTop:-2,marginLeft:30}}>Thong tin</p>
                    </div>

                </div>
            </div>
            <div className="flexrow" style={{justifyContent:'space-around',marginTop:"10px"}}>
                <Dropzone onDrop={this.onDrop}>
                    {({getRootProps, getInputProps}) => (
                        <section className="flexrow">
                            <div {...getRootProps({className: 'dropzone'})}>
                                <input {...getInputProps()} />
                                    <button className='button' style={{width:"100px"}}>Upload</button>
                            </div>
                        </section>
                    )}
                </Dropzone>
                <button className='button' style={{width:"100px"}} onClick={()=>this.addImage()}>Save</button>
            </div>

                    
          
                    
                    
           </Modal>
          

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
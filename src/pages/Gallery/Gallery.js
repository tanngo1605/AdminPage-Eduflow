import React,{Component} from 'react';
import Modal from 'react-modal';
import Dropzone from 'react-dropzone';
import {Scrollbars} from 'react-custom-scrollbars';
import {AiOutlineExclamationCircle,AiOutlineCalendar,AiOutlineFileText} from 'react-icons/ai';
import { BsPlus } from "react-icons/bs";
import Drawer from '../../component/Drawer/Drawer'
import Header from '../../component/Header/Header'


const todayDate=new Date();

const imagegallery=[];

class Gallery extends Component {

  constructor (props) {
    super(props)
    this.state = {
        images:{image:null,imagesize:' ',description:''},
        openmodal:false,
    }
  }
  componentDidMount() {
    Modal.setAppElement('body');
  }

  onDrop = (images) => {
    console.log(images)
    this.setState({images:{image:images,imagesize:images.reduce((accumulator, currentValue)=> accumulator + currentValue.size,0)}})
  }
  checkifAlbumorImage=(images)=>{
      if (images ===null) return;
      //album
      if (images.length>1) return (<div></div>)
      //single image    
      return <div style={{backgroundColor:'white',width:'200px',height:'150px'}}><img src={URL.createObjectURL(images[0])} alt='' style={{width:'200px',height:'150px'}} /></div>
  }

  reviewImageBeforeAddingtoGallery = () =>{
    if (this.state.images.image!=null) return (<img src={URL.createObjectURL(this.state.images.image[0])} alt='' style={{width:'200px',height:'100px',marginLeft:'30px'}} />)

    return (<div style={{width:'200px',height:'100px',marginLeft:'30px'}}></div>)
  }

  addImageToGallery=()=>{
    if (this.state.images.image==null) return ;

    imagegallery.push({image:this.state.images.image,imagesize:this.state.images.imagesize,date:todayDate.toLocaleDateString()});
    
    this.setState({images:{image:null,imagesize:''},openmodal:false})
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
                <div className='titleform'> Gallery </div>
                <button className='attachment' onClick={()=>this.setState({openmodal:true})}>
                    <BsPlus color="white" size={18} style={{marginRight:'15px',marginLeft:"6px",marginTop:"1px"}}/>
                    <p>Choose File</p>
                </button>
                <div style={{marginTop:'20px',height:'70vh',width:'80vw'}}>
                    <Scrollbars>
                     <div className='gallerylayout'>
                        {imagegallery.map((item)=>
                            <div className='flexcolumn' style={{marginBottom:'20px',marginRight:'40px'}}>
                            <div style={{backgroundColor:'white',width:'200px',height:'150px'}}><img src={URL.createObjectURL(item.image[0])} alt='' style={{width:'200px',height:'150px'}} /></div>
                                <div style={{color:'#262F56',fontSize:14}}>{item.date}</div>
                                <div style={{color:'#262F56',fontSize:14,marginTop:'3px'}}>{item.imagesize} bytes</div>
                            </div>
                        )}
                        </div>
                    </Scrollbars>
                    
                </div>
            </div>
          </div>
          <Modal 
            isOpen={this.state.openmodal} 
            onRequestClose={()=>this.setState({images:{image:null,imagesize:''},openmodal:false})} 
            className='Modal'> 
            <div className='headermodal' style={{textAlign:'center',color:'#262F56',fontWeight:'bold'}}>Upload file</div>
            <div className='flexrow' style={{marginTop:'20px'}}>
                {this.reviewImageBeforeAddingtoGallery()}
                <div className='flexcolumn' style={{marginLeft:'70px',marginTop:'10px'}}>
                    <div className='flexrow'>
                        <AiOutlineExclamationCircle size={20} color='#8C96AB'/>
                        <p style={modalContent}>{this.state.images.imagesize} bytes</p>
                    </div>
                    <div className='flexrow' >
                        <AiOutlineCalendar size={20} color='#8C96AB'/>
                        <p style={modalContent}>{todayDate.toLocaleDateString()}</p>
                    </div>
                    <div className='flexrow'>
                        <AiOutlineFileText size={20} color='#8C96AB'/>
                        <input type='text' style={modalContent} className='shortbox' onChange={(event)=>this.setState({images:{description:event.target.value}})}></input>
                    </div>

                </div>
            </div>
            <div className='flexrow' style={{justifyContent:'space-around',marginTop:'10px'}}>
                <Dropzone onDrop={this.onDrop} accept='image/*,video/*'>
                    {({getRootProps, getInputProps}) => (
                        <section className='flexrow'>
                            <div {...getRootProps({})}>
                                <input {...getInputProps()} />
                                    <button className='button' style={{width:'100px'}}>Upload</button>
                            </div>
                        </section>
                    )}
                </Dropzone>
                <button className='button' style={{width:'100px'}} onClick={()=>this.addImageToGallery()}>Save</button>
            </div>

                    
          
                    
                    
        </Modal>
          

      </div>
      
    </div>
   </div>
  )}
};

export default Gallery;

const modalContent = {
    color:'#8C96AB',
    fontSize:16,
    marginTop:-2,
    marginLeft:30,
    width:100,
    paddingLeft:5
};
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
      return <img src={URL.createObjectURL(images[0])} alt='' className='galleryimage' />
  }

  reviewImageBeforeAddingtoGallery = () =>{
    if (this.state.images.image!=null) return (<img src={URL.createObjectURL(this.state.images.image[0])} alt='' className='galleryimage' style={{marginLeft:'1.5vw'}} />)

    return (<div className='galleryimage' style={{marginLeft:'1.5vw'}}></div>)
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
            
                <div className='titleform'> Gallery </div>
                <button className='attachment' onClick={()=>this.setState({openmodal:true})}>
                    <BsPlus color="white" size={'1.5vw'} className='attachmentplusicon'/>
                    <p>Choose File</p>
                </button>
                <div style={{marginTop:'2.5vh',height:'70vh',width:'80vw'}}>
                    <Scrollbars>
                     <div className='gallerylayout'>
                        {imagegallery.map((item)=>
                            <div className='flexcolumn' style={{marginBottom:'2.5vh',marginRight:'2vw'}}>
                                <img src={URL.createObjectURL(item.image[0])} alt='' className='galleryimage' />
                                <div className='gallerydescriptionforimage'>{item.date}</div>
                                <div className='gallerydescriptionforimage'>{item.imagesize} bytes</div>
                            </div>
                        )}
                        </div>
                    </Scrollbars>
                    
                </div>
            
          </div>
          <Modal 
            isOpen={this.state.openmodal} 
            onRequestClose={()=>this.setState({images:{image:null,imagesize:''},openmodal:false})} 
            className='Modal'> 
            <div className='headermodal'>Upload file</div>
            <div className='flexrow' style={{marginTop:'2.5vh'}}>
                {this.reviewImageBeforeAddingtoGallery()}
                <div className='flexcolumn' style={{marginLeft:'5vw',marginTop:'1.5vh'}}>
                    <div className='flexrow'>
                        <AiOutlineExclamationCircle  size={'1.6vw'} color='#8C96AB'/>
                        <p style={modalContent}>{this.state.images.imagesize} bytes</p>
                    </div>
                    <div className='flexrow' >
                        <AiOutlineCalendar  size={'1.6vw'} color='#8C96AB'/>
                        <p style={modalContent}>{todayDate.toLocaleDateString()}</p>
                    </div>
                    <div className='flexrow'>
                        <AiOutlineFileText size={'1.6vw'} color='#8C96AB'/>
                        <input type='text' style={modalContent} className='shortbox' onChange={(event)=>this.setState({images:{description:event.target.value}})}></input>
                    </div>

                </div>
            </div>
            <div className='flexrow' style={{justifyContent:'space-around',marginTop:'1.5vh'}}>
                <Dropzone onDrop={this.onDrop} accept='image/*,video/*'>
                    {({getRootProps, getInputProps}) => (
                        <section className='flexrow'>
                            <div {...getRootProps({})}>
                                <input {...getInputProps()} />
                                    <button className='gallerybutton'>Upload</button>
                            </div>
                        </section>
                    )}
                </Dropzone>
                <button className='gallerybutton' onClick={()=>this.addImageToGallery()}>Save</button>
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
    fontSize:'1vw',
    
    marginLeft:'1.5vw',
    width:'7.5vw',
    paddingLeft:'1.5vw'
};
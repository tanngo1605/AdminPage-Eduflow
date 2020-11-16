import React,{useState,useEffect} from "react";
import Modal from "react-modal";
import StarRatings from "react-star-ratings";
import { BsGear } from "react-icons/bs";
import icons from "../../userData/Setting";
import {marginTop20vh,marginBottom20vh,marginLeft20vw} from '../../styles/marginStyles'
const Header = (props) => {
    const [showSetting, setSetting] = useState(false);
    const [feedbackModal,setfeedbackModal] = useState(false);
    const [starRating,setStarRating] = useState(0)
    useEffect(()=>{
        Modal.setAppElement("body");
    }, [])

    const showButton = (web) =>{
        switch(web){
            case 'feedback':
                setfeedbackModal(true)
                setSetting(false);
                break
            case 'changepassword':
                props.history.push("/changepassword")
            case 'raiseticket':
                props.history.push("/raiseticket")
            default:
                break
        }
    }
    return (
        <div className="header">
            
            <p className='headertextstyle'> Shri Ji Baba Public School </p>
            <div className="flexcolumn" style={{height:'55vh',marginLeft:'auto',marginRight:"5%"}}>
                <BsGear style={{marginTop:'5.5vh',alignSelf:'center'}} color="#8C96AB" size={'1.5vw'} onClick={() => setSetting(!showSetting)} />
                <div className={showSetting?'setting':null} style={{width:'16vw'}}>
            
                    {(showSetting)?
                        (
                            <div >
                                <div  className='headersetting' >
                                    <BsGear size='1.2vw' style={{marginLeft:'2.5vw'}}/>
                                    <p style={{marginLeft:'2.5vw',marginTop:'-0.3vh',fontWeight:'bold',fontSize:'1vw'}}> Setting</p>
                                </div>
                                <div className='flexcolumn' style={{marginTop:'0.7vh',paddingLeft:'2.5vw',paddingTop:'1vh'}}>
                                    {icons.map(item=>
                                        <div role='button' className="flexrow" key={item.content} style={marginBottom20vh} onClick={()=>showButton(item.web)}>
                                            {item.icon}
                                            <div style={{marginLeft:'2.5vw',marginTop:'-0.5vh',fontSize:'1vw',color:'#8C96AB'}}>{item.content}</div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        
                        )
                        : null
                    }
                </div>
            </div>
            <Modal isOpen={feedbackModal} className="feedbackmodal" onRequestClose={() => setfeedbackModal(false)} >
                <div className="headermodal" style={marginBottom20vh}>Feedback</div>
                <div className='flexcolumn'>
                    <div className="textFeedback">How are you doing?</div>
                    <div style={{alignSelf:'center',marginTop:'2vh'}}>
                        <StarRatings
                            rating={starRating}
                            starRatedColor="#F3D743"
                            starHoverColor="#F3D743"
                            starEmptyColor="rgba(0, 0, 0, 0.54)"
                            changeRating={(rating)=>setStarRating(rating)}
                            numberOfStars={5}
                            name="rating"
                            
                        />
                    </div>
                    <div className="textFeedback" style={marginTop20vh}>How can we improve your experience?</div>
                    <textarea className='shortbox'  id="corAddress" placeholder="Type here" style={{width:'25vw',height:'15vh',marginLeft:'4.5vw',marginTop:'2vh'}}></textarea>
                    <button className="gallerybutton" style={{ background: "#262F56",marginTop:'2vh',marginLeft:'14vw'}}>Submit</button>
                </div>
                
                    
                
          </Modal>
        </div>
    
)};

export default Header;

import React,{useState} from "react";
import { BsGear } from "react-icons/bs";
import icons from "../../userData/Setting";
import "./Header.styles.css";

const Header = () => {
    const [show, setShow] = useState(false);
    return (
        <div className="header">
            
            <a  style={{ display:'flex',fontSize:36,color:'#0A0A0B',fontFamily:'Prata',textTransform:'uppercase',marginLeft:40,marginTop:15}}> Shri Ji Baba Public School </a>
            
            {(show)?
                (
                  <div className="flexcolumn" style={{height:"350px",marginLeft:'auto',marginRight:"5%"}}>
                    <BsGear style={{marginTop:33,marginBottom:15,alignSelf:'center'}} color="#8C96AB" size={20} onClick={() => setShow(false)}/>
                    <div className='setting'>
                        
                        <div  className='headersetting' >
                            <BsGear style={{marginLeft:35}}/>
                            <a style={{marginLeft:25,fontWeight:'bold',fontSize:15}}> Setting</a>
                        </div>
                        <div>
                            {icons.map(item=>
                                <div style={{marginBottom:'5px'}}>
                                    <i style={{marginLeft:35}}>{item.icon}</i>
                                    <a style={{marginLeft:25,fontSize:15,color:'#8C96AB'}}>{item.content}</a>
                                </div>
                                

                                )}
                        </div>
                    </div>
                  </div>
                )
                :
                (
                    <div className="flexcolumn" style={{marginLeft:'auto',marginRight:"5%"}}>
                        <BsGear style={{marginTop:33,alignSelf:'center'}} color="#8C96AB" size={20} onClick={() => setShow(true)} />
                        <div style={{width:'225px'}}></div>
                    </div>
                )
            }
            
            
        </div>
    
)};

export default Header;

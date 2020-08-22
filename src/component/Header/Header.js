import React,{useState} from "react";
import { BsGear } from "react-icons/bs";
import icons from "../../userData/Setting";

const Header = () => {
    const [showSetting, setSetting] = useState(false);
    return (
        <div className="header">
            
            <p  style={{ display:'flex',fontSize:36,color:'#0A0A0B',fontFamily:'Prata',textTransform:'uppercase',marginLeft:40,marginTop:15}}> Shri Ji Baba Public School </p>
            
            {(showSetting)?
                (
                  <div className="flexcolumn" style={{height:"350px",marginLeft:'auto',marginRight:"5%"}}>
                    <BsGear style={{marginTop:33,marginBottom:15,alignSelf:'center'}} color="#8C96AB" size={20} onClick={() => setSetting(false)}/>
                    <div className='setting'>
                        
                        <div  className='headersetting' >
                            <BsGear style={{marginLeft:35}}/>
                            <p style={{marginLeft:25,marginTop:-3,fontWeight:'bold',fontSize:15}}> Setting</p>
                        </div>
                        <div className='flexcolumn' style={{marginTop:'7px'}}>
                            {icons.map(item=>
                                <div className="flexrow" key={item.content} >
                                    <i style={{marginLeft:35}}>{item.icon}</i>
                                    <p style={{marginLeft:25,marginTop:2,fontSize:15,color:'#8C96AB'}}>{item.content}</p>
                                </div>
                                

                                )}
                        </div>
                    </div>
                  </div>
                )
                :
                (
                    <div className="flexcolumn" style={{marginLeft:'auto',marginRight:"5%"}}>
                        <BsGear style={{marginTop:33,alignSelf:'center'}} color="#8C96AB" size={20} onClick={() => setSetting(true)} />
                        <div style={{width:'225px'}}></div>
                    </div>
                )
            }
            
            
        </div>
    
)};

export default Header;

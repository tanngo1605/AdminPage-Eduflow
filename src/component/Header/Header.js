import React,{useState} from "react";
import { BsGear } from "react-icons/bs";
import icons from "../../userData/Setting";

const Header = () => {
    const [showSetting, setSetting] = useState(false);
    return (
        <div className="header">
            
            <p className='headertextstyle'> Shri Ji Baba Public School </p>
            
            {(showSetting)?
                (
                  <div className="flexcolumn" style={{height:'55vh',marginLeft:'auto',marginRight:"5%"}}>
                    <BsGear style={{marginTop:'5.5vh',marginBottom:'2vh',alignSelf:'center'}} color="#8C96AB" size={'1.5vw'} onClick={() => setSetting(false)}/>
                    <div className='setting'>
                        <div  className='headersetting' >
                            <BsGear size='1.2vw' style={{marginLeft:'2.5vw'}}/>
                            <p style={{marginLeft:'2.5vw',marginTop:'-0.3vh',fontWeight:'bold',fontSize:'1vw'}}> Setting</p>
                        </div>
                        <div className='flexcolumn' style={{marginTop:'0.7vh',paddingLeft:'2.5vw',paddingTop:'1vh'}}>
                            {icons.map(item=>
                                <a href={`/${item.web}`} className="flexrow" key={item.content} style={{marginBottom:'2vh'}} >
                                    {item.icon}
                                    <div style={{marginLeft:'2.5vw',marginTop:'-0.5vh',fontSize:'1vw',color:'#8C96AB'}}>{item.content}</div>
                                </a>
                            )}
                        </div>
                    </div>
                  </div>
                )
                :
                (
                    <div className="flexcolumn" style={{marginLeft:'auto',marginRight:"5%"}}>
                        <BsGear style={{marginTop:'5.5vh',alignSelf:'center'}} color="#8C96AB" size={'1.5vw'} onClick={() => setSetting(true)} />
                        <div style={{width:'16vw'}}></div>
                    </div>
                )
            }
            
            
        </div>
    
)};

export default Header;

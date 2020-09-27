import React,{Component} from "react";
import { IoIosArrowDown } from "react-icons/io";
import drawercontent from "../../userData/DrawerUtils"
import { NavLink, withRouter } from 'react-router-dom'


class Drawer extends Component {
    constructor (props) {
        super(props)
        this.state = {
          trigger: false,   
        }
      }
    componentDidMount(){
        
        drawercontent.map((item)=>{
            if (item.web===this.props.location.pathname.slice(1)) {
                item.clicked=true;
                this.setState({trigger:true}
            )}
            return item
        })
        
    }
    //show icon with the menu  
    Show(item){
        
        if (item==='Students' || item==='Teacher' || item==='Calendar events'  ) 
              return ( 
                <div style={{marginLeft:'auto',marginRight:'0.8vw',marginTop:'-0.1vw'}}>
                    <IoIosArrowDown size={'1.5vw'} color="#FFFFFF"/>
                </div>)
        
        return <div></div>
    }  
    // handle change
    handleClick(e,condition,index,array){   
        if (!condition){
          array.map((item)=>item.clicked=false);
          array[index]['clicked']=true;
          this.setState({trigger:true});
        }
        else 
          this.setState({trigger:false});
    }
    render(){
    return (
      
        <div className="drawer">
            <div className="outeravatarcircle">
                <div className="inneravatarcircle">
                    <img src={require("../../assets/Ellipse.png")} alt={'ava'} style={{width:"82%",height:"82%",marginLeft:"10%",marginTop:"10%"}}/>
                </div>
            </div>
            <div style={{height:'12vh'}}>
                <h1 style={{textAlign:'center',color:'#FFFFFF',fontSize:"1vw",marginTop:'1.5vw'}}>Hello Admin!</h1>
                <h1 style={{textAlign:'center',color:'#FFFFFF',fontSize:"2.5vw",marginTop:'1vw'}}>Akhil</h1>
            </div>
            {drawercontent.map((item,index)=>
                
                    <div key={item.key} className={item.clicked?"activesubjectindrawer":'notactivesubjectindrawer'} onClick={(e)=>this.handleClick(e,item.clicked,index,drawercontent)}>
                        {(item.clicked)?
                            <img src={require('../../assets/'+item.activeimage)} alt={item.imagedescription} style={{width:'1.2vw',height:'1.2vw',marginLeft:'1vw'}}/>
                             
                            
                        :
                            <img src={require('../../assets/'+item.inactiveimage)} alt={item.imagedescription} style={{width:'1.2vw',height:'1.2vw',marginLeft:'1vw'}}/>  
                        }
                        <NavLink exact to={'/'+ item.web} style={{color:'#FFFFFF',marginLeft:'0.8vw',fontSize:'1.2vw',marginTop:'-0.1vw'}}>{item.content}</NavLink> 
                        {this.Show(item.content)}
                        
                        
                    </div>
                
            )}
        </div>      
    )}
};
  
export default withRouter(Drawer);
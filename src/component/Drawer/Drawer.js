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
        const list = ['Students','Teacher','Calendar events'];
        
        for (let i = 0 ; i < list.length;i++)
          {
            if (item === list[i])
             return ( 
                <div style={{marginLeft:'auto',marginRight:'0.8vw'}}>
                    <IoIosArrowDown size={'1.5vw'} color="#FFFFFF"/>
                </div>)
          }
        return (<div></div>)
    }  
    // handle change
    handleClick(e,condition,index,array){   
        if (condition===false){
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
                (item.clicked)?(
                    <div key={item.key} className="activesubjectindrawer" onClick={(e)=>this.handleClick(e,item.clicked,index,drawercontent)} style={{display:"flex",marginBottom:'1vh',}}>
                        <div><img src={require('../../assets/'+item.image)} alt={item.imagedescription} style={{width:'1.2vw',height:'1.2vw',marginLeft:'1vw',marginTop:'-0.1vw'}}/> </div>
                        <NavLink exact to={'/'+ item.web} style={{color:'#FFFFFF',marginLeft:'0.8vw',fontSize:'1.2vw'}}>{item.content}</NavLink> 
                        {this.Show(item.content)}
                    </div>
                ):(
                    <div key={item.key} onClick={(e)=>this.handleClick(e,item.clicked,index,drawercontent)} style={{display:"flex",marginBottom:'1vh'}}>
                    <div><img src={require('../../assets/'+item.image)} alt={item.imagedescription} style={{width:'1.2vw',height:'1.2vw',marginLeft:'1vw',marginTop:'-0.3vw'}}/> </div>
                        <NavLink exact to={'/'+ item.web} style={{color:'#FFFFFF',marginLeft:'0.8vw',fontSize:'1.2vw'}}>{item.content}</NavLink>
                        {this.Show(item.content)}
                    </div>
                )
            )}
        </div>      
    )}
};
  
export default withRouter(Drawer);
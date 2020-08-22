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
    //show icon with the menu  
    Show(item){
        const list = ['Students','Teacher','Calendar events'];
        
        for (let i = 0 ; i < list.length;i++)
          {
            if (item === list[i])
             return ( 
                <div style={{marginLeft:'auto',marginRight:10}}>
                    <IoIosArrowDown  color="#FFFFFF"/>
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
            <div style={{textAlign:'center',color:'#FFFFFF',fontSize:12,marginTop:10}}>Hello Admin!</div>
            <div style={{textAlign:'center',color:'#FFFFFF',fontSize:22,marginBottom:10}}>Akhil</div>
            {drawercontent.map((item,index)=>
                (item.clicked)?(
                    <div key={item.key} className="activesubjectindrawer" onClick={(e)=>this.handleClick(e,item.clicked,index,drawercontent)} style={{display:"flex",marginBottom:10,alignItem:'center'}}>
                        <div><img src={require('../../assets/'+item.image)} alt={item.imagedescription} style={{wgidth:15,height:15,marginLeft:10,marginTop:-5}}/> </div>
                        <NavLink exact to={'/dashboard/'+ item.web} style={{color:'#FFFFFF',marginLeft:15,fontSize:16}}>{item.content}</NavLink> 
                        {this.Show(item.content)}
                    </div>
                ):(
                    <div key={item.key} onClick={(e)=>this.handleClick(e,item.clicked,index,drawercontent)} style={{display:"flex",marginBottom:10,alignItem:'center'}}>
                    <div><img src={require('../../assets/'+item.image)} alt={item.imagedescription} style={{width:15,height:15,marginLeft:10,marginTop:-5}}/> </div>
                        <NavLink exact to={'/dashboard/'+ item.web} style={{color:'#FFFFFF',marginLeft:15,fontSize:16}}>{item.content}</NavLink>
                        {this.Show(item.content)}
                    </div>
                )
            )}
        </div>      
    )}
};
  
export default withRouter(Drawer);
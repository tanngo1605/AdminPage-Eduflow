import React, { Component } from "react";
import { IoIosArrowDown } from "react-icons/io";
import drawercontent from "../../userData/DrawerUtils"
import { NavLink, withRouter } from 'react-router-dom'
import { Scrollbars } from 'react-custom-scrollbars';

class Drawer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            trigger: false,
        }
    }
    componentDidMount() {

        drawercontent.map((item) => {
            if (item.web === this.props.location.pathname.slice(1)) {
                item.clicked = true;
                this.setState({ trigger: true }
                )
            }
            return item
        })

    }


    //show icon with the menu  
    // Show(item) {

    //     if (item === 'Students' || item === 'Teacher' || item === 'Calendar events' || item === 'Exams')
    //         return (
    //             <div style={{ marginLeft: 'auto', marginRight: '0.8vw', marginTop: '-0.1vw' }}>
    //                 <IoIosArrowDown size={'1.5vw'} color="#FFFFFF" />
    //             </div>)



    Show(item) {
        const list = ['Students', 'Teacher', 'Exams', 'Calendar events'];
        if (list.includes(item))
            return (
                <div style={{ marginTop: '-0.1vw', marginRight: '0.2vw', marginLeft: 'auto' }}>
                    <IoIosArrowDown size={'1.5vw'} color="#FFFFFF" />
                </div>)

        return <div></div>
    }
    // handle change
    handleClick(e, condition, index, array) {
        if (!condition) {
            array.map((item) => item.clicked = false);
            array[index]['clicked'] = true;
            this.setState({ trigger: true });
        }
        else
            this.setState({ trigger: false });
    }
    render() {
        return (

            <div className="drawer">
                {/* <Scrollbars> */}
                {/* <div className="outeravatarcircle">
                        <div className="inneravatarcircle">
                            <img src={require("../../assets/Ellipse.png")} alt={'ava'} style={{ width: "82%", height: "82%", marginLeft: "10%", marginTop: "10%" }} />
                        </div>
                    </div>
                    <div style={{ height: '12vh' }}>
                        <h1 style={{ textAlign: 'center', color: '#FFFFFF', fontSize: "1vw", marginTop: '1.5vw' }}>Hello Admin!</h1>
                        <h1 style={{ textAlign: 'center', color: '#FFFFFF', fontSize: "2.5vw", marginTop: '1vw' }}>Akhil</h1>
                    </div>
                    {drawercontent.map((item, index) =>
                        <React.Fragment>
                            <div key={item.key} className={item.clicked ? "activesubjectindrawer" : 'notactivesubjectindrawer'} onClick={(e) => this.handleClick(e, item.clicked, index, drawercontent)}>
                                {(item.clicked) ?
                                    <img src={require('../../assets/' + item.activeimage)} alt={item.imagedescription} style={{ width: '1.2vw', height: '1.2vw', marginLeft: '1vw' }} />


                                    :
                                    <img src={require('../../assets/' + item.inactiveimage)} alt={item.imagedescription} style={{ width: '1.2vw', height: '1.2vw', marginLeft: '1vw' }} />
                                }

                                <ul className="barUl">
                                    <div style={{ display: "flex" }}><NavLink exact to={'/' + item.web} style={{ color: '#FFFFFF', fontSize: '1.2vw', marginTop: '-0.1vw', width: "120px" }}>{item.content}</NavLink>
                                        {this.Show(item.content)}
                                    </div>

                                </ul>

                            </div>
                            <div style={{ margin: " 0px 50px" }}>
                                {item.clicked && item.subcontent ?
                                    item.subcontent.map((el) =>
                                        <li style={{ color: "white", width: "220px", cursor: "pointer" }}>
                                            <NavLink exact to={`/${el.web}`} style={{ color: '#FFFFFF', width: "130px" }}>{el.content}</NavLink>
                                        </li>)
                                    : null}</div>
                        </React.Fragment>




                    )}

                </Scrollbars> */}


                <div className="outeravatarcircle">
                    <div className="inneravatarcircle">
                        <img src={require("../../assets/Ellipse.png")} alt={'ava'} style={{ width: "82%", height: "82%", marginLeft: "0.9vw", marginTop: "1.8vh" }} />
                    </div>
                </div>
                <div style={{ marginBottom: '1vh' }}>
                    <h1 style={{ textAlign: 'center', color: '#FFFFFF', fontSize: "65%", marginTop: '1.5vw' }}>Hello Admin!</h1>
                    <h1 style={{ textAlign: 'center', color: '#FFFFFF', fontSize: "180%", marginTop: '0.5vw' }}>Akhil</h1>
                </div>
                <div>
                    <Scrollbars style={{ height: '60vh' }}>
                        {drawercontent.map((item, index) =>
                            <React.Fragment key={index}>
                                <div className={item.clicked ? "activesubjectindrawer" : 'notactivesubjectindrawer'} onClick={(e) => this.handleClick(e, item.clicked, index, drawercontent)}>
                                    {(item.clicked) ?
                                        <img src={require('../../assets/' + item.activeimage)} alt={item.imagedescription} style={{ width: '8%', height: '8%', marginTop: '0.2vw', marginLeft: '0.9vw' }} />


                                        :
                                        <img src={require('../../assets/' + item.inactiveimage)} alt={item.imagedescription} style={{ width: '8%', height: '8%', marginLeft: '1vw', marginTop: '0.2vw' }} />
                                    }

                                    <NavLink exact to={'/' + item.web} style={{ color: '#FFFFFF', fontSize: '85%', marginTop: '0.1vw', marginLeft: '1.5vw' }}>{item.content}</NavLink>
                                    {this.Show(item.content)}

                                </div>
                                <div style={{ margin: " 0vh 3vw" }}>
                                    {item.clicked && item.subcontent ?
                                        item.subcontent.map((el, index2) =>
                                            <li key={index2} style={{ color: "white", width: "8vw", cursor: "pointer" }}>
                                                <NavLink exact to={`/${el.web}`} style={{ color: '#FFFFFF', fontSize: '75%' }}>{el.content}</NavLink>
                                            </li>)
                                        : null
                                    }
                                </div>
                            </React.Fragment>
                        )}


                    </Scrollbars>
                </div>
            </div>





        )
    }
};

export default withRouter(Drawer);
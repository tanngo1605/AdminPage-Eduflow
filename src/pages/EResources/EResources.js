import React, { useEffect, Component } from "react";
import HeaderTeacher from "../../component/Header/HeaderTeacher";
import Modal from 'react-modal';
import Dropzone from "react-dropzone";
import { Document, Page } from 'react-pdf';
import { Player, ControlBar, BigPlayButton } from 'video-react';
import 'video-react/dist/video-react.css';
import VideoThumbnail from 'react-video-thumbnail';
import { image300percent, image200percent, image100percent, image450percent, image130vw } from "../../styles/imageStyles";
import { NavLink } from "react-router-dom"
import { th, vi } from "date-fns/locale";
const arrayOfVideo = []
const arrayOfPDF = []

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        width: '50%',
        transform: 'translate(-50%, -50%)'
    }
};
const customStylesForPDF = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        width: '60%',
        transform: 'translate(-50%, -50%)'
    }
};
class EResources extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            showVideo: false,
            showPDF: false,
            file: null,
            urlFile: null,
            numPages: null,
            pageNumber: null,
            scale: 1.0,
            trigger: false
        };
        this.handleOpenModal = this.handleOpenModal.bind(this)
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleOpenVideo = this.handleOpenVideo.bind(this);
        this.handleCloseVideo = this.handleCloseVideo.bind(this);
        this.handleOpenPDF = this.handleOpenPDF.bind(this);
        this.handleClosePDF = this.handleClosePDF.bind(this);

    }
    onDocumentLoad({ numPages }) {
        // console.log(numPages);
        this.setState({ pageNumber: numPages });
    }
    onPageNumber() {
        let a = [];
        for (let i = 1; i <= this.state.pageNumber; i++) {
            a.push(i);
        }
        console.log(a);
        return a;
    }
    componentDidMount() {
        Modal.setAppElement("body");
    }
    //modal
    handleOpenModal() {
        this.setState({ showModal: true });
    }
    handleCloseModal() {
        this.setState({ showModal: false });
    }
    //video
    handleOpenVideo() {
        this.setState({ showVideo: true });
    }
    handleCloseVideo() {
        this.setState({ showVideo: false });
    }
    //pdf
    handleOpenPDF() {
        this.setState({ showPDF: true });
    }
    handleClosePDF() {
        this.setState({ showPDF: false });
    }
    onDrop = (e) => {
        var reader = new FileReader();
        reader.readAsDataURL(e[0])
        console.log(e[0]);
    };
    handleChange(e) {
        this.setState({ file: URL.createObjectURL(e.target.files[0]) })
        console.log(e.target.files[0]);
        var file = document.querySelector('.einput').files
        // console.log(file);
        // console.log(file[0]);
        // console.log(file[0] instanceof Blob);
        var reader = new FileReader();
        console.log(reader.readAsText(file[0]));
        // reader.onload = function () {
        //     console.log(reader.result);
        //     document.getElementById("display").src = reader.result;
        //     // image editing
        //     // ...
        //     var blob = window.dataURLtoBlob(reader.result);
        //     console.log(blob);
        // }
        console.log(e);
        console.log(e.target.value);
    }

    // showPDF = () => {
    //     return (
    //         <div >
    //             {arrayOfPDF.map((pdf, index) =>
    //                 <Document
    //                     file={pdf}
    //                     onLoadSuccess={this.onDocumentLoad.bind(this)}
    //                 >
    //                     <Page

    //                         key={`page_${index + 1}`}
    //                         pageNumber={1}
    //                         scale={0.5}
    //                     />
    //                 </Document>
    //             )}
    //         </div>
    //     )
    // }
    render() {
        console.log(arrayOfVideo);

        return (
            <div className="dashboard">
                <div className="flexcolumn">
                    <HeaderTeacher />
                    <div className="form" style={{ marginLeft: "2%" }}>
                        <div style={{ margin: "2%", }}>
                            <h8>E-Resources</h8>
                            <div className="flexrow">
                                <div className="section" style={{ fontSize: "1.4vw", width: "20%" }}>Chapter/Topic name</div>
                                <input className="shortbox" style={{ height: "8vh", width: "40vw" }} />
                            </div>
                            <div className="flexrow" style={{ marginTop: "2vh" }}>
                                <div className="section" style={{ fontSize: "1.4vw", width: "20%" }}>Description</div>
                                <input className="shortbox" style={{ height: "12vh", width: "40vw" }} />
                            </div>

                        </div>
                        <div className="flexrow" style={{ marginTop: "2vh", marginLeft: "25vw" }}>
                            <button className="button" onClick={this.handleOpenModal} style={{ background: "#66C4E1" }}>+ ADD file</button>
                            <Modal isOpen={this.state.showModal} onRequestClose={this.handleCloseModal} style={{ width: "100px" }}>
                                <Dropzone onDrop={files => { files[0].type === "application/pdf" ? arrayOfPDF.push(URL.createObjectURL(files[0])) : arrayOfVideo.push(URL.createObjectURL(files[0])); console.log(files[0].type); this.setState({ file: URL.createObjectURL(files[0]), trigger: !this.state.trigger }) }} >
                                    {({ getRootProps, getInputProps }) => (
                                        <section className="flexcolumn" >
                                            <div {...getRootProps({})}>
                                                <input {...getInputProps()} />
                                                <button className="gallerybutton">Upload Album</button>
                                            </div>
                                        </section>
                                    )}
                                </Dropzone>
                                <input type="file" className="einput" onChange={(e) => this.handleChange(e)} style={{ display: "block" }} />

                            </Modal>
                            <button className="button" style={{ background: "#66C4E1" }}>Delete file</button>
                        </div>
                        <div className="flexrow" style={{ marginTop: "4vh", marginLeft: "12vw" }}>
                            <button className="button" style={{ color: "black", background: "white", boxShadow: "0px 1px 10px rgba(0, 0, 0, 0.1)" }}>Video</button>
                            <button className="button" style={{ color: "black", background: "white", boxShadow: "0px 1px 10px rgba(0, 0, 0, 0.1)", marginLeft: "8vw" }}>PDF/Notes</button>
                            <button className="button" style={{ color: "black", background: "white", boxShadow: "0px 1px 10px rgba(0, 0, 0, 0.1)", marginLeft: "8vw" }}>Web lines</button>
                        </div>

                        <div style={{ width: "auto", display: "grid", gridTemplateColumns: "auto auto auto auto", margin: "5%" }}>
                            {arrayOfVideo.map((video, index) => {
                                return (
                                    <>
                                        <div onClick={this.handleOpenVideo} style={{ cursor: "pointer", width: "120px", height: "80px" }}>
                                            <VideoThumbnail

                                                videoUrl={video}
                                                width={120}
                                                height={80}
                                            />
                                        </div>
                                        <Modal isOpen={this.state.showVideo} onRequestClose={this.handleCloseVideo} style={customStyles}>
                                            <div>
                                                <Player fluid={false} width="100%" height={512} aspectRatio="auto" src={video}>
                                                    <BigPlayButton position="center" />
                                                </Player>
                                            </div>
                                        </Modal>
                                    </>
                                )
                            }

                            )}

                            {arrayOfPDF.map((pdf) => {
                                return (
                                    <>
                                        <div onClick={this.handleOpenPDF} style={{ width: "fit-content" }}>
                                            <Document
                                                file={pdf}
                                                onLoadSuccess={this.onDocumentLoad.bind(this)}

                                            >

                                                <Page

                                                    key={`page 1}`}
                                                    pageNumber={1}
                                                    height={80}
                                                    width={120}
                                                // style={{ width: "10vw" }}
                                                />




                                            </Document>
                                        </div>
                                        {arrayOfPDF.map((pdf, index) =>
                                            <Modal isOpen={this.state.showPDF} onRequestClose={this.handleClosePDF} style={customStylesForPDF}>

                                                <div style={{ overflow: "scroll", height: "620px" }}>


                                                    <Document
                                                        file={pdf}
                                                        onLoadSuccess={this.onDocumentLoad.bind(this)}
                                                    >
                                                        {Array.from(new Array(this.state.pageNumber)).map(
                                                            (item, index) => (
                                                                <Page
                                                                    key={`page_${index + 1}`}
                                                                    pageNumber={index + 1}
                                                                    scale={this.state.scale + 0.5}
                                                                />
                                                            )
                                                        )}
                                                    </Document>
                                                </div>



                                                <button onClick={() => { this.setState({ showPDF: false }) }}>Exit{console.log(this.state.showPDF)}</button>
                                            </Modal>
                                        )}
                                    </>

                                )
                            }

                            )}
                        </div>


                        {/* <div onClick={this.handleOpenVideo} style={{ cursor: "pointer", width: "120px", height: "80px" }}>
                            <VideoThumbnail

                                videoUrl={this.state.file}
                                // thumbnailHandler={(thumbnail) => console.log(thumbnail)}
                                width={120}
                                height={80}
                            />
                        </div>
                        <Modal isOpen={this.state.showVideo} onRequestClose={this.handleCloseVideo} style={customStyles}> */}
                        {/* <Player autoplay fluid={false} width="50%" height={512} aspectRatio="auto" src={this.state.file}>
                                    <BigPlayButton position="center" />
                                </Player> */}
                        {/* <Player> <source src={this.state.file} /></Player> */}

                        {/* {arrayOfVideo.map((video, index) => {
                                return (

                                    <div >
                                        <Player fluid={false} width="100%" height={512} aspectRatio="auto" src={video}>
                                            <BigPlayButton position="center" />
                                        </Player>
                                    </div>
                                )
                            }

                            )}


                        </Modal> */}



                    </div>


                </div>
            </div >
        );
    }
}



export default EResources;

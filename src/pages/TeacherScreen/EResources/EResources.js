import React, { useEffect, Component } from "react";
import HeaderTeacher from "../../../component/Header/HeaderTeacher";
import Modal from 'react-modal';
import Dropzone from "react-dropzone";
import { Document, Page } from 'react-pdf';
import { Player, ControlBar, BigPlayButton } from 'video-react';
import 'video-react/dist/video-react.css';
import VideoThumbnail from 'react-video-thumbnail';
import { pdfjs } from 'react-pdf';
import { assign } from "lodash";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
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
const pageNumList = []
class EResources extends Component {
    constructor(props) {
        super(props);
        this.state = {
            btn1: false,
            btn2: false,
            btn3: false,
            showModal: false,
            showVideo: false,
            showPDF: false,
            file: null,
            numPages: null,
            pageNumber: null,
            scale: 1.0,
            trigger: false,
            showListVideo: false,
            showListPDF: false,
            toggleList: false,

        };
        this.handleOpenModal = this.handleOpenModal.bind(this)
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleOpenVideo = this.handleOpenVideo.bind(this);
        this.handleCloseVideo = this.handleCloseVideo.bind(this);
        this.handleOpenPDF = this.handleOpenPDF.bind(this);
        this.handleClosePDF = this.handleClosePDF.bind(this);
        this.onDocumentLoad = this.onDocumentLoad.bind(this)
        this.toggleBtn1 = this.toggleBtn1.bind(this)
        this.toggleBtn2 = this.toggleBtn2.bind(this)
        this.toggleBtn3 = this.toggleBtn3.bind(this)
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
    handleOpenVideo(video) {
        this.setState({ showVideo: true, file: video });
    }
    handleCloseVideo() {
        this.setState({ showVideo: false });
    }
    //pdf
    handleOpenPDF(pdf) {
        this.setState({ showPDF: true, file: pdf });
    }
    handleClosePDF() {
        this.setState({ showPDF: false });
    }
    toggleChange = (e) => {
        this.setState({ toggleList: true })
        if (e.target.value === "video") {
            this.setState({ showListVideo: true, showListPDF: false })
        }
        else if (e.target.value === "pdf") {
            this.setState({ showListPDF: true, showListVideo: false })
        }
    }

    toggleBtn1() {
        console.log(this.state.btn1);
        this.setState({ btn1: !this.state.btn1 })
    }
    toggleBtn2() {
        this.setState({ btn2: !this.state.btn2 })
    }
    toggleBtn3() {
        this.setState({ btn3: !this.state.btn3 })
    }
    render() {


        return (
            <div className="dashboard">
                <div className="flexcolumn">
                    <HeaderTeacher />
                    <div className="form" style={{ marginLeft: "2%" }}>
                        <div style={{ margin: "2%", }}>
                            <h2>E-Resources</h2>
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
                            <Modal isOpen={this.state.showModal} onRequestClose={this.handleCloseModal} className="GalleryModal">
                                <div className="headermodal">Upload file </div>
                                <div className="flexcolumn" style={{ marginLeft: "2vw", marginTop: "4vh" }}>

                                    <p>
                                        <input type="radio" id="test1" onChange={this.toggleBtn1} onClick={this.toggleBtn1} />
                                        <label htmlFor="test1">Video</label>
                                    </p>

                                    <p><input type="radio" id="test2" onChange={this.toggleBtn2} onClick={this.toggleBtn1} />
                                        <label htmlFor="test2">PDF / Notes</label></p>

                                    <p> <input type="radio" id="test3" checked />
                                        <label htmlFor="test3">Weblines</label></p>


                                </div>
                                <Dropzone onDrop={files => { files[0].type === "application/pdf" ? arrayOfPDF.push(URL.createObjectURL(files[0])) : arrayOfVideo.push(URL.createObjectURL(files[0])); console.log(files[0]); this.setState({ trigger: !this.state.trigger }) }} >
                                    {({ getRootProps, getInputProps }) => (
                                        <section className="flexcolumn" >
                                            <div {...getRootProps({})}>
                                                <input {...getInputProps()} />
                                                <button className="gallerybutton">Save</button>
                                            </div>
                                        </section>
                                    )}
                                </Dropzone>
                                {/* <input type="file" className="einput" onChange={(e) => this.handleChange(e)} style={{ display: "block" }} /> */}

                            </Modal>
                            <button className="button" style={{ background: "#66C4E1" }}>Delete file</button>
                        </div>
                        <div className="flexrow" style={{ marginTop: "4vh", marginLeft: "12vw" }}>
                            <button onClick={(e) => this.toggleChange(e)} className="button" style={{ color: "black", background: "white", boxShadow: "0px 1px 10px rgba(0, 0, 0, 0.1)" }} value="video">Video</button>
                            <button onClick={(e) => this.toggleChange(e)} className="button" style={{ color: "black", background: "white", boxShadow: "0px 1px 10px rgba(0, 0, 0, 0.1)", marginLeft: "8vw" }} value="pdf">PDF/Notes</button>
                            <button onClick={(e) => this.toggleChange(e)} className="button" style={{ color: "black", background: "white", boxShadow: "0px 1px 10px rgba(0, 0, 0, 0.1)", marginLeft: "8vw" }} value="weblines">Web lines</button>
                        </div>

                        <div style={{ width: "auto", display: "grid", gridTemplateColumns: "auto auto auto auto", margin: "5%", background: "white", overflowX: (this.state.toggleList && arrayOfPDF) || (this.state.toggleList && arrayOfVideo) ? "scroll" : "none" }}>
                            {this.state.showListVideo
                                ?
                                arrayOfVideo.map((video, index) => {
                                    return (
                                        <>
                                            <div onClick={() => this.handleOpenVideo(video)} key={index} style={{ cursor: "pointer", width: "120px", height: "80px" }}>
                                                <VideoThumbnail

                                                    videoUrl={video}
                                                    width={120}
                                                    height={100}
                                                />
                                            </div>
                                            <Modal isOpen={this.state.showVideo} onRequestClose={this.handleCloseVideo} style={customStyles}>
                                                <div>
                                                    <Player fluid={false} width="100%" height={512} aspectRatio="auto" src={this.state.file}>
                                                        <BigPlayButton position="center" />
                                                    </Player>
                                                </div>
                                            </Modal>
                                        </>
                                    )
                                }

                                )
                                :
                                null
                            }
                            {
                                this.state.showListPDF
                                    ?

                                    arrayOfPDF.map((pdf, ind) => {
                                        return (
                                            console.clear(),
                                            // console.log(pdf),
                                            <>
                                                <div onClick={() => this.handleOpenPDF(pdf)} style={{ width: "fit-content", marginBottom: "40px" }}>
                                                    {console.log(pdf)}
                                                    <Document
                                                        file={pdf}
                                                        onLoadSuccess={this.onDocumentLoad}

                                                    >

                                                        <Page

                                                            key={ind.toString()}
                                                            pageNumber={1}
                                                            height={80}
                                                            width={120}
                                                        />
                                                    </Document>

                                                </div>
                                                <Modal key={ind} isOpen={this.state.showPDF} onRequestClose={this.handleClosePDF} style={customStylesForPDF}>

                                                    <div style={{ overflow: "scroll", height: "620px" }}>
                                                        {/* {console.clear()} */}
                                                        {console.log(pdf)}
                                                        <Document
                                                            file={this.state.file}
                                                            onLoadSuccess={this.onDocumentLoad}
                                                        >
                                                            {/* {console.log(pdf, ind)} */}
                                                            {/* {console.log(pdf)} */}
                                                            {/* {console.log(Array.from(new Array(pageNumList[ind])))} */}
                                                            {Array.from(new Array(this.state.pageNumber)).map(
                                                                (item, index) =>
                                                                    (
                                                                        <Page

                                                                            key={`page_${index + 1}`}
                                                                            pageNumber={index + 1} // sai
                                                                            scale={this.state.scale + 0.5}
                                                                        />
                                                                    )
                                                            )}
                                                        </Document>
                                                    </div>
                                                </Modal>
                                            </>

                                        )
                                    }

                                    )

                                    :
                                    null
                            }

                        </div>






                    </div>


                </div>
                {/* {console.clear()} */}
                {/* {console.log(arrayOfPDF)} */}
            </div >

        );


    }

}



export default EResources;

import React, { Component } from "react";
import Modal from "react-modal";
import Dropzone from "react-dropzone";
import { Scrollbars } from "react-custom-scrollbars";
import {
  AiOutlineExclamationCircle,
  AiOutlineCalendar,
  AiOutlineFileText,
} from "react-icons/ai";
import { BsPlus } from "react-icons/bs";
import Drawer from "../../component/Drawer/Drawer";
import Header from "../../component/Header/Header";
import { marginTop11vh, marginTop55vh } from "../../styles/globalStyles";

const todayDate = new Date();

const imagegallery = [];

class ImageInAlbum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: { image: null, imagesize: " ", description: "" },
      image: props.location.images,
      openmodal: false,
    };
  }
  componentDidMount() {
    Modal.setAppElement("body");
  }

  onDrop = (images) => {
    // console.log(images);
    this.setState({
      images: {
        image: images,
        imagesize: images.reduce(
          (accumulator, currentValue) => accumulator + currentValue.size,
          0
        ),
      },
    });
  };
  checkifAlbumorImage = (images) => {
    if (images === null) return;
    //album
    if (images.length > 1) {
      for (let i = 0; i < images.length; i++) {
        images.map((item) => (
          <img
            src={URL.createObjectURL(images[i])}
            alt=""
            className="galleryimage"
          />
        ));
      }
    }
    //single image
    return (
      <img
        src={URL.createObjectURL(images[0])}
        alt=""
        className="galleryimage"
      />
    );
  };

  reviewImageBeforeAddingtoGallery = () => {
    if (this.state.images.image != null)
      return (
        <img
          src={URL.createObjectURL(this.state.images.image[0])}
          alt=""
          className="galleryimage"
          style={{ marginLeft: "1.5vw" }}
        />
      );

    return <div className="galleryimage" style={{ marginLeft: "1.5vw" }}></div>;
  };

  addImageToGallery = () => {
    if (this.state.images.image == null) return;
    if (this.state.images.length > 1) {
      for (let i = 0; i < this.state.images.length; i++) {
        imagegallery.push({
          image: this.state.images[i].image,
          imagesize: this.state.images[i].imagesize,
          date: todayDate.toLocaleDateString(),
        });
      }
    } else {
      imagegallery.push({
        image: this.state.images.image,
        imagesize: this.state.images.imagesize,
        date: todayDate.toLocaleDateString(),
      });
    }

    this.setState({ images: { image: null, imagesize: "" }, openmodal: false });
  };

  displayAl = () => {
    console.log(Object.assign([], this.state.image.image).length);
    var arrP = Object.assign([], this.state.image.image);
    var arrC = [];
    // return Object.assign([], this.state.image.image).map((item, index) => (
    //   <div
    //     className="flexcolumn"
    //     style={{
    //       marginBottom: "2.5vh",
    //       marginRight: "2vw",
    //     }}
    //   >
    //     <img
    //       src={URL.createObjectURL(item[index])}
    //       alt=""
    //       className="galleryimage"
    //     />
    //   </div>
    // ));
    const arrA = arrP.map((image, index, arrP) => {
      return (
        <div>
          <img
            src={URL.createObjectURL(image)}
            alt=""
            className="galleryimage"
          />
          <div className="gallerydescriptionforimage">
            {this.state.image.date}
          </div>
          <div className="gallerydescriptionforimage">
            {this.state.image.imagesize} bytes
          </div>
        </div>
      );
    });
    // for (var i = 0; i < arrP.length; i++) {
    //   arrC.push(
    //     // <div
    //     //   className="flexcolumn"
    //     //   style={{
    //     //     marginBottom: "2.5vh",
    //     //     marginRight: "2vw",
    //     //   }}
    //     // >
    //     <div className="gallerylayout">

    //     </div>
    // <div className="gallerylayout">
    //   );

    return <div>{arrA}</div>;
  };
  render() {
    // console.log(Object.assign([], this.state.image));

    // console.log(arr);
    return (
      <div className="dashboard">
        <div className="flexrow">
          <Drawer />
          <div className="flexcolumn">
            <Header />
            <div className="form">
              <div className="titleform"> Album </div>
              <button
                className="attachment"
                onClick={() => this.setState({ openmodal: true })}
              >
                <BsPlus
                  color="white"
                  size={"1.5vw"}
                  className="attachmentplusicon"
                />
                <p>Update album</p>
              </button>
              <div
                style={{ marginTop: "2.5vh", height: "70vh", width: "80vw" }}
              >
                <Scrollbars>
                  <div className="galleryLayout">{this.displayAl()}</div>
                  {/* <div className="gallerylayout">{this.displayAl()}</div> */}
                </Scrollbars>
              </div>
            </div>
            <Modal
              isOpen={this.state.openmodal}
              className="Modal"
              onRequestClose={() =>
                this.setState({
                  images: { image: null, imagesize: "" },
                  openmodal: false,
                })
              }
            >
              <div className="headermodal">Upload file</div>
              <div className="flexrow" style={{ marginTop: "2.5vh" }}>
                {this.reviewImageBeforeAddingtoGallery()}
                <div
                  className="flexcolumn"
                  style={{ marginLeft: "5vw", marginTop: "1.5vh" }}
                >
                  <div className="flexrow" style={{ position: "absolute" }}>
                    <AiOutlineExclamationCircle
                      size={"1.6vw"}
                      color="#8C96AB"
                    />
                    <p style={modalContent}>
                      {this.state.images.imagesize} bytes
                    </p>
                  </div>
                  <div className="flexrow" style={{ position: "absolute" }}>
                    <AiOutlineCalendar
                      size={"1.6vw"}
                      color="#8C96AB"
                      style={marginTop55vh}
                    />
                    <p style={Object.assign({}, modalContent, marginTop55vh)}>
                      {todayDate.toLocaleDateString()}
                    </p>
                  </div>
                  <div className="flexrow" style={{ position: "absolute" }}>
                    <AiOutlineFileText
                      size={"1.6vw"}
                      color="#8C96AB"
                      style={marginTop11vh}
                    />
                    <input
                      type="text"
                      className="shortbox"
                      style={Object.assign({}, marginTop11vh, modalContent, {
                        marginLeft: "4vw",
                      })}
                      onChange={(event) =>
                        this.setState({
                          images: { description: event.target.value },
                        })
                      }
                    ></input>
                  </div>
                </div>
              </div>
              <div className="flexrow">
                <Dropzone onDrop={this.onDrop} accept="image/*,video/*">
                  {({ getRootProps, getInputProps }) => (
                    <section className="flexrow">
                      <div {...getRootProps({})}>
                        <input {...getInputProps()} />
                        <button className="gallerybutton">Upload</button>
                      </div>
                      <button
                        className="gallerybutton"
                        style={{ marginLeft: "19vw" }}
                        onClick={() => this.addImageToGallery()}
                      >
                        Save
                      </button>
                    </section>
                  )}
                </Dropzone>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageInAlbum;

const modalContent = {
  color: "#8C96AB",
  fontSize: "1vw",
  marginLeft: "1.5vw",
  width: "7.5vw",
  paddingLeft: "1.5vw",
};

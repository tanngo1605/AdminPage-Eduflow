import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Modal from "react-modal";
import Dropzone from "react-dropzone";
import { Scrollbars } from "react-custom-scrollbars";
import { addData, loadData } from "../../redux/Stores/GalleryReducer";
import Drawer from "../../component/Drawer/Drawer";
import Header from "../../component/Header/Header";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsPlus } from "react-icons/bs";
import {
  marginTop75vh,
  marginTop130vh,
  marginTop220vh,
  positionabsolute,
} from "../../styles/marginStyles";
import { image150 } from "../../styles/imageStyles";

const todayDate = new Date();
let albumnumber = 0;

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      album: { image: null, title: "", imagesize: " " },
      openmodal: false,
      trigger: false,
    };
  }
  componentDidMount() {
    Modal.setAppElement("body");
    this.props.dispatch(loadData());
  }

  onDrop = (album) => {
    album = album.map((image) => {
      return { file: image, clicked: false };
    });
    this.setState({
      album: {
        image: album,
        imagesize: album.reduce(
          (accumulator, currentValue) => accumulator + currentValue.size,
          0
        ),
      },
    });
  };

  handleChange = (event) => {
    let update = Object.assign({}, this.state.album, {
      [event.target.id]: event.target.value,
    });
    this.setState({ album: update });
  };

  removeItem = (image, album) => {
    album.splice(image, 1);
    this.setState({ trigger: !this.state.trigger });
  };

  addImageToGallery = () => {
    if (this.state.album.image == null) return;

    this.props.dispatch(
      addData({
        albumnumber: albumnumber,
        image: this.state.album.image,
        imagesize: this.state.album.imagesize,
        date: todayDate.toLocaleDateString(),
      })
    );

    albumnumber++;

    this.setState({ album: { image: null, imagesize: "" }, openmodal: false });
  };
  render() {
    const albums = this.props.image.showalbums;
    console.log(albums);
    return (
      <div className="dashboard">
        <div className="flexrow">
          <Drawer />
          <div className="flexcolumn">
            <Header />
            <div className="form">
              <h1 className="titleform"> Gallery </h1>
              <button className="attachment" onClick={() => this.setState({ openmodal: true })}>
                <BsPlus color="white" size={"1.5vw"} className="attachmentplusicon"/>
                <p>Choose File</p>
              </button>
              <div
                style={{ marginTop: "2.5vh", height: "70vh", width: "80vw" }}
              >
                <Scrollbars>
                  <div className="gallerylayout">
                    {albums &&
                      albums.map((image, index) => (
                        <div
                          key={index}
                          className="flexcolumn"
                          style={{ marginBottom: "2.5vh", marginRight: "2vw" }}
                        >
                          {image.album.length > 1 ? (
                            <NavLink
                              exact
                              to={{ pathname: `/gallery/${index}` }}
                            >
                              <img
                                src={URL.createObjectURL(image.album[0].file)}
                                alt=""
                                style={image150}
                              />
                            </NavLink>
                          ) : (
                            <img
                              src={URL.createObjectURL(image.album[0].file)}
                              alt=""
                              style={image150}
                            />
                          )}

                          <div className="gallerydescriptionforimage">
                            {image.date}
                          </div>
                          <div className="gallerydescriptionforimage">
                            {image.albumsize} bytes
                          </div>
                        </div>
                      ))}
                  </div>
                </Scrollbars>
              </div>
            </div>
            <Modal
              isOpen={this.state.openmodal}
              className="Modal"
              onRequestClose={() => this.setState({ openmodal: false })}
            >
              <div className="headermodal">Upload file</div>
              <div className="flexrow" style={{ marginTop: "2.5vh" }}>
                <div
                  className="flexcolumn"
                  style={{ marginLeft: "2vw", marginTop: "1.5vh" }}
                >
                  <div className="flexrow" style={positionabsolute}>
                    <p style={ modalContent}>Title</p>
                    <input
                      type="text"
                      id="title"
                      className="shortbox"
                      style={ { marginLeft: "10.2vw" }}
                      onChange={this.handleChange}
                    ></input>
                  </div>
                  <div className="flexrow" style={positionabsolute}>
                    <p style={Object.assign({}, modalContent, marginTop75vh)}>
                      Date
                    </p>
                    <p style={Object.assign({}, modalContent, marginTop75vh)}>
                      {todayDate.toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flexrow">
                <Dropzone onDrop={this.onDrop} accept="image/*,video/*">
                  {({ getRootProps, getInputProps }) => (
                    <section className="flexcolumn" style={marginTop130vh}>
                      <div {...getRootProps({})}>
                        <input {...getInputProps()} />
                        <button className="gallerybutton">Upload Album</button>
                      </div>
                    </section>
                  )}
                </Dropzone>
                <div className="imagepreviewarea" style={marginTop220vh}>
                  <Scrollbars>
                    {this.state.album.image &&
                      this.state.album.image.map((image, index) => (
                        <div key={index} className="imagepreview">
                          <div style={positionabsolute}>
                            <AiOutlineCloseCircle
                              color="black"
                              className="imagewithdeleteicon"
                              size={"1.5vw"}
                              onClick={() =>
                                this.removeItem(image, this.state.album.image)
                              }
                            />
                          </div>
                          <img
                            src={URL.createObjectURL(image.file)}
                            alt=""
                            style={{
                              position: "absolute",
                              width: "22vw",
                              height: "10vw",
                            }}
                          />
                        </div>
                      ))}
                  </Scrollbars>
                </div>
                <button
                  className="gallerybutton"
                  style={
                    {
                      marginLeft: "23vw",
                      marginTop: "50.5vh",
                      background: "#262F56",
                    }
                  }
                  onClick={() => this.addImageToGallery()}
                >
                  Save
                </button>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  image: state.image,
});
export default connect(mapStateToProps)(Gallery);

const modalContent = {
  color: "#8C96AB",
  fontSize: "1.2vw",
  marginLeft: "0.5vw",
  width: "7.5vw",
  paddingLeft: "1.5vw",
};

import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import Dropzone from "react-dropzone";
import { Scrollbars } from "react-custom-scrollbars";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import {
  loadAlbum,
  loadSpecificAlbum,
  updateAlbum,
} from "../../redux/Stores/GalleryReducer";
import Drawer from "../../component/Drawer/Drawer";
import Header from "../../component/Header/HeaderAdmin";
import { positionabsolute } from "../../styles/marginStyles";
import { image150 } from "../../styles/imageStyles";

class ImageInAlbum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: {
        image: null,
        date: new Date().toLocaleDateString(),
        imagesize: " ",
      },
      openmodal: false,
      deletemode: false,
      trigger: false,
    };
  }
  componentDidMount() {
    Modal.setAppElement("body");
    this.props.dispatch(loadAlbum());
    this.props.dispatch(
      loadSpecificAlbum({ albumnumber: this.props.location.pathname.slice(9) })
    );
  }

  onDrop = (images) => {
    images = images.map((image) => {
      return { file: image, clicked: false };
    });
    this.setState({ images: { image: images } });
  };
  selectanImage = (image) => {
    image.clicked = !image.clicked;
    this.setState({ trigger: !this.state.trigger });
  };
  deleteImage = (album) => {
    if (!album) return;

    let selectimages = album[0].album.filter((image) => {
      return image.clicked === true;
    });

    if (this.state.deletemode === false) this.setState({ deletemode: true });
    else
      this.props.dispatch(
        updateAlbum({
          action: "delete",
          albumnumber: this.props.location.pathname.slice(9),
          selectimages: selectimages,
        })
      );
  };
  removeItem = (image, album) => {
    album.splice(image, 1);
    this.setState({ trigger: !this.state.trigger });
  };

  addImageToGallery = () => {
    if (this.state.images.image === null) return;

    this.props.dispatch(
      updateAlbum({
        action: "add",
        albumnumber: this.props.location.pathname.slice(9),
        addimage: this.state.images.image,
      })
    );
    this.setState({ images: { image: null, imagesize: "" }, openmodal: false });
  };
  render() {
    const showimagesinalbum = this.props.image.showalbums;

    return (
      <div className="dashboard">
        <div className="flexrow">
          <Drawer />
          <div className="flexcolumn">
            <Header />
            <div className="form">
              <div className="titleform">
                {" "}
                Album {this.props.match.params.album_name}{" "}
              </div>
              <div style={{ marginLeft: "auto", marginRight: "5vw" }}>
                <button
                  className="deleteandaddimagebutton"
                  onClick={() => this.deleteImage(showimagesinalbum)}
                  style={{
                    borderBottomLeftRadius: "5vw",
                    borderTopLeftRadius: "5vw",
                  }}
                >
                  <p>Delete</p>
                </button>
                <button
                  className="deleteandaddimagebutton"
                  onClick={() => this.setState({ openmodal: true })}
                  style={{
                    borderBottomRightRadius: "5vw",
                    borderTopRightRadius: "5vw",
                  }}
                >
                  <p>Add more</p>
                </button>
              </div>
              <div
                style={{ marginTop: "2.5vh", height: "70vh", width: "80vw" }}
              >
                <Scrollbars>
                  {showimagesinalbum &&
                    showimagesinalbum.map((album, index) => (
                      <div className="gallerylayout" key={index}>
                        {album.album.map((image, index2) => (
                          <div
                            key={index2}
                            className="flexcolumn"
                            style={{
                              marginBottom: "2.5vh",
                              marginRight: "2vw",
                            }}
                          >
                            {this.state.deletemode ? (
                              image.clicked ? (
                                <div>
                                  <div style={positionabsolute}>
                                    <TiTick
                                      color="white"
                                      className="selectimage"
                                      style={{ background: "#04044e" }}
                                      size={"1.5vw"}
                                    />
                                  </div>
                                  <img
                                    src={URL.createObjectURL(image.file)}
                                    alt=""
                                    onClick={() => this.selectanImage(image)}
                                    style={image150}
                                  />
                                </div>
                              ) : (
                                <img
                                  src={URL.createObjectURL(image.file)}
                                  alt=""
                                  onClick={() => this.selectanImage(image)}
                                  style={image150}
                                />
                              )
                            ) : (
                              <img
                                src={URL.createObjectURL(image.file)}
                                alt=""
                                style={image150}
                              />
                            )}
                            <div className="gallerydescriptionforimage">
                              {album.date}
                            </div>
                            <div className="gallerydescriptionforimage">
                              {image.file.size} bytes
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                </Scrollbars>
              </div>
            </div>
            <Modal
              isOpen={this.state.openmodal}
              className="Modal2"
              onRequestClose={() =>
                this.setState({
                  images: { image: null, imagesize: "" },
                  openmodal: false,
                })
              }
            >
              <div className="headermodal">Upload file</div>
              <div className="flexrow">
                <Dropzone onDrop={this.onDrop} accept="image/*,video/*">
                  {({ getRootProps, getInputProps }) => (
                    <section
                      className="flexcolumn"
                      style={{ marginTop: "2vh" }}
                    >
                      <div {...getRootProps({})}>
                        <input {...getInputProps()} />
                        <button className="gallerybutton">Upload Album</button>
                      </div>
                    </section>
                  )}
                </Dropzone>
              </div>
              <div className="imagepreviewarea" style={{ marginTop: "8vh" }}>
                <Scrollbars>
                  {this.state.images.image &&
                    this.state.images.image.map((image, index) => (
                      <div key={index} className="imagepreview">
                        <div style={{ position: "absolute" }}>
                          <AiOutlineCloseCircle
                            color="black"
                            className="imagewithdeleteicon"
                            size={"1.5vw"}
                            onClick={() =>
                              this.removeItem(image, this.state.images.image)
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
                onClick={() => this.addImageToGallery()}
                style={Object.assign(
                  {},
                  {
                    marginLeft: "23vw",
                    marginTop: "2vh",
                    background: "#262F56",
                  }
                )}
              >
                Save
              </button>
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
export default connect(mapStateToProps)(ImageInAlbum);

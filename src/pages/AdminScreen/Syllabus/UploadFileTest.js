import React, { Component } from "react";

class UploadFile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: "",
    };
  }

  onChange(e) {
    let files = e.target.files;
    console.warn("data file", files);
  }

  render() {
    return (
      <div onSubmit={this.onFormSubmit}>
        <h1>React js file Upload</h1>
        <input type="file" name="file" onChange={(e) => this.onChange(e)} />
      </div>
    );
  }
}
export default UploadFile;

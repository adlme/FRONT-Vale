import React, { Component } from "react";
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";
 
class FileUploadComponent extends Component {
  state = {
    isUploading: false,
    progress: 0,
    avatarURL: ""
  };
 
  handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });

  handleProgress = progress => this.setState({ progress });

  handleUploadError = error => {
    this.setState({ isUploading: false });
    console.error(error);
  };

  handleUploadSuccess = filename => {
    this.setState({ progress: 100, isUploading: false });
    firebase
      .storage()
      .ref("images")
      .child(filename)
      .getDownloadURL()
      .then(url => {
        console.log(url)
        this.props.url(url)
      });
  };
 
  render() {
    const {isUploading, progress, avatarURL} = this.state;
    return (
      <div className="upload-photo">
          <label style={{backgroundColor: '#6bbc57', color: 'white', padding: 10, borderRadius: 4, pointer: 'cursor'}}>
            Upload profile picture
            <FileUploader
              hidden
              maxHeight="500"
              maxWidth="500"
              accept="image/*"
              storageRef={firebase.storage().ref('images')}
              onUploadStart={this.handleUploadStart}
              onUploadError={this.handleUploadError}
              onUploadSuccess={this.handleUploadSuccess}
              onProgress={this.handleProgress}
            />
          </label>
      </div>
    );
  }
}
 
export default FileUploadComponent;
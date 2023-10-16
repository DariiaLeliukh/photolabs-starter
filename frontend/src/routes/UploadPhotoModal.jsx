import React, { Fragment, useState } from 'react';
import axios from 'axios';


import '../styles/PhotoDetailsModal.scss';
import '../styles/UploadPhotoModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

const UploadPhotoModal = (props) => {

  const [selectedFile, setSelectedFile] = useState(null);

  // On file select (from the pop up)
  const onFileChange = event => {
    // Update the state
    setSelectedFile(event.target.files[0]);
  };

  // On file upload (click the upload button)
  const onFileUpload = () => {

    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append(
      "uploadedPhoto",
      selectedFile,
    );

    // Details of the uploaded file
    console.log(selectedFile);

    formData.append(
      "value",
      'test value!'
    );

    // Request made to the backend api
    // Send formData object
    axios.post("http://localhost:8001/api/photos", formData)
      .then((data) => {
        props.refreshAfterUpload();
      });
  };

  // File content to be displayed after
  // file upload is complete
  const fileData = () => {

    if (selectedFile) {

      return (
        <div>
          <p className="uploaded-file-name">You uploaded: {selectedFile.name}</p>
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h4>Choose before Pressing the Upload button</h4>
        </div>
      );
    }
  };

  return (
    <div className="photo-details-modal photo-upload-modal">
      <button className="photo-details-modal__close-button" onClick={props.closeModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className='container'>
        {!selectedFile &&
          <p>Choose file and click &quot;Upload&quot;</p>
        }
        {/* <input type="file" onChange={onFileChange} /> */}
        <label className="file">
          <input type="file" id="file" aria-label="File browser example" onChange={onFileChange} />
          <span className="file-custom"></span>
        </label>
        {fileData()}
        <button className='upload-button ' onClick={onFileUpload}>
          Upload!
        </button>
      </div>
    </div>
  );
};

export default UploadPhotoModal;

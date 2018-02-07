import './_wave-uploader.scss';

import React from 'react';
import * as FontAwesome from 'react-icons/lib/fa/';

class WaveUploader extends React.Component{
  constructor(props){
    super(props);

    this.emptyState = {
      preview: undefined,

      waveFile : '',
      waveDirty: '',
      waveError: 'Wave File is required',

    };

    this.state = this.emptyState;

    //-------------------------------------------------------------
    // BINDING HANDLES
    //-------------------------------------------------------------
    let memberFunctions = Object.getOwnPropertyNames(WaveUploader.prototype);
    for(let functionName of memberFunctions){
      if(functionName.startsWith('handle')){
        this[functionName] = this[functionName].bind(this);
      }
    }
  }

  //-------------------------------------------------------------
  // MEMBER FUNCTIONS
  //-------------------------------------------------------------

  handleValidate({type, value, files}){
    let FileTypeErrorMessage = 'Sorry, intelliSound only accepts WAV files';
    let MultipleFileUploadErrorMessage = 'You can only upload one WAV file';
    let FileNameLengthError = 'Wav filename must be at least 5  characters';

    let validFileExtensions = ['audio/wav'];
    let fileType;

    switch(type){
      case 'file':
      {
        fileType = files[0].type;
        if(files.length > 1){
          return `${MultipleFileUploadErrorMessage}`;
        }
        if(!validFileExtensions.includes(fileType)){
          return `${FileTypeErrorMessage}`;
        }
        return null;
      }
      case 'text':
        if(value.length < 5){
          return `${FileNameLengthError}`;
        }
        return null;
      default:
        return null;
    }
  }

  handleChange(event) {
    let {type, value, files} = event.target;
    if(type === 'file'){
      let error = this.handleValidate(event.target);
      if (!error){
        fileToDataURL(files[0])
          .then(preview => this.setState({preview}));
      }
      this.setState({
        wave: files[0],
        waveError : error,
        waveDirty:true,
      });
    } else if (type === 'text'){
      this.setState({
        wavename: value,
        wavenameError: this.handleValidate(event.target),
        wavenameDirty: true,
      });
    } else {
      this.setState({
        transform: value,
      });
    }
  }

  handleSubmit(event){
    const {waveError, wavenameError} = this.state;
    event.preventDefault();

  }


  //-------------------------------------------------------------
  // LIFE CYCLE HOOKS
  //-------------------------------------------------------------
  render(){
    return(
      <section className="section is-medium wave-uploader-div">

        <div className="columns">

          <div className="column-gap box">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image"/>
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p className="">Step One: Upload a WAV file
                </p>
              </div>
            </div>
          </div>

          <div className="column-gap box">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image"/>
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p className="">Step One: Upload a WAV file
                </p>
              </div>
            </div>
          </div>
          
          <div className="column-gap box">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image"/>
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p className="">Step One: Upload a WAV file
                </p>
              </div>
            </div>
          </div>

        </div>

        <form
          onSubmit={this.handleSubmit}
          className='wave-file-uploader'>
          <audio
            controls
            src={this.state.preview}
            type='audio/wav'>
          </audio>

          <input
            dragable='true'
            type='file'
            name='wav'
            onChange={this.handleChange}
          />

          <p>{this.state.wavenameDirty ? this.state.wavenameError : null} </p>

          <button type='submit'> upload wav file </button>
        </form>

      </section>
    );
  }
}

let fileUploadError = 'File is Required';

const fileToDataURL = (file) => {
  return new Promise((resolve, reject) => {
    if(!file)
      return reject(new Error(`${fileUploadError}`));

    let reader = new FileReader();

    reader.addEventListener('load', () => resolve(reader.result));
    reader.addEventListener('error', reject);

    return reader.readAsDataURL(file);
  });
};

export default WaveUploader;

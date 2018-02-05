import React from 'react';

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
        fileType = files[0].type;
        if(files.length > 1){
          return `${MultipleFileUploadErrorMessage}`;
        }
        if(!validFileExtensions.includes(fileType)){
          return `${FileTypeErrorMessage}`;
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
      <form
        onSubmit={this.handleSubmit}
        className='wave-file-uploader'>
        <audio
          controls 
          src={this.state.preview}
          type='audio/wav'>
        </audio>

        <input
          dragable
          type='file'
          name='wav'
          onChange={this.handleChange}
        />

        <p>{this.state.wavenameDirty ? this.state.wavenameError : null} </p>

        <button type='submit'> upload wav file </button>
      </form>
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


import React from 'react';

class VideoDetail extends React.Component {
  render () {
    return <input onChange={this.onInputChange} />;
  }

   onInputChange(event) {
    console.log(event.target.value);
   }
}


export default VideDetail;

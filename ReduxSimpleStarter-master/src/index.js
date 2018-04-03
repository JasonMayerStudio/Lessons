//Create a new component. This component will get put in some html
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_Key = 'AIzaSyCyIjJa6cM4vV_kqc2Cd0gOacY521nqhWI';




class App extends Component {
   constructor(props){
       super(props);

       this.state = { videos: [] };

       YTSearch ({key: API_Key, term: ('') }, (videos) => {
       this.setState({ videos });

     });


   }
   render() {
     return (
       <div>
         <SearchBar />
         <VideoList videos={this.state.videos}/>
       </div>
   );

   }


}






ReactDOM.render(<App />, document.querySelector('.container'));

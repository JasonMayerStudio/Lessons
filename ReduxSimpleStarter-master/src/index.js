//Create a new component. This component will get put in some html
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail'

const API_Key = 'AIzaSyCyIjJa6cM4vV_kqc2Cd0gOacY521nqhWI';




class App extends Component {
   constructor(props){
       super(props);

       this.state = { videos: [] };

       YTSearch ({key: API_Key, term: ('DSK8R Skateboards') }, (videos) => {
       this.setState({ videos });

     });


   }
   render() {
     return (
       <div>
         <SearchBar />
         <VideoDetail video={this.state.videos[0]} />
         <VideoList videos={this.state.videos}/>
       </div>
   );

   }


}






ReactDOM.render(<App />, document.querySelector('.container'));

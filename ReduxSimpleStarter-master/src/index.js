//Create a new component. This component will get put in some html
//Tutorial completed by Jason Mayer Studio from Udemy course on Redux
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

       this.state = {
         videos: [],
         selectedVideo: null
       };
       this.videoSearch('DSK8R Skateboards')
     }



   videoSearch(term) {
     YTSearch({key: API_Key, term: term }, (videos) => {
        this.setState({
        videos: videos,
        selectedVideo: videos[0]
        });
     });


   }

   render() {
     return (
       <div>
         <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
         <VideoDetail video={this.state.selectedVideo} />
         <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})}
         videos={this.state.videos}/>
       </div>
     );

   }

}






ReactDOM.render(<App />, document.querySelector('.container'));

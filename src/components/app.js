import _ from 'lodash';
import React, { Component } from 'react';
import SearchBar from './search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './video_list';
import VideoDetail from './video_detail';

const search_url = "https://www.googleapis.com/youtube/v3/search?part=snippet&order=relevance&maxResults=10&q=";
const api_key = "AIzaSyDYY7s68X-pS4ouLUvEKNP1mzKZxOe3MoQ";


export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = { videos : [], selectedVideo: null }
    this.videoSearch("surfboards");
    
  }

  videoSearch(term) {
    YTSearch({key : api_key, term : term} ,(videos) => {
      this.setState({ 'videos' : videos , 'selectedVideo' : videos[0] });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term)},300);
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})} videos={this.state.videos} />

      </div>
    );
  }
}

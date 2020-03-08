import React, { Component } from 'react';
import './App.scss';
import giphy from "giphy-api";

import SearchBar from "./search_bar"
import Gif from "./gif"
import GifList from "./gif_list"

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      gifs: [], 
      selectedGifId: "Jp3tixBJ0YERe4PXig"
    }
    this.search("disney")
  }

  search = (query) => {
    // TODO: API call
    giphy("92YpDEmjpmNBfWgDPHMylLTusCk3ZNGJ").search({
      q: query,
      rating: 'g',
      limit: 10
    }, (err, result) => {
      this.setState({
        gifs: result.data
      })
    });
  }
    
  render(){
    var gifs =[
      {id: "TgymIw6mCGOLM6qtab"},
      {id: "KzWg7DbeWN8EPoBTlR"}, 
      {id: "d6KxkxrInwjuJ7UKsD"}
    ];
  return (
    <div>
      <div className="left-scene">
        <SearchBar search={this.search} />
        <div className="selected-gif"> 
          <Gif id={this.state.selectedGifId} />
        </div>
      </div>
      <div className="right-scene">
        <GifList gifs={this.state.gifs} />
      </div>
    </div>
  )
}
}

export default App;

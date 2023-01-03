import React, {Component} from 'react';
import './App.scss';
import Gif from './components/gif.jsx'
import GifList from './components/gifList.jsx'
import SearchBar from './components/searchBar';
import giphy from 'giphy-api'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [
        { id: "LqaQ6RKDb0wkBwOrgo"},
        { id: "ToWn2KPbMXX6X0J1Kv"}
      ],
      selectedGifId: "SZrCdSROWuvnQA2TlC"
    }
  }
  search = (query) => {
    giphy('xZlxF1O6M0sKoVyoL89plDdm2SQiFeqx').search({
      q: query,
      limit: 10
    }, (error, result) => {
      this.setState({
        gifs: result.data
      });
    });
  }
  selectGif = (gifID) => {
    this.setState({
      selectedGifId: gifID
    });
  };

  render() {
    return (
      <div className="App">
        <div className="left-scene">
          <SearchBar search={this.search}/>
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif}/>
        </div>
      </div>
    );
  }
}

export default App;

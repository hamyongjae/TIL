import React, { Component } from 'react'
import axios from 'axios';

import SearchBar from './SearchBar';


class App extends Component {

  state = {
    image: []
  }
  onSearchSubmit = async keyword => {
    const response = await unsplash.get("/search/photos",{
      params: {query:keyword}
    });
    axios.get("https://api.unsplash.com/search/photos?page=1&query=office",{
      headers: {Authorization: "Client-ID 47f792c1754ce46c06d8de947f61897d1089a57cd9ea4ac82e94fb8a443dc59b"},
      params: { query : keyword }
    });

    console.log(response.data.results);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onUserSubmit={this.onSearchSubmit}/>
        {/* Found: {this.state.images.length} images! */}
      </div>
    )
  };
};

export default App;
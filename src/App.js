import React, { Component } from 'react';
import Button from './Components/Button/Button';
import Videos from './Components/Videos/Videos';
import Input from './Components/Input/Input';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


const key = "AIzaSyAIaqAnv3dii8NXqWZKW8GAXxiEAmkpo-Y";
const channelId = "UCXgGY0wkgOzynnHvSEVmE3A";

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      URL : [],
      max : 4
    }
  }

  handleInputChange = (e) => {
    this.setState(
      {
        max : e.target.value
      }
    )
  }

   handleClick = async () => {
    await fetch(`https://www.googleapis.com/youtube/v3/search?key=${key}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${this.state.max}`)
          .then(res => res.json())
          .then(response => {
           const URLary = response.items.map(res => {
              return "https://www.youtube.com/embed/"+res.id.videoId;
            })
            this.setState({
              URL : URLary
            })
          })
  }

  render() {
    return (
      <div className="App">
        <Input max={this.state.max} change={this.handleInputChange}/>
        <Button get={this.handleClick}/> <br />
        <Videos data={this.state.URL}/>
      </div>
    );
  }
}

export default App;

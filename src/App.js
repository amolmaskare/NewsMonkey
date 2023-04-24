import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  apiKey=process.env.REACT_APP_NEWS_API  //REACT_APP_NEWS_API="752a266ec81640d99d468a66496622e9"
  state = {
    progress : 0
  }
  setProgress = (progress) => {
    this.setState({progress: progress})
  }

  render() {
    return (

      <div>
        <Router>
          <Navbar />
          <LoadingBar
            height={3}
            color='#f11946'
            progress={this.state.progress}
          />
          <Switch>
            <Route exact path="/NewsMonkey"> <News setProgress={this.setProgress} apiKey={this.apiKey}  key="general" pageSize={10} country="in" category="general" /></Route>
            <Route exact path="/business"> <News setProgress={this.setProgress} apiKey={this.apiKey}  key="business" pageSize={10} country="in" category="business" /></Route>
            <Route exact path="/entertainment"> <News setProgress={this.setProgress} apiKey={this.apiKey}  key="entertainment" pageSize={10} country="in" category="entertainment" /></Route>
            <Route exact path="/general"> <News setProgress={this.setProgress} apiKey={this.apiKey}  key="general" pageSize={10} country="in" category="general" /></Route>
            <Route exact path="/health"> <News setProgress={this.setProgress} apiKey={this.apiKey}  key="health" pageSize={10} country="in" category="health" /></Route>
            <Route exact path="/science"> <News setProgress={this.setProgress} apiKey={this.apiKey}  key="science" pageSize={10} country="in" category="science" /></Route>
            <Route exact path="/sports"> <News setProgress={this.setProgress} apiKey={this.apiKey}  key="sports" pageSize={10} country="in" category="sports" /></Route>
            <Route exact path="/technology"> <News setProgress={this.setProgress} apiKey={this.apiKey}  key="technology" pageSize={10} country="in" category="technology" /></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}


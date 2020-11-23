import React, { Component } from "react";
import {connect} from 'react-redux'
import {getSmurfs} from '../actions'
import SmurfContainer from './SmurfContainer'
import NewSmurfForm from './Form'
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount(){
    this.props.getSmurfs()
  }
  render() {
    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <NewSmurfForm />
        <div className='app-container'>
        <SmurfContainer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, {getSmurfs})(App); 
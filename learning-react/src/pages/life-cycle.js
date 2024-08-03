import React, { Component } from 'react';

class LifeCycle extends Component {

  constructor(){
    super();
    this.state = {
      username : ""
    }

    console.log("Triggered constructor");
  }

  static getDerivedStateFromProps(){
    console.log("Triggered getDerivedStateFromProps");
    return null;
  }

  componentDidMount(){
    console.log("Triggered componentDidMount");
  }

  handleInput(event){
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  shouldComponentUpdate(){
    console.log("Triggered shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(preProp, preState){
    console.log("Triggered getSnapshotBeforeUpdate");
    console.log(preState, this.state);
    return this.state;
  }


  componentDidUpdate(){
    console.log("Triggered componentDidUpdate");
  }

  componentWillUnmount(){
    // alert("You are about to leave this page");
    console.log("Triggered componentWillUnmount");

  }

  render() {
    console.log("Triggered render");
    return (
      <div>
        <h1>React Life Cycle Phases</h1>
        <h2>Mounting Phase</h2>
        <ol>
          <li>constructor()</li>
          <li>getDerivedStateFromProps()</li>
          <li>render()</li>
          <li>componentDidMount()</li>
        </ol>
        <h2>Updating Phase</h2>
        <ol>
          <li>getDerivedStateFromProps()</li>
          <li>shouldComponentUpdate()</li>
          <li>render()</li>
          <li>getSnapshotBeforeUpdate()</li>
          <li>componentDidUpdate()</li>
        </ol>
        <h2>Unmounting Phase</h2>
        <ol>
          <li>componentWillUnmount()</li>
        </ol>
        <div>
          <label>Enter you Username: </label>
          <input type='text' placeholder='Enter Username' onChange={this.handleInput.bind(this)} name='username' />
          <h3>{this.state.username}</h3>
        </div>
      </div>
    );
  }
}

export default LifeCycle;
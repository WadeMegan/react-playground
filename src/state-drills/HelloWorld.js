import React from 'react';

class HelloWorld extends React.Component {
    constructor(props){
        super(props)
        this.state = {who:"world"}
    }
    handleWorldClick=()=>{
        this.setState({
            who:"world"
        })
    }
    handleFriendClick=()=>{
        this.setState({
            who:"friend"
        })
    }
    handleReactClick=()=>{
        this.setState({
            who:"React"
        })
    }
    render() {
      return (
        <div>
            <p>Hello, {this.state.who}!</p>
            <button onClick={this.handleWorldClick}>world</button>
            <button onClick={this.handleFriendClick}>friend</button>
            <button onClick={this.handleReactClick}>React</button>
        </div>
      )
    }
  }

export default HelloWorld
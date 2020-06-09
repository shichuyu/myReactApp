/*
 * @Author: shichuyu
 * @Date: 2020-06-08 17:55:49
 * @LastEditors: shichuyu
 * @LastEditTime: 2020-06-09 14:38:52
 * @Description: 
 */ 
import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Game from './game/game'
import Blog from './blog/blog'
// import Test from './test/test'

function App() {
  const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
  ];
  return (
    <div className="App">
      <Game />
      <Blog posts={posts} />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

/* class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      dalao: '天哥'
    }
  }
  command(){
    this.setState({
      dalao: '宇哥'
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello {this.state.dalao}
          </p>
            <Test name={this.state.dalao} />
            <button onClick={this.command.bind(this)}>天哥下令改口</button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }
} */

export default App; 
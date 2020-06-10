/*
 * @Author: shichuyu
 * @Date: 2020-06-08 17:55:49
 * @LastEditors: shichuyu
 * @LastEditTime: 2020-06-10 18:03:41
 * @Description: 
 */ 
import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Game from './game/game'
import Blog from './blog/blog'
import NameForm from './nameForm/nameForm'
import Reservation from './nameForm/reservation'
import Calculator from './calculator/calculator'
import FilterableProductTable from './searchApp/searchApp'
// import Test from './test/test'

function App() {
  const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
  ];

  const PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
  ];
  return (
    <div className="App">
      {/* <Game />
      <Blog posts={posts} />
      
      <NameForm />

      <div>
        <h2>处理多个输入</h2>
        <Reservation />
      </div>

      <div>
        <h2>状态提升</h2>
        <Calculator />
      </div> */}

      <FilterableProductTable products={PRODUCTS} />
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
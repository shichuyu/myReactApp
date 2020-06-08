/*
 * @Author: shichuyu
 * @Date: 2020-06-08 17:50:01
 * @LastEditors: shichuyu
 * @LastEditTime: 2020-06-08 18:45:25
 * @Description: 
 */ 
import React from 'react';
import ReactDOM from 'react-dom';

class Test extends React.Component {
  // constructor(props){
  //   super(props)
  //   this.state = props
  // }
  renderSidebar() {
    return (
      // <ul>
      //   {this.props.posts.map((post) =>
      //     <li key={post.id}>
      //       {post.title}
      //     </li>
      //   )}
      // </ul>
      
    <div>tywd</div>
    )
  };
  
  renderContent() {
    return (
    //   <div key={this.props.post.id}>
    //    <h3>{this.props.post.title}</h3>
    //    <p>{this.props.post.content}</p>
    //  </div>
    <div>tywd</div>
    )
  };
  render(){
    return (
      <div>
        {this.renderSidebar}
      <hr />
        {this.renderContent}
      </div>
    );
  }
}

export default Test
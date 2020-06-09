/*
 * @Author: shichuyu
 * @Date: 2020-06-09 14:36:32
 * @LastEditors: shichuyu
 * @LastEditTime: 2020-06-09 14:42:48
 * @Description: 
 */ 
import React from 'react';
/* function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) =>
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  );
  const content = props.posts.map((post) =>
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
} */
class Blog extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      val: 'ty'
    }
  }

  render(){
    const sidebar = (
      <ul>
        {this.props.posts.map((post) =>
          <li key={post.id}>
            {post.title}
          </li>
        )}
      </ul>
    );
    const content = this.props.posts.map((post) =>
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>
    );
    return (
      <div>
        {sidebar}
        <hr />
        {content}
      </div>
    );
  }
}

export default Blog;
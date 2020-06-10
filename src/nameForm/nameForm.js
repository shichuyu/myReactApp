import React from 'react';
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      arr_value: ['葡萄柚','酸橙','椰子','芒果']
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log(event.target)
    console.log(event.target.value)
    console.log(event.target.type)
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('提交的名字: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* <label>
          名字:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label> */}
        {/* <label>
          文章:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label> */}
        {/* <label>
          选择你喜欢的风味:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="default">请选择</option>
            {this.state.arr_value.map((value,index) => <option key={index} value={value}>{value}</option>)}
          </select>
        </label> */}
        <input type="submit" value="提交" />
        <div>
          <input type="file" />
        </div>
      </form>
    );
  }
}
export default NameForm;
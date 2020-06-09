import React from 'react';
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log(event)
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
        <label>
          选择你喜欢的风味:
          <select multiple={true} value={this.state.value} onChange={this.handleChange}>
            <option value="default">请选择</option>
            <option value="grapefruit">葡萄柚</option>
            <option value="lime">酸橙</option>
            <option value="coconut">椰子</option>
            <option value="mango">芒果</option>
          </select>
        </label>
        <input type="submit" value="提交" />
      </form>
    );
  }
}
export default NameForm;
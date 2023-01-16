import React, { Component } from "react";
import { FaPlusCircle } from "react-icons/fa";
// eslint-disable-next-line
class InputTodo extends Component {
    state = {
        fName: "",
        lastName: "",
    };

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleSubmit = e => {
        e.preventDefault()
            if (this.state.title.trim()) {
                this.props.addTodoProps(this.state.title)
                this.setState({
                title: "",
                })
            } else {
                alert("Please write item")
            }       
      };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input type="text" className="input-text" placeholder="Add Todo..." value={this.state.title}  name="title" onChange={this.onChange}/>
        <button className="input-submit"><FaPlusCircle style={{ color: "darkcyan", fontSize: "20px", marginTop: "2px" }}/></button>
      </form>
    );
  };
};

export default InputTodo;
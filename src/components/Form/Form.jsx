import React, { Component } from 'react';
export class Form extends Component {
  state = { productName: '', productQuantity: '' };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };


  resetForm = () => {
    this.setState({ productName: '', productQuantity: '' });
  };
  

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    this.props.onSubmit(this.state);
    this.resetForm();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="">
          Наименование продукта:
          <input
            type="text"
            name="productName"
            value={this.state.productName}
            onChange={this.handleChange}
          />
        </label>
        <br></br>
        <label htmlFor="">
          Количество штук:
          <input
            type="text"
            name="productQuantity"
            value={this.state.productQuantity}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <button type="submit">Добавить</button>
      </form>
    );
  }
}

import React, { Component } from 'react';
import { Formik } from 'formik';
import { FormStyle, InputName, InputLabel, Wrapper, AddButton } from './Form.style';
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
    this.props.onSubmit(this.state);
    this.resetForm();
  };

  render() {
    return (
      
        <Formik initialValues={{ productName: '', productQuantity: '' }}>
          <Wrapper>
          <FormStyle onSubmit={this.handleSubmit}>
            <InputLabel htmlFor="">
              Наименование продукта:
              <InputName
                type="text"
                name="productName"
                value={this.state.productName}
                onChange={this.handleChange}
              />
            </InputLabel>
            <InputLabel htmlFor="">
              Количество:
              <InputName
                type="text"
                name="productQuantity"
                value={this.state.productQuantity}
                onChange={this.handleChange}
              />
            </InputLabel>
            <AddButton type="submit">Добавить</AddButton>
          </FormStyle>
          </Wrapper>
        </Formik>
      
    );
  }
}

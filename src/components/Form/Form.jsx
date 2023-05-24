import React, { Component } from 'react';
import { Formik } from 'formik';
import { FormStyle, InputName, InputLabel, Wrapper, AddButton, Text, BtnText } from './Form.style';
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
              <Text>Наименование продукта:</Text>
              <InputName
                type="text"
                name="productName"
                value={this.state.productName}
                onChange={this.handleChange}
              />
            </InputLabel>
            <InputLabel htmlFor="">
              <Text>Количество:</Text>
              <InputName
                type="text"
                name="productQuantity"
                value={this.state.productQuantity}
                onChange={this.handleChange}
              />
            </InputLabel>
            <AddButton type="submit"><BtnText>Добавить</BtnText></AddButton>
          </FormStyle>
          </Wrapper>
        </Formik>
      
    );
  }
}

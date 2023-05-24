import React from 'react';
import { Component } from 'react';
import { Products } from '../Products';
import { Header, Wrapper } from './App.styled';
import { Form } from '../Form';
import { nanoid } from 'nanoid';

//nanoid()

export class App extends Component {
  state = {
    products: [
      { id: 'id-1', text: 'Baget', quantity: 1, completed: true },
      { id: 'id-2', text: 'Milk', quantity: 1,completed: false },
      { id: 'id-3', text: 'Chocolate', quantity: 1, completed: false },
    ],
  };

  deleteProduct = productId => {
    this.setState(prevState => ({
      products: prevState.products.filter(product => product.id !== productId),
    }));
  };

  formSubmitHandler = data => {
    console.log(data);
    const newProduct = { 
      id: nanoid(),
      text: data.productName,
      quantity: data.productQuantity,
      completed: false,
    };
    this.setState(prevState => ({
      products: [newProduct, ...prevState.products],
    }));
  };

  // hendleInputChange = evenet => {
  //   console.log(evenet.currentTarget.value);
  //   this.setState({ productName: evenet.currentTarget.value });
  // };

  toggleCompleted = productId => {
    this.setState(prevState => ({
      products: prevState.products.map(product => {
        if (product.id === productId) {
          return {
            ...product,
            completed: !product.completed,
          };
        }
        return product;
      }),
    }));
  };

  render() {
    const { products } = this.state;

    // Filter
    // const completedProducts = products.filter(product => product.completed.length);

    /////////////////////////////////////////////////////////////////
    // Reduce - когда нужно посчитать что-то из массива! (Общее количество)

    const totalProduct = products.length; //Вычисляемое значение
    const completedProducts = products.reduce(
      (acc, product) => (product.completed ? acc + 1 : acc),
      0
    ); //Вычисляемое значение

    ///////////////////////////////////////////////////////////////
    return (
      <Wrapper>
        <Header>Продуктовый список</Header>
        <Form onSubmit={this.formSubmitHandler}></Form>
        <Products
          onToggleCompleted={this.toggleCompleted}
          products={products}
          onDeleteProduct={this.deleteProduct}
        />
        <span>Количество продуктов: {totalProduct}</span>
        <span>Учтено: {completedProducts} </span>
      </Wrapper>
    );
  }
}

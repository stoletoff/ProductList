import React from 'react';
import { Component } from 'react';
import { Products } from '../Products';
import { Header, Wrapper } from './App.styled';
export class App extends Component {
  state = {
    products: [
      { id: 'id-1', text: 'Baget', completed: false },
      { id: 'id-2', text: 'Milk', completed: false },
      { id: 'id-3', text: 'Chocolate', completed: false },
    ],
  };

  render() {
    const { products } = this.state;

    return (
      <Wrapper>
        <Header>ProductList</Header>
        <Products products={products} />
      </Wrapper>
    );
  }
}

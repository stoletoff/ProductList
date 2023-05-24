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

  deleteProduct = productId => {
    this.setState(prevState => ({
      products: prevState.products.filter(product => product.id !== productId),
    }));
  };

  render() {
    const { products } = this.state;

    return (
      <Wrapper>
        <Header>ProductList</Header>
        <Products products={products} onDeleteProduct={this.deleteProduct}/>
      </Wrapper>
    );
  }
}

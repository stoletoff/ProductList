import React from 'react';
import { Component } from 'react';
import { Products } from '../Products';
import { Header, Wrapper, ModalBtn, CloseBtn } from './App.styled';
import { Form } from '../Form';
import { Modal } from '../Modal';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    products: [
      { id: 'id-1', text: 'Baget', quantity: 1, completed: true },
      { id: 'id-2', text: 'Milk', quantity: 1, completed: false },
      { id: 'id-3', text: 'Chocolate', quantity: 1, completed: false },
    ],
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
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
  /////////////////////// Жизненный цикл ////////////////////////////////////////
  // Стадия монтажа - componentDidMount  - вызывается один раз при создании компонента
  // При стадии монтажа можно прочитать значения из LOCALSTORAGE. (Получить начальные данные)
  componentDidMount() {
    console.log('Это стадия монтажа, делаю проверку в localStorage');
    const productList = localStorage.getItem('PRODUCTS');
    const parsedProductList = JSON.parse(productList);
    // Проверка localStorage на наличие данных с прошлой сессии, если данных нет, то зарендерится по умолчанию state:
    if (parsedProductList) {
      this.setState({ products: parsedProductList });
    }
    console.log(parsedProductList);
  }
  // Стадия обновления:
  //- componentDidUpdate - вызывается каждый раз при обновлении компонента (при новых пропсах или изменении стейта) Если делаем setState то проверить что бы поле обновилось иначе зациклится компонент
  // componentDidUpdate(prevProps, prevState) принимает преведучещее значение props и state (значения до обновления)
  // можно делать проверку для записи в localStorage, если при обновлении компонента this.state.products !== prevState.state.products сравнение массивов по ссылке
  // если они не равны то products был обновлен
  componentDidUpdate(prevProps, prevState) {
    console.log('App componentDidUpdate');
    if (this.state.products !== prevState.products) {
      console.log('Update products');
      localStorage.setItem('PRODUCTS', JSON.stringify(this.state.products));
    }
  }

  //- getSnapshotBeforeUpdate - (использовать для привязки каретки скрола при добавлении данных на странице)
  // Стадия размонтирования - componentWillUnmount - при удалении компонента из DOM.

  render() {
    const { products, showModal } = this.state;

    // Filter
    // const completedProducts = products.filter(product => product.completed.length);

    /////////////////////////////////////////////////////////////////
    // Reduce - когда нужно посчитать что-то из массива! (Общее количество)

    const totalProduct = products.length; //Вычисляемое значение
    const completedProducts = products.reduce(
      (acc, product) => (product.completed ? acc + 1 : acc),
      0
    ); //Вычисляемое значение

    return (
      <Wrapper>
        <ModalBtn type="button" onClick={this.toggleModal}>Открыть модалку</ModalBtn>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <h1>I`m modal window</h1>
            <p>Lorem ipsum dolor sit amet.</p>
            <CloseBtn type="button" onClick={this.toggleModal}>Закрыть</CloseBtn>
          </Modal>
        )}
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

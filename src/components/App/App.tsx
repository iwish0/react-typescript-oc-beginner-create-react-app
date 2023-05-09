import { FunctionComponent } from 'react';
import { Banner } from '../Banner/Banner';
import { Cart } from '../Cart/Cart';
import { ShoppingList } from '../ShoppingList/ShoppingList';
import { Categories } from '../Categories/Categories';
import './App.css';

export const App: FunctionComponent = () => {
  return (
    <>
      <Banner />
      <Cart />
      <Categories />
      <ShoppingList />
    </>
  );
}
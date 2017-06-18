import React from 'react';
import Footer from './Footer.jsx';
import AddItem from '../containers/AddItem.jsx';
import ItemList from '../containers/ItemList.jsx';

const App = () => (
  <div>
    <AddItem />
    <ItemList />
    <Footer />
  </div>
);

export default App;
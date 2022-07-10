import Home from './pages/Home';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>   
        <Route path="/products/:category" element={<ProductList />}/>   
        <Route path="/product/:id" element={<Product />}/>   
        <Route path="/cart" element={<Cart/>}/>   
        <Route path="/login" element={<Login />}/>   
        <Route path="/register" element={<Register />}/>   
      </Routes>
    </BrowserRouter>
  );
}

export default App;

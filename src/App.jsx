
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/NavBar";
import Cart from "./components/Carrito";
import "./main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./components/CartContext";


function App() {
  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
            <Routes>
              <Route path="/" element={<ItemListContainer/>} />
              <Route path="/item/:id" element={<ItemDetailContainer/>}/>
              <Route path="/productos" element={<ItemListContainer/>} />
              <Route path="/productos/:categoria" element={<ItemListContainer/>} />
              <Route path="/carrito" element={<Cart/>}/>
            </Routes>
          </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;

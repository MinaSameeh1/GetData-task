import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import ProductDetails from "./Components/productDetails/ProductDetails";

function App() {
  return (
    <div className="App">
      <Routes >
        <Route element={<Home />} path="/"/>
        <Route element={<ProductDetails />} path="/product/:id"/>
      </Routes>
    </div>
  );
}

export default App;

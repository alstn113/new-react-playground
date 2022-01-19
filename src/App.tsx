import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import ProductList from "./pages/Product/ProductList";
import ProductForm from "./pages/Product/ProductForm";
import Counter from "./pages/Counter";
import ImageUpload from "./pages/ImageUpload";
import UITest from "./pages/UITest";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/product" element={<ProductList />} />
          <Route path="/product/create" element={<ProductForm />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/image" element={<ImageUpload />} />
          <Route path="/uitest" element={<UITest />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

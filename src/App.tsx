import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import ProductList from "./pages/Product/ProductList";
import ProductForm from "./pages/Product/ProductForm";
import ImageUpload from "./pages/ImageUpload";
import UITest from "./pages/UITest";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RequireAuth from "./components/auth/RequireAuth";
import Users from "./pages/Users";
import PersistLogin from "./components/auth/PersistLogin";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          {/* public routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product" element={<ProductList />} />
          <Route path="/product/create" element={<ProductForm />} />
          <Route path="/image" element={<ImageUpload />} />
          <Route path="/uitest" element={<UITest />} />

          {/* protect these routes */}
          <Route element={<PersistLogin />}>
            <Route element={<RequireAuth />}>
              <Route path="/" element={<Main />} />
            </Route>

            <Route element={<RequireAuth />}>
              <Route path="/users" element={<Users />} />
            </Route>
          </Route>

          {/* catch all */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

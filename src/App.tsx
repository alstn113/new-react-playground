import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Sub from "./pages/Sub";
import Counter from "./pages/Counter";
import ImageUpload from "./pages/ImageUpload";
import UITest from "./pages/UITest";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/sub" element={<Sub />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/image" element={<ImageUpload />} />
          <Route path="/uitest" element={<UITest />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

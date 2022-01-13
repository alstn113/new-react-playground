import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Sub from "./pages/Sub";
import Counter from "./pages/Counter";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/sub" element={<Sub />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

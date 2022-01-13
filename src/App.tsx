import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Sub from "./pages/Sub";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/sub" element={<Sub />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

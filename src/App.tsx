import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Main from "./pages/Main";
import Sub from "./pages/Sub";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Link to="/">Main</Link>
        </div>
        <div>
          <Link to="/sub">Sub</Link>
        </div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/sub" element={<Sub />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

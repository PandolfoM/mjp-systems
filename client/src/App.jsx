import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollTop from "./components/ScrollTop";
import Nav from "./components/Nav";
import Home from "./pages/home";
import Reset from "./pages/resetForm";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/form" element={<Reset />}></Route>
      </Routes>
      <ScrollTop />
    </BrowserRouter>
  );
}

export default App;

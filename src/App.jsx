import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollTop from "./components/ScrollTop";
import Nav from "./components/Nav";
import Home from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
      </Routes>
      <ScrollTop />
    </BrowserRouter>
  );
}

export default App;

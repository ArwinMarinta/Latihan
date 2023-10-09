import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SearchMovie from "./pages/SearchMovie";
import DetailMovie from "./pages/DetailMovie";
import NavbarComponents from "./components/Navbar";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <NavbarComponents />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search-movie" element={<SearchMovie />} />
        <Route path="/detail/:movieId" element={<DetailMovie />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SearchMovie from "./pages/SearchMovie";
import DetailMovie from "./pages/DetailMovie";
import NavbarComponents from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <NavbarComponents />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search-movie" element={<SearchMovie />} />
        <Route path="/detail/:movieId" element={<DetailMovie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import PeopleComparison from "./pages/PeopleComparison";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import ModuleStyles from "./pages/ModuleStyles";
import Home from "./pages/Home";
import Student from "./pages/Students";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people-comparison" element={<PeopleComparison />} />
        <Route path="/module-style" element={<ModuleStyles />} />
        <Route path="/student" element={<Student />} />

        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

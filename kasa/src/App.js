import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import AccomodationsDetails from './pages/AccomodationsDetails';
import NotFound from './pages/NotFound';

function App() {
  return <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/A-Propos" element={<About />} />
        <Route path="/Fiche-Logement" element={<AccomodationsDetails />} />
        <Route path="*" element={<NotFound />} />
        <Route />
      </Routes>
    </BrowserRouter>
  </div>;
}

export default App;

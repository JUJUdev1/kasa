import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import AccomodationsCards from './pages/AccomodationsCards';
import NotFound from './pages/NotFound';

function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/a-Propos" element={<About />} />
        <Route path="/fiche-Logement/:id" element={<AccomodationsCards />} />
        <Route path="*" element={<NotFound />} />
        <Route />
      </Routes>
    </BrowserRouter>
  </>;
}

export default App;

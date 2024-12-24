
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "../../Home/src/Header";
import Footer from "../../Home/src/Footer";
import PdpContent from "./PdpContent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <Header />

        <main className="flex-grow-1 bg-light py-5">
          <div className="container">
            <Routes>
              <Route path="/product/:id" element={<PdpContent />} />
            </Routes>
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

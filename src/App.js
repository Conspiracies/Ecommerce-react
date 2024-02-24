import Nav from "./components/Nav.jsx"
import Home from "./Pages/Home.jsx"
import Books from "./Pages/Books.jsx";
import Footer from "./components/Footer.jsx";
import { books } from "./data.js";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import reportWebVitals from "./reportWebVitals.js";

function App() {
  return (
    <Router>
      <>
        <Nav />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/books" element={<Books books={books}/>}/>
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;

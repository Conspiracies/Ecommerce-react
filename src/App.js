import Nav from "./components/Nav.jsx"
import Home from "./Pages/Home.jsx"
import Books from "./Pages/Books.jsx";
import Footer from "./components/Footer.jsx";
import { books } from "./data.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals.js";
import BookInfo from "./Pages/BookInfo.jsx"

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/books" element={<Books books={books}/>}/>
          <Route path="/books/:id" element={<BookInfo books={books} /> } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

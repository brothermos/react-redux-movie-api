import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store/Store";

// component
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import PageNotFound from "./components/PageNotFound/PageNotFound";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Header />
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/movie/:id" element={<MovieDetail />} />
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                </div>
                
            </Router>
        </Provider>
    );
}

export default App;

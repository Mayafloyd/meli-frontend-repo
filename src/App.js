import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ResultView from "./pages/ResultView";
import ProductView from "./pages/ProductView";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/items" element={<ResultView />} />
          <Route path="/items/:id" element={<ProductView />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

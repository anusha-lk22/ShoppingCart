import TotalCards from "./TotalCards";
import Home from "./Home";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DataProvider } from "./DataContext";
function App() {
  return (
    <BrowserRouter>
      <DataProvider>
      <Routes>
        
          <Route path="/" element={<TotalCards />} />
          <Route path="/cart" element={<Home />} />
      </Routes>
        </DataProvider>
    </BrowserRouter>
  );
}
export default App;

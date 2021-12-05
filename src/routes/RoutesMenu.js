import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import ListPage from "../pages/ListPage";

function RoutesMenu() {
  return (
    <Router>
      <Routes> 
        <Route path="/" element={ <Home/> } />
        <Route path="/list" element={ <ListPage/> } />
      </Routes>
    </Router>
  );
}

export default RoutesMenu;
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home/Index";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="*" element={<Home></Home>}></Route>
      </Routes>
    </BrowserRouter>
  );
};


export default AppRoutes
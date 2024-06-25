import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home/Index";
import Nuevo from "./Pages/Nuevo/Index";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route default path="/" element={<Home></Home>}></Route>
        <Route path="/NUEVO" element={<Nuevo></Nuevo>}></Route>
        <Route path="*" element={<Home></Home>}></Route>
      </Routes>
    </BrowserRouter>
  );
};


export default AppRoutes
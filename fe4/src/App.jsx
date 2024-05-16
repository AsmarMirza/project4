import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Basket from "./pages/Basket";
import MainLayout from "./layout/MainLayout";
import Add from "./pages/Add";

function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home/>} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/add" element={<Add />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

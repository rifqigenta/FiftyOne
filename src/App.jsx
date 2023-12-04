import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/landing-page/home";
import About from "./pages/landing-page/about";
import Contact from "./pages/landing-page/contact";
<<<<<<< HEAD
import Login from "./pages/landing-page/login";
=======
import { Dashboard } from "./pages/admin/Dashboard";
import Buah from "./pages/admin/Stock/Buah";
import Bumbu from "./pages/admin/Stock/Bumbu";
import Daging from "./pages/admin/Stock/Daging";
import ProdukSusu from "./pages/admin/Stock/ProdukSusu";
import Sayuran from "./pages/admin/Stock/Sayuran";
import Sembako from "./pages/admin/Stock/Sembako";
import TahuTempeTelur from "./pages/admin/Stock/TahuTempeTelur";
import LainLain from "./pages/admin/Stock/LainLain";
import UserAccount from "./pages/admin/UserAccount/UserAccount";
import Report from "./pages/admin/Report/Report";
>>>>>>> cada4cb7547f0221667373d2d799b130370d4fc6

export const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
<<<<<<< HEAD
          <Route path='/login' element={<Login />} />
=======
          <Route path='/admin/dashboard' element={<Dashboard />} />
          <Route path='/admin/stock/buah' element={<Buah />} />
          <Route path='/admin/stock/bumbu' element={<Bumbu />} />
          <Route path='/admin/stock/daging' element={<Daging />} />
          <Route path='/admin/stock/produk susu' element={<ProdukSusu />} />
          <Route path='/admin/stock/sayuran' element={<Sayuran />} />
          <Route path='/admin/stock/sembako' element={<Sembako />} />
          <Route path='/admin/stock/3t' element={<TahuTempeTelur />} />
          <Route path='/admin/stock/lain-lain' element={<LainLain />} />
          <Route path='/admin/user-account' element={<UserAccount />} />
          <Route path='/admin/report' element={<Report />} />
>>>>>>> cada4cb7547f0221667373d2d799b130370d4fc6
        </Routes>
      </Router>
    </>
  );
};
export default App;

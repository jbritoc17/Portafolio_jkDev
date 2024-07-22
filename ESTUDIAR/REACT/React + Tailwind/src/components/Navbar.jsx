import "../App.css";
import "../index.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Home from "../pages/Home";

import Menu from "../components/Menu";
import SunComponent from "../components/Sun";
import UserComponent from "../components/User";
import Logo from "./Logo";
import Jewelery from "../pages/Jewelery";
import Electronics from "../pages/Electronics";
import ManClothes from "../pages/ManClothes";
import WomenClothes from "../pages/WomenClothes";
import Login from "../pages/Login";

const Navbar = () => {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/category">
              <Route path={"jewelery"} element={<Jewelery />} />
              <Route path={"electronics"} element={<Electronics />} />
              <Route path={"man_clothes"} element={<ManClothes />} />
              <Route path={"women_clothes"} element={<WomenClothes />} />
            </Route>
            <Route path={"/login"} element={<Login/>} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};
function Layout() {
  return (
    <>
      <nav className="">
        <header className="bg-[#a072e5bc] shadow px-6 rounded  ">
          <div className="flex h-16 items-center justify-between max-w-7xl mx-auto">
            <Menu />

            <div className="space-x-8 hidden md:flex">
              <Link to={"/"} className="px-20 ">
                <Logo />
              </Link>

              <Link
                className="px-3 py-2 text-[#330d6b] hover:text-white"
                to="/"
              >
                Home
              </Link>
              <Link
                className="text-[#330d6b] px-3 py-2 hover:text-white transition-colors"
                to="/category/jewelery"
              >
                Jewelery
              </Link>
              <Link
                className="text-[#330d6b] px-3 py-2 hover:text-white transition-colors"
                to="/category/electronics"
              >
                Electronics
              </Link>
              <div className="relative group inline-block text-left top-[9px] ">
                <Link
                  className="group overflow-hidden rounded-lg text-[#330d6b] px-3 py-2 hover:text-white transition-colors"
                  to="#"
                >
                  Clothes
                </Link>
                <div className="hidden group-hover:block absolute bg-[#330d6bd0] shadow-lg rounded-lg z-10 mt-2">
                  <div className="py-2">
                    <Link
                      to="/category/man_clothes"
                      className="block px-4 relative py-2 text-[#b997ec] hover:bg-transparent hover:text-white transition-colors"
                    >
                      Man
                    </Link>
                    <Link
                      to="/category/women_clothes"
                      className="block relative  px-4 py-2 text-[#b997ec] hover:bg-transparent hover:text-white transition-colors"
                    >
                      Women
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <SunComponent />
              <Link to={"/login"}>
              <UserComponent />
              </Link>
            </div>
          </div>
        </header>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;

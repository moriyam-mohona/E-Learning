import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Main = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white mt-32 p-5 md:px-8 lg:p-16 text-black">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
export default Main;

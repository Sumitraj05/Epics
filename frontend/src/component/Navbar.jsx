import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";
import useProvideHooks from "../hooks/useProvideHooks";
import httpAction from "../utils/httpAction";
import apis from "../api/apis";
import toast from "react-hot-toast";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { userData, setUserdata } = useContext(AuthContext);
  const { navigate } = useProvideHooks();
  const logout = async () => {
    try {
      await httpAction({
        url: apis().logout,
        method: "POST",
        credentials: 'include'
      });

      setUserdata(null);

      toast.success("User Logged Out Succuessfully")
      navigate('/')
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };
  return (
    <header className="bg-blue-900 text-white shadow-md">
      <div className="container mx-auto px-10 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Finexo</Link>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Menu */}
        <nav
          className={`lg:flex items-center space-x-6 absolute lg:relative top-16 left-0 lg:top-0 bg-blue-900 w-full lg:w-auto lg:bg-transparent p-5 lg:p-0 transition-all duration-300 ease-in-out ${isOpen ? "block z-50" : "hidden lg:block"
            }`}
        >
          <ul className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-6">
            <li><Link to="/" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="/about" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>About</Link></li>
            <li><Link to="/service" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Services</Link></li>
            <li><Link to="/team" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Team</Link></li>

            {
              userData ? 
              <li><Link to="/feature1" className="hover:text-gray-300 font-semibold" onClick={() => setIsOpen(false)}>Feature 1 </Link></li>
              :""
            }
            {
              userData ? 
              <li><Link to="/feature2" className="hover:text-gray-300 font-semibold" onClick={() => setIsOpen(false)}>Feature 2 </Link></li>
              :""
            }
            {
              userData ? 
              <li><Link to="/feature3" className="hover:text-gray-300 font-semibold" onClick={() => setIsOpen(false)}>Feature 3 </Link></li>
              :""
            }

            {userData ? (
              <li>
                <button onClick={logout} className="flex items-center hover:text-gray-300">
                  <FaUser className="mr-2" /> Logout
                </button>
              </li>
            ) : (
              <li>
                <Link to="/login" className="flex items-center hover:text-gray-300" onClick={() => setIsOpen(false)}>
                  <FaUser className="mr-2" /> Login
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

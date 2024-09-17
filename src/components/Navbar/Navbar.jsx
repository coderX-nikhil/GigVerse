// import React, { useEffect, useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import newRequest from "../../utils/newRequest";

// const Navbar = () => {
//   const [active, setActive] = useState(false);
//   const [active1, setActive1] = useState(false);
//   const [open, setOpen] = useState(false);
//   const { pathname } = useLocation();

//   const isActive = () => {
//     window.scrollY > 0 ? setActive(true) : setActive(false);
//   };

//   const isActive1 = () => {
//     window.scrollY > 50 ? setActive1(true) : setActive1(false);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", isActive);
//     window.addEventListener("scroll", isActive1);
//     return () => {
//       window.removeEventListener("scroll", isActive);
//       window.removeEventListener("scroll", isActive1);
//     };
//   }, []);

//   const current_user = JSON.parse(localStorage.getItem("currentUser"));
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     try {
//       await newRequest.post("/auth/logout");
//       localStorage.setItem("currentUser", null);
//       navigate("/");
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const [input, setInput] = useState("");
//   const handleSubmit = () => {
//     navigate(`gigs?search=${input}`);
//   };

//   return (
//     <div
//       className="transition-all duration-500 sticky top-0 z-50 backdrop-blur-md text-white"
//     >
//       <div className="container mx-auto flex justify-between items-center py-4 px-5 max-w-7xl">
//         {/* Logo */}
//         <div className="text-3xl font-bold" data-aos="zoom-in">
//           <Link to="/" className="flex items-center space-x-1">
//             <span className="text-white">
//               Gig<span className="text-green-600">Verse</span> 
//             </span>
//             <span className="text-xl mt-2" >.com</span>
//           </Link>
//         </div>

//         {active && (
//           <div className="hidden md:flex items-center">
//             <input
//               type="text"
//               placeholder="What service are you looking for today?"
//               aria-label="Search for services"
//               className="border border-gray-300 focus:border-green-500 focus:ring focus:ring-green-200 rounded-l-md px-4 py-2 w-72 text-sm outline-none transition-all duration-300"
//               onChange={(e) => setInput(e.target.value)}
//             />
//             <button
//               onClick={handleSubmit}
//               aria-label="Search"
//               className="bg-black hover:bg-green-600 focus:bg-green-500 text-white px-4 py-2 rounded-r-md flex items-center justify-center transition-all duration-300"
//             >
//               <img src="/images/search.png" alt="Search" className="w-5 h-5" />
//             </button>
//           </div>
//         )}

//         <div className="flex items-center space-x-6">
//           <Link to="/login" className="hover:scale-110 duration-300">
//             Sign In
//           </Link>

//           {!current_user && (
//             <button
//               onClick={() => navigate(`/register`)}
//               className="bg-green-500 text-white px-4 py-2 rounded hover:scale-110 duration-300"
//             >
//               Sign up
//             </button>
//           )}

//           {current_user && (
//             <div
//               className="relative cursor-pointer"
//               onClick={() => setOpen(!open)}
//             >
//               <div className="flex flex-row gap-2">
//               <img
//                 src="\images\man.png"
//                 alt="User"
//                 className="w-8 h-8 rounded-full object-cover"
//               />

//               <span className="mt-2">{current_user?.username}</span>
//               </div>
//               {open && (
//                 <div className="absolute right-0 top-10 bg-white shadow-lg rounded z-10 p-4 flex flex-col space-y-2 text-gray-700">
//                   {current_user.isSeller && (
//                     <>
//                       <Link to="/mygigs" className="hover:text-green-500">
//                         Gigs
//                       </Link>
//                       <Link to="/add" className="hover:text-green-500">
//                         Add New Gig
//                       </Link>
//                     </>
//                   )}
//                   <Link to="/orders" className="hover:text-green-500">
//                     Orders
//                   </Link>
//                   <Link to="/messages" className="hover:text-green-500">
//                     Messages
//                   </Link>
//                   <span
//                     onClick={handleLogout}
//                     className="hover:text-red-500 cursor-pointer"
//                   >
//                     Logout
//                   </span>
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       </div>

//       {(active1 || pathname !== "/") && (
//         <>
//           <hr />
//           <div className="container mx-auto py-2 px-5 flex justify-between max-w-7xl">
//             <Link
//               key={9983}
//               className="relative menulink group transition-all duration-500 ease-in-out"
//               to="/"
//             >
//               Web development
//               <span className="absolute left-0 -bottom-0.5 h-[3px] rounded w-0 bg-[#1dbf73] opacity-75 transition-all duration-500 ease-in-out group-hover:w-full"></span>
//             </Link>
//             <Link
//               key={9883}
//               className="relative menulink group transition-all duration-500 ease-in-out"
//               to="/"
//             >
//               Content Writing
//               <span className="absolute left-0 -bottom-0.5 h-[3px] rounded w-0 bg-[#1dbf73] opacity-75 transition-all duration-500 ease-in-out group-hover:w-full"></span>
//             </Link>
//             <Link
//               key={9988}
//               className="relative menulink group transition-all duration-500 ease-in-out"
//               to="/"
//             >
//               Logo Design
//               <span className="absolute left-0 -bottom-0.5 h-[3px] rounded w-0 bg-[#1dbf73] opacity-75 transition-all duration-500 ease-in-out group-hover:w-full"></span>
//             </Link>
//             <Link
//               key={9981}
//               className="relative menulink group transition-all duration-500 ease-in-out"
//               to="/"
//             >
//               Video Editing
//               <span className="absolute left-0 -bottom-0.5 h-[3px] rounded w-0 bg-[#1dbf73] opacity-75 transition-all duration-500 ease-in-out group-hover:w-full"></span>
//             </Link>
//             <Link
//               key={9982}
//               className="relative menulink group transition-all duration-500 ease-in-out"
//               to="/"
//             >
//               Education and Training
//               <span className="absolute left-0 -bottom-0.5 h-[3px] rounded w-0 bg-[#1dbf73] opacity-75 transition-all duration-500 ease-in-out group-hover:w-full"></span>
//             </Link>
//             <Link
//               key={9903}
//               className="relative menulink group transition-all duration-500 ease-in-out"
//               to="/"
//             >
//               Music & Audio
//               <span className="absolute left-0 -bottom-0.5 h-[3px] rounded w-0 bg-[#1dbf73] opacity-75 transition-all duration-500 ease-in-out group-hover:w-full"></span>
//             </Link>
//             <Link
//               key={99883}
//               className="relative menulink group transition-all duration-500 ease-in-out"
//               to="/"
//             >
//               Programming & Tech
//               <span className="absolute left-0 -bottom-0.5 h-[3px] rounded w-0 bg-[#1dbf73] opacity-75 transition-all duration-500 ease-in-out group-hover:w-full"></span>
//             </Link>
//             {/* <Link
//               key={19988}
//               className="relative menulink group transition-all duration-500 ease-in-out"
//               to="/"
//             >
//               Business
//               <span className="absolute left-0 -bottom-0.5 h-[3px] rounded w-0 bg-[#1dbf73] opacity-75 transition-all duration-500 ease-in-out group-hover:w-full"></span>
//             </Link>
//             <Link
//               key={99981}
//               className="relative menulink group transition-all duration-500 ease-in-out"
//               to="/"
//             >
//               Lifestyle
//               <span className="absolute left-0 -bottom-0.5 h-[3px] rounded w-0 bg-[#1dbf73] opacity-75 transition-all duration-500 ease-in-out group-hover:w-full"></span>
//             </Link> */}
//           </div>
//           <hr />
//         </>
//       )}
//     </div>
//   );
// };

// export default Navbar;


// import React, { useEffect, useState, useRef } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import newRequest from "../../utils/newRequest";

// const Navbar = () => {
//   const [active, setActive] = useState(false);
//   const [active1, setActive1] = useState(false);
//   const [open, setOpen] = useState(false);
//   const [searchOpen, setSearchOpen] = useState(false);
//   const { pathname } = useLocation();
//   const current_user = JSON.parse(localStorage.getItem("currentUser"));
//   const navigate = useNavigate();
//   const [input, setInput] = useState("");
//   const searchRef = useRef(null);

//   const handleLogout = async () => {
//     try {
//       await newRequest.post("/auth/logout");
//       localStorage.setItem("currentUser", null);
//       navigate("/");
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const handleSubmit = () => {
//     if (input) navigate(`gigs?search=${input}`);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       setActive(window.scrollY > 0);
//       setActive1(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   // Close the search bar when clicking outside or pressing Escape
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (searchRef.current && !searchRef.current.contains(event.target)) {
//         setSearchOpen(false);
//       }
//     };

//     const handleEscape = (event) => {
//       if (event.key === "Escape") {
//         setSearchOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     document.addEventListener("keydown", handleEscape);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//       document.removeEventListener("keydown", handleEscape);
//     };
//   }, []);

//   return (
//     <div className={`transition-all duration-500 sticky top-0 z-50 ${active ? "bg-opacity-90 backdrop-blur-md bg-gray-900" : "bg-transparent"} text-white`}>
//       <div className="container mx-auto flex justify-between items-center py-4 px-5 max-w-7xl">

//         {/* Search Icon and Expanding Search Bar */}
//         <div className="flex items-center space-x-4">
//           <div ref={searchRef} className="relative">
//             <button
//               className="focus:outline-none"
//               onClick={() => setSearchOpen(!searchOpen)}
//             >
//               <img src="/images/search.png" alt="Search" className="w-6 h-6" />
//             </button>

//             {searchOpen && (
//               <div className="absolute left-0 top-0 mt-10 transform translate-y-[-50%] transition-all duration-300">
//                 <div className="flex items-center">
//                   <input
//                     type="text"
//                     placeholder="Search..."
//                     className="border border-gray-600 focus:border-green-500 focus:ring-2 focus:ring-green-400 rounded-l-md px-4 py-2 w-64 bg-gray-800 text-white outline-none transition-all duration-300"
//                     onChange={(e) => setInput(e.target.value)}
//                     value={input}
//                   />
//                   <button
//                     onClick={handleSubmit}
//                     className="bg-green-600 hover:bg-green-500 focus:bg-green-700 text-white px-4 py-2 rounded-r-md transition-all duration-300"
//                   >
//                     Go
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Logo */}
//         <div className="flex items-center space-x-1">
//           <Link to="/" className="flex items-center">
//             <img src="./logo1.png" alt="GigVerse Logo" className="h-10" />
//           </Link>
//         </div>

//         {/* User Navigation */}
//         <div className="flex items-center space-x-6">
//           {!current_user && (
//             <>
//               <Link to="/login" className="hover:scale-110 transition-transform duration-300">Sign In</Link>
//               <button
//                 onClick={() => navigate(`/register`)}
//                 className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500 hover:scale-110 transition-transform duration-300"
//               >
//                 Sign up
//               </button>
//             </>
//           )}
//           {current_user && (
//             <div className="relative cursor-pointer" onClick={() => setOpen(!open)}>
//               <div className="flex items-center gap-2">
//                 <img src="/images/man.png" alt="User" className="w-8 h-8 rounded-full object-cover" />
//                 <span className="font-medium">{current_user.username}</span>
//               </div>
//               {open && (
//                 <div className="absolute right-0 top-12 bg-white shadow-lg rounded-lg z-10 p-4 flex flex-col space-y-2 text-gray-800">
//                   {current_user.isSeller && (
//                     <>
//                       <Link to="/mygigs" className="hover:text-green-500 transition-colors">My Gigs</Link>
//                       <Link to="/add" className="hover:text-green-500 transition-colors">Add New Gig</Link>
//                     </>
//                   )}
//                   <Link to="/orders" className="hover:text-green-500 transition-colors">Orders</Link>
//                   <Link to="/messages" className="hover:text-green-500 transition-colors">Messages</Link>
//                   <span
//                     onClick={handleLogout}
//                     className="hover:text-red-500 cursor-pointer transition-colors"
//                   >
//                     Logout
//                   </span>
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Category Links */}
//       {(active1 || pathname !== "/") && (
//         <>
//           <hr className="border-gray-700" />
//           <div className="container mx-auto py-2 px-5 flex justify-between max-w-7xl">
//             {["Web Development", "Content Writing", "Logo Design", "Video Editing", "Education & Training", "Music & Audio", "Programming & Tech"].map((category) => (
//               <Link key={category} className="relative group transition-all duration-500" to="/">
//                 {category}
//                 <span className="absolute left-0 -bottom-0.5 h-0.5 rounded w-0 bg-green-500 opacity-75 transition-all duration-500 group-hover:w-full"></span>
//               </Link>
//             ))}
//           </div>
//           <hr className="border-gray-700" />
//         </>
//       )}
//     </div>
//   );
// };

// export default Navbar;
import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [active1, setActive1] = useState(false);
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { pathname } = useLocation();
  const current_user = JSON.parse(localStorage.getItem("currentUser"));
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const searchRef = useRef(null);

  const handleLogout = async () => {
    try {
      await newRequest.post("/auth/logout");
      localStorage.setItem("currentUser", null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = () => {
    if (input) navigate(`gigs?search=${input}`);
  };

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 0);
      setActive1(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div className={`transition-all duration-500 sticky top-0 z-50 ${active ? "bg-opacity-80 backdrop-blur-md" : ""}`}>
      <div className="container mx-auto flex justify-between items-center py-4 px-5 max-w-7xl">
        
        {/* Left Side: Logo */}
        <div className="flex items-center space-x-4">
          <Link to="/" className="flex items-center">
            <img src="./Herologo.png" alt="GigVerse Logo" className="h-10" />
          </Link>
        </div>

        {/* Right Side: Search Icon */}
        <div className="flex items-center space-x-4">
          <div ref={searchRef} className="relative">
            <div className="flex items-center space-x-2">
              <button
                className="focus:outline-none"
                onClick={() => setSearchOpen(!searchOpen)}
              >
                <img src="/images/search.png" alt="Search" className="w-6 h-6" />
              </button>
              <input
                type="text"
                placeholder="Search..."
                className={`border border-gray-600 focus:border-green-500 focus:ring-2 focus:ring-green-400 rounded-md px-4 py-2 bg-gray-800 text-white outline-none transition-all duration-300 ${searchOpen ? "w-64 block" : "w-0 hidden"}`}
                onChange={(e) => setInput(e.target.value)}
                value={input}
              />
              {searchOpen && (
                <button
                  onClick={handleSubmit}
                  className="bg-green-600 hover:bg-green-500 focus:bg-green-700 text-white px-4 py-2 rounded transition-all duration-300"
                >
                  Go
                </button>
              )}
            </div>
          </div>
        </div>

        {/* User Navigation */}
        <div className="flex items-center space-x-6">
          {!current_user && (
            <>
              <Link to="/login" className="hover:scale-110 transition-transform duration-300">Sign In</Link>
              <button
                onClick={() => navigate(`/register`)}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500 hover:scale-110 transition-transform duration-300"
              >
                Sign up
              </button>
            </>
          )}
          {current_user && (
            <div className="relative cursor-pointer" onClick={() => setOpen(!open)}>
              <div className="flex items-center gap-2">
                <img src="/images/man.png" alt="User" className="w-8 h-8 rounded-full object-cover" />
                <span className="font-medium">{current_user.username}</span>
              </div>
              {open && (
                <div className="absolute right-0 top-12 bg-white shadow-lg rounded-lg z-10 p-4 flex flex-col space-y-2 text-gray-800">
                  {current_user.isSeller && (
                    <>
                      <Link to="/mygigs" className="hover:text-green-500 transition-colors">My Gigs</Link>
                      <Link to="/add" className="hover:text-green-500 transition-colors">Add New Gig</Link>
                    </>
                  )}
                  <Link to="/orders" className="hover:text-green-500 transition-colors">Orders</Link>
                  <Link to="/messages" className="hover:text-green-500 transition-colors">Messages</Link>
                  <span
                    onClick={handleLogout}
                    className="hover:text-red-500 cursor-pointer transition-colors"
                  >
                    Logout
                  </span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Category Links */}
      {(active1 || pathname !== "/") && (
        <>
          <hr className="border-gray-700" />
          <div className="container mx-auto py-2 px-5 flex justify-between max-w-7xl">
            {["Web Development", "Content Writing", "Logo Design", "Video Editing", "Education & Training", "Music & Audio", "Programming & Tech"].map((category) => (
              <Link key={category} className="relative group transition-all duration-500" to="/">
                {category}
                <span className="absolute left-0 -bottom-0.5 h-0.5 rounded w-0 bg-green-500 opacity-75 transition-all duration-500 group-hover:w-full"></span>
              </Link>
            ))}
          </div>
          <hr className="border-gray-700" />
        </>
      )}
    </div>
  );
};

export default Navbar;

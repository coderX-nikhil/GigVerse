// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Featured() {
//   const [input, setInput] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = () => {
//     if (input.trim()) {
//       navigate(`gigs?search=${input}`);
//     }
//   };

//   return (
//     <div
//       className={`featured h-[600px] flex items-center justify-center text-black overflow-hidden bg-cover bg-center bg-[url('hero2.webp')]`}
//     >
//       <div className="container w-full max-w-[1400px] flex flex-col items-center justify-center gap-8 text-center absolute">
//         <h1 className="text-[50px] font-bold">
//           Discover <span className="italic font-light">top freelance</span>{" "}
//           <br />
//           <span className="italic font-light">services</span> tailored for your business
//         </h1>

//         <div className="search bg-white rounded-lg flex items-center justify-between w-full max-w-[700px] overflow-hidden border border-gray-400">
//           <div className="searchInput flex items-center gap-2 px-3 border-gray-400">
//             <img src="/images/search.png" alt="search" className="w-5 h-5" />
//             <input
//               type="text"
//               placeholder='Try "building mobile app"'
//               onChange={(e) => setInput(e.target.value)}
//               className="border-none outline-none placeholder-gray-500 text-sm w-full"
//             />
//           </div>
//           <button
//             onClick={handleSubmit}
//             className="bg-[#1dbf73] text-white font-medium text-sm sm:text-base md:text-lg px-4 py-2 md:px-6 md:py-3"
//           >
//             Search
//           </button>
//         </div>

//         <div className="popular flex flex-wrap items-center justify-center gap-4 text-base font-medium">
//           <span className="text-gray-700">Popular:</span>
//           {["Web Design", "WordPress", "Logo Design", "AI Services"].map(
//             (item) => (
//               <button
//                 key={item}
//                 onClick={() => navigate(`gigs?search=${item}`)}
//                 className="border border-gray-800 py-1 px-3 rounded-full hover:text-black"
//               >
//                 {item}
//               </button>
//             )
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Featured;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Featured() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (input.trim()) {
      navigate(`gigs?search=${input}`);
    }
  };

  return (
    <div className="featured h-[600px] flex items-center justify-center text-white overflow-hidden relative">
      <div className="gradient-bg absolute inset-0 animate-gradient-background"></div>
      <div className="container w-full max-w-[1400px] flex flex-row items-center justify-between gap-8 z-10 relative p-6">
        {/* Left Half - Text and Logo */}
        <div className="left-half w-1/2 flex flex-col items-start justify-center gap-8 text-left">
          <img src="/Logo1.png" alt="GiGVERSE Logo" className="w-[150px] h-auto shadow-lg transition-transform transform hover:scale-105" />
          <p className="text-lg md:text-xl lg:text-2xl font-light max-w-[800px] animate-fadeInUp transition-all duration-700 ease-in-out shadow-md bg-black bg-opacity-30 p-4 rounded-lg">
            GiGVERSE is your one-stop solution for discovering exceptional freelance talent. Simplify your business collaborations with professionals worldwide.
          </p>

          <div className="search bg-white rounded-lg shadow-xl flex items-center justify-between w-full max-w-[700px] overflow-hidden border border-gray-400 transform transition-all duration-300 hover:shadow-2xl hover:scale-105">
            <div className="searchInput flex items-center gap-2 px-3 border-gray-400">
              <img src="/images/search.png" alt="search" className="w-5 h-5" />
              <input
                type="text"
                placeholder='Try "Find a web developer"'
                onChange={(e) => setInput(e.target.value)}
                className="border-none outline-none placeholder-gray-500 text-sm w-full rounded-lg p-2"
              />
            </div>
            <button
              onClick={handleSubmit}
              className="bg-[#1dbf73] text-white font-semibold text-sm sm:text-base md:text-lg px-4 py-2 md:px-6 md:py-3 transition-all duration-300 hover:bg-[#19a867] shadow-lg transform hover:scale-105"
            >
              Search
            </button>
          </div>

          <div className="popular flex flex-wrap items-center justify-start gap-4 text-base font-medium">
            <span className="text-gray-300">Popular Searches:</span>
            {["Web Development", "Graphic Design", "Content Writing", "AI Development"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => navigate(`gigs?search=${item}`)}
                  className="border border-gray-300 py-1 px-3 rounded-full text-gray-300 hover:text-white hover:border-white transition-all duration-300 shadow hover:shadow-lg"
                >
                  {item}
                </button>
              )
            )}
          </div>
        </div>

        {/* Right Half - Image */}
        <div className="right-half w-1/2 flex justify-center">
          <img src="/HeroImg.png" alt="Relevant Visual" className="max-w-full h-auto shadow-lg rounded-lg transition-transform transform hover:scale-105" />
        </div>
      </div>
    </div>
  );
}

export default Featured;

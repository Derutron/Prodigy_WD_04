const Navbar = () => {
  return ( 
    // Main Navbar container
    <div className=" w-screen h-[120px] flex justify-between items-center px-36 bg-gray-200 shadow-lg">
      
        {/* Three different items logo, navItems & ContactMe*/}
        <div className=" contain w-screen h-[70px] bg-gray-200 flex justify-between items-center gap-10">
            {/* logo */}
            <img
            className="w-[200px] h-[70px] rounded-md"
            src="src/resources/logo.jpg"
            alt="Your Image"
            />

                {/* Navigation items */}
                <div className="w-[480px] h-[32px] flex justify-between gap-10">
                <a href="#Header"><div className="w-[80px] h-[30px]">
                    <p className="ml-5 text-[20px] font-roboto  font-[700] leading-6">HOME</p>
                </div></a>

                <a href="#Skills"><div className="w-[80px] h-[30px]">
                    <p className="text-[20px] font-roboto  font-[700] leading-6 uppercase">skills</p>
                </div></a>

                <a href="#Projects"><div className="w-[90px] h-[30px]">
                    <p className="text-[20px] font-roboto font-[700] leading-6 uppercase">PROJECTS</p>
                </div></a>

                <a href="#About"><div className="w-[200px] h-[30px]">
                    <p className="text-[20px] font-roboto font-[700] leading-6 uppercase">About Me</p>
                </div></a>
            </div>
                
                {/* Contact Me */}
                <a href="#Contact"><div className="w-[170px] h-[70px] border-2 border-[#5E3BEE] flex px-[20px] py-[18px] justify-center items-center gap-[10px] rounded-[5px]">
           <div className="w-[130px] h-[32px] "> 
                    <p className="text-[#5E3BEE] font-roboto text-[21px] font-normal uppercase">Contact Me</p>
                </div>
            </div></a>

            
        </div>
    </div>
  )
}

export default Navbar





// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return ( 
//     <div className="w-screen h-120 flex justify-between items-center px-36 bg-gray-200 shadow-lg">
//       <div className="contain w-screen h-70 bg-gray-200 flex justify-between items-center gap-10">
//         <img
//           className="w-200 h-70 rounded-md"
//           src="src/resources/logo.jpg"
//           alt="Your Image"
//         />
//         <div className="w-480 h-32 flex justify-between gap-10">
//           <Link to="/Header" className="w-80 h-30">
//             <p className="ml-5 text-20 font-roboto font-700 leading-6">HOME</p>
//           </Link>

//           <Link to="/Skills" className="w-80 h-30">
//             <p className="text-20 font-roboto font-700 leading-6 uppercase">Skills</p>
//           </Link>

//           <Link to="/Projects" className="w-90 h-30">
//             <p className="text-20 font-roboto font-700 leading-6 uppercase">PROJECTS</p>
//           </Link>

//           <Link to="/About" className="w-200 h-30">
//             <p className="text-20 font-roboto font-700 leading-6 uppercase">About Me</p>
//           </Link>
//         </div>

//         <Link to="/Contact" className="w-170 h-70 border-2 border-[#5E3BEE] flex px-20 py-18 justify-center items-center gap-10 rounded-5">
//           <div className="w-130 h-32"> 
//             <p className="text-[#5E3BEE] font-roboto text-21 font-normal uppercase">Contact Me</p>
//           </div>
//         </Link>
//       </div>
//     </div>
//   )
// }

// export default Navbar;

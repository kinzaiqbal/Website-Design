// const Navbar = () => {
//     return(
//         <>
//         <div className="w-[1322px] h-[91px] py-4 px-[59px] bg-[#043873]">
//         </div>
//         </> 
//     )
// }

// export default Navbar;

// import React from 'react';

// const Navbar = () => {
//   return (
//     <nav className="bg-gray-800 p-4">
//       <div className="max-w-screen-xl mx-auto flex justify-between items-center">
//         <div className="text-light-text font-bold text-lg">BrandName</div>
//         <ul className="flex gap-6">
//           <li><a href="#" className="text-light-text hover:text-gray-200">Home</a></li>
//           <li><a href="#features" className="text-light-text hover:text-gray-200">Product</a></li>
//           <li><a href="#features" className="text-light-text hover:text-gray-200">Pricing</a></li>
//           <li><a href="#contact" className="text-light-text hover:text-gray-200">Contact</a></li>
//         </ul>
//       <div className="absolute top-1/2 right-0 transform -translate-y-1/2 flex items-center gap-[45px]">
//         <div className="flex items-center justify-center w-[110px] h-[52px] bg-[#23A6F0] rounded-[5px]">
//           <span className="text-white font-semibold text-[14px] leading-[22px]">Sign Up</span>
//         </div>
//         <div className="flex items-center justify-center w-[110px] h-[52px] border-2 border-[#23A6F0] rounded-[5px]">
//           <span className="text-[#23A6F0] font-semibold text-[14px] leading-[22px]">Login</span>
//         </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React from 'react';

const Navbar = () => {
return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* BrandName */}
        <div className="text-white font-bold text-lg">BrandName</div>

        {/* Navbar Links */}
        <ul className="flex justify-around gap-9 px-4">
          <li><a href="#" className="text-white hover:text-gray-200">Home</a></li>
          <li><a href="#features" className="text-white hover:text-gray-200">Product</a></li>
          <li><a href="#pricing" className="text-white hover:text-gray-200">Pricing</a></li>
          <li><a href="#contact" className="text-white hover:text-gray-200">Contact</a></li>
        </ul>

        
        <div className="flex gap-4">
          
        <div className="flex items-center justify-center w-[110px] h-[52px] border-2 border-[#23A6F0] rounded-[5px]">
            <span className="text-[#23A6F0] font-semibold text-[14px] leading-[22px]">Login</span>
          </div>


          <div className="flex items-center justify-center w-[110px] h-[52px] bg-[#23A6F0] rounded-[5px]">
            <span className="text-white font-semibold text-[14px] leading-[22px]">Join Us</span>
          </div>

        </div>
      </div>
    </nav>

  );
};

export default Navbar;

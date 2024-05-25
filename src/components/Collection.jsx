// import React from "react";
import img from "../assets/images/men-collect.png";
import woimg from "../assets/images/women-collect.png";
import bgcollect from "../assets/images/bg-men-collect.svg";

// const Collection = () => {
//   return (
//     <div className="bg-slate-100 p-4">
//       <div className="max-w-[1240px] mx-auto grid grid-cols-2 gap-6">
//         <div className="grid-col-1 border border-black">
//           <div className="grid grid-cols-2 max-w-[500px] mx-auto">
//             <div className="grid-col-1 b-0">
//               <h1 className=" ">Men Collection</h1>
//               <p className="text-[red]">
//                 Lorem ipsum sit amit Lorem ipsum sit amitLorem ipsum sit amit
//                 Lorem ipsum sit amit Lorem ipsum sit amitLorem ipsum sit amit
//               </p>
//               <button className="bg-transparent border border-[white] p-3 pt-2">
//                 Shop Now
//               </button>
//             </div>

//             <div className="grid-col-1">
//               <img src={bgcollect} alt="fdjk" className="" />
//             </div>
//           </div>
//           <div>
//             <img src={img} alt="jk" />
//           </div>
//         </div>
//         <div className="grid-col-1 border border-[blue] bg-men-collect">
//           Continue
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Collection;

import React from "react";

const Collection = () => {
  return (
    <div className="max-w-[1240px] mx-auto grid grid-cols-2 gap-5 py-3">
      <div
        style={{ backgroundImage: `url(${bgcollect})` }} // Set the background image inline
        className=" flex flex-col  text-black border border-[red]
        bg-cover bg-center p-8  grid-col-1 justify-between h-[350px] "
      >
        <img
          src={img}
          alt="fjk"
          className="pl-[250px] ml-57 mr-10 mt-4 h-19 w-96 "
        />
        <h2 className="text-2xl font-bold text-black mb-4">Heading 1</h2>

        <p className=" mb-4">
          Lorem ipsum is placeholder text commonly used in the graphic,
        </p>
        <button className="bg-[green] text-white p-2  rounded w-[30%]">
          Button 1
        </button>
      </div>
      <div
        style={{ backgroundImage: `url(${bgcollect})` }} // Set the background image inline
        className=" flex flex-col  text-black border border-[red]
        bg-cover bg-center p-8  grid-col-1 justify-between h-[350px] "
      >
        <img
          src={woimg}
          alt="fjk"
          className="pl-[250px] ml-57 mr-10 mt-4 h-19 w-96 "
        />
        <h2 className="text-2xl font-bold text-black mb-4">Heading 2</h2>

        <p className=" mb-4">
          Lorem ipsum is placeholder text commonly used in the graphic,
        </p>
        <button className="bg-[green] text-white p-2 rounded w-[30%]">
          Button 2
        </button>
      </div>
    </div>
  );
};

export default Collection;

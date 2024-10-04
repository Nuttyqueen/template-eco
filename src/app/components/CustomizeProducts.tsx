import React from "react";

const CustomizeProducts = () => {
  return (
    <div>
      {/* COLOR */}
      {/* <ul className="flex items-center gap-3">
        <li className="w-6 h-6 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-gray-500">
          <div className="absolute w-8 h-8 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </li>
        <li className="w-6 h-6 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-slate-950"></li>
        <li className="w-6 h-6 rounded-full ring-1 ring-gray-300 cursor-not-allowed relative bg-slate-50">
          <div className="absolute w-10 h-[2px] bg-red-400 rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </li>
      </ul> */}
      {/* OTHERS */}
      <h4 className="font-medium mt-3">Certification</h4>
      <ul className="flex items-center gap-3 mt-2">
        <li className="ring-1 ring-lime text-white bg-lime rounded-md py-1 px-4 text-sm cursor-pointer">
          Green Choice
        </li>
        <li className="ring-1 ring-lime text-white bg-lime rounded-md py-1 px-4 text-sm cursor-not-allowed">
          GHG
        </li>
      </ul>
    </div>
  );
};

export default CustomizeProducts;

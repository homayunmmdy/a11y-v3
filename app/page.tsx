import React from "react";

const Home = () => {
  return (
    <div className="flex justify-center p-5">
      <div className="flex items-center justify-between text-gray-800 border border-gray-800 bg-white max-w-sm font-mono text-sm py-3 px-4 w-[250px] rounded-md">
        <div className="flex gap-1">
          <span>$</span>
          <span>npm run preview-email</span>
        </div>
        <span className="flex text-gray-800 cursor-pointer w-5 h-5 hover:text-gray-400 duration-200"></span>
      </div>
    </div>
  );
};

export default Home;

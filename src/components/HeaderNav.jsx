import React from "react";

const HeaderNav = () => {
  return (
    <div className="flex fixed justify-between top-0 w-full bg-black lg:px-20 py-4 text-white z-10">
      <div className="flex w-96 justify-between">
        <img src="/images/logo.png" alt="" />
        <p className="my-auto">Safety</p>
        <p className="my-auto">Help</p>
      </div>
      <div className="w-96 flex justify-evenly">
        <p className="my-auto">Products</p>
        <p className="my-auto">Login</p>
        <button className="bg-white rounded-full p-2 text-black w-20">
          Signup
        </button>
      </div>
    </div>
  );
};

export default HeaderNav;

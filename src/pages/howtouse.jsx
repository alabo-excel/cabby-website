import React from "react";

const howtouse = () => {
  return (
    <div className="">
      <div className="m-20 w-1/2">
        <h1 className="text-4xl font-bold">How to use the Cabby app</h1>
        <p className="my-4">
          Our core service is developing technology that connects drivers and
          riders on demand. Here’s how the app works, step by step:
        </p>
        <button className="p-3 rounded-md bg-black text-white w-40 flex justify-between">
          <img src="/images/watch.png" alt="" />
          How To Use
        </button>
      </div>
      <div>
        
      </div>
      <div className="bg-[#F3F2F2] p-20">
        <h2 className="text-4xl">Sign Up Today</h2>
        <p>
          Ready to experience Uber for yourself? Take your first trip as a
          rider, or get on the road to earning as a driver.
        </p>
        <div className="flex justify-between w-1/2 mt-10">
          <button className="p-6 text-white text-2xl w-72 bg-black rounded-md flex justify-between">
            <p>Signup For Drive</p>
            <img src="/images/arrow.png" className="my-auto" alt="" />
          </button>
          <button className="p-6 text-white text-2xl w-72 bg-black rounded-md flex justify-between">
            <p>Signup For Ride</p>
            <img src="/images/arrow.png" className="my-auto" alt="" />
          </button>
        </div>
      </div>
      <div className="flex justify-between m-20">
        <div className="w-[45%] my-auto">
          <h2 className="text-3xl">Ways People Move Around The World</h2>
          <p className="my-6">
            The Cabby app gives you the power to get where you want to go with
            access to different types of rides across more than 10,000 cities.
          </p>
          <button className="p-3 text-white bg-black rounded-md">
            View Ride Option
          </button>
        </div>
        <div className="w-[40%]">
          <img src="/images/app.png" className="" alt="" />
        </div>
      </div>
      <div className="flex justify-between p-20">
        <div className="w-[48%]">
          <img src="/images/rider-app.png" className="w-full" alt="" />
          <h4 className="text-xl my-3">Rider App</h4>
          <p>
            Get where you’re going easily and reliably with the tap of a button.
            Choose the ride option that best suits your needs.
          </p>
          <p className="text-blue-500 underline my-6">Visit Cabby Eats</p>
        </div>
        <div className="w-[48%]">
          <img src="/images/Rectangle12.png" className="w-full" alt="" />
          <h4 className="text-xl my-3">Driver App</h4>
          <p>
            With the Driver app, you’re in control. The app for drivers was
            designed with features that empower you to decide how, where, and
            when you earn.
          </p>
          <p className="text-blue-500 underline my-6">
            Partner with Cabby Eats
          </p>
        </div>
      </div>
    </div>
  );
};

export default howtouse;

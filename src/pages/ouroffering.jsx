import React from "react";

const ouroffering = () => {
  return (
    <div className="p-20">
      <div className="my-20">
        <h1 className="text-4xl font-bold">Cabby’s technology offerings</h1>
        <p className="my-4">
          Changing how people can request rides and get from point A to point B
          is just the beginning.
        </p>
        <button className="p-3 rounded-md bg-black text-white w-40">
          Download The App
        </button>
      </div>
      <div className="my-10">
        <h3 className="text-2xl my-4">
          Cabby Apps, Products, and Other Offerings
        </h3>
        <div className="flex justify-between">
          <div className="w-[45%]">
            Uber is a technology company whose mission is to reimagine the way
            the world moves for the better. Our technology helps us develop and
            maintain multisided platforms that match consumers looking for rides
            and independent providers of ride services, as well as with other
            forms of transportation, including public transit, bikes, and
            scooters.
          </div>
          <div className="w-[45%]">
            We also connect consumers and restaurants, grocers, and other
            merchants so they can buy and sell meals, groceries, and other
            items, then we match them with independent delivery service
            providers. Plus, Uber connects shippers and carriers in the freight
            industry. Our technology helps people connect and move in over 70
            countries and 10,000 cities around the world.
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-between">
        <div className="w-[30%] my-6 text-center">
          <img src="/images/icons/ride.png" className="mx-auto w-14" alt="" />
          <h4 className="text-[#1CB93B] text-2xl">Ride Options</h4>
          <p className="text-base my-3">Access to rides on demand.</p>
          <div className="text-blue-500 underline mt-6">
            <p>Learn More</p>
          </div>
        </div>
        <div className="w-[30%]  my-6  text-center">
          <img src="/images/icons/eats.png" className="mx-auto w-14" alt="" />
          <h4 className="text-[#7020C4] text-2xl">Cabby Eats</h4>
          <p className="text-base my-3">Food delivery on demand.</p>
          <div className="text-blue-500 underline mt-6">
            <p>Learn More</p>
          </div>
        </div>
        <div className="w-[30%]  my-6  text-center">
          <img src="/images/icons/earn.png" className="mx-auto w-14" alt="" />
          <h4 className="text-[#D51986] text-2xl">Earning with Cabby</h4>
          <p className="text-base my-3">Opportunity is Everywhere.</p>
          <div className="text-blue-500 underline mt-6">
            <p>Learn More</p>
          </div>
        </div>
        <div className="w-[30%]  my-6  text-center">
          <img src="/images/icons/move.png" className="mx-auto w-14" alt="" />
          <h4 className="text-[#064BB5] text-2xl">Moving Cities Forward</h4>
          <p className="text-base my-3">
            Helping to improve public transportation and access to care for
            those in need.
          </p>
          <div className="text-blue-500 underline mt-6">
            <p>Learn More</p>
          </div>
        </div>
        <div className="w-[30%]  my-6  text-center">
          <img src="/images/icons/help.png" className="mx-auto w-14" alt="" />
          <h4 className="text-[#BD00FF] text-2xl">
            Helping Businesses Move Ahead
          </h4>
          <p className="text-base my-3">
            See how Uber Freight and Uber for Business help organizations across
            the world.
          </p>
          <div className="text-blue-500 underline mt-6">
            <p>Learn More</p>
          </div>
        </div>
        <div className="w-[30%]  my-6  text-center">
          <img
            src="/images/icons/delivrey.png"
            className="mx-auto w-14"
            alt=""
          />
          <h4 className="text-[#00D1FF] text-2xl">Same-Day Delivery</h4>
          <p className="text-base my-3">
            An easy delivery solution that allows people to send items the same
            day.
          </p>
          <div className="text-blue-500 underline mt-6">
            <p>Learn More</p>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-2xl my-4">Cabby's Most Popular Ride Options </h3>
        <p className="my-6">Request a ride, Hop in, and Go</p>
        <div className="flex w-96 justify-between">
          <button className="p-3 bg-black text-white rounded-md w-40">
            Download The App
          </button>
          <div className="text-blue-500 underline my-auto">
            <p>See more ride options</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ouroffering;

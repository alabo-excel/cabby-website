import Slider from "@/components/Slider";
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
        <button className="p-3 rounded-md bg-black text-white w-52">
          Download The App
        </button>
      </div>
      <div className="my-20">
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
      <div className="my-20">
        <h3 className="text-2xl my-4">Cabby's Most Popular Ride Options </h3>
        <p className="my-6">Request a ride, Hop in, and Go</p>
        <div className="flex w-[30%] justify-between">
          <button className="p-3 bg-black text-white rounded-md w-52">
            Download The App
          </button>
          <div className="text-blue-500 underline my-auto">
            <p>See more ride options</p>
          </div>
        </div>
      </div>
      <div className="py-20">
        <Slider />
        <div className="flex justify-between mt-20">
          <div className="text-center w-[30%]">
            <img src="/images/safety.png" className="mx-auto w-20" alt="" />
            <h4 className="text-2xl">Safety</h4>
            <p className="my-4">Access to rides on demand.</p>
            <p className="text-blue-500 underline">Learn More</p>
          </div>
          <div className="text-center w-[30%]">
            <img src="/images/cities.png" className="mx-auto  w-20" alt="" />
            <h4 className="text-2xl">Cities</h4>
            <p className="my-4">Access to rides on demand.</p>
            <p className="text-blue-500 underline">Learn More</p>
          </div>
          <div className="text-center w-[30%]">
            <img src="/images/flight.png" className="mx-auto  w-20" alt="" />
            <h4 className="text-2xl">Airports</h4>
            <p className="my-4">Access to rides on demand.</p>
            <p className="text-blue-500 underline">Learn More</p>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-3xl font-bold my-8">Food delivery on demand</h3>
        <div className="flex justify-between">
          <div className="w-[48%]">
            <img src="/images/food1.png" className="w-full" alt="" />
            <h4 className="text-xl my-3">Cabby Eats</h4>
            <p>
              Order from your favorite restaurants, online or with the Uber app.
              The restaurants will prepare your order, and a nearby delivery
              person will deliver it to your door.
            </p>
            <p className="text-blue-500 underline my-6">Visit Cabby Eats</p>
          </div>
          <div className="w-[48%]">
            <img src="/images/food2.png" className="w-full" alt="" />
            <h4 className="text-xl my-3">Restaurants</h4>
            <p>
              Cabby Eats makes a real impact on your restaurant business. When
              your food is featured in the app, new customers can discover it
              and loyal customers can enjoy it more often. Delivery people using
              the Uber app deliver the food fast, maintaining the best possible
              food quality.
            </p>
            <p className="text-blue-500 underline my-6">
              Partner with Cabby Eats
            </p>
          </div>
        </div>
        <h3 className="text-3xl font-bold my-8">Earn Money With Cabby</h3>
        <div className="flex justify-between">
          <div className="w-[48%]">
            <img src="/images/earn1.png" className="w-full" alt="" />
            <h4 className="text-xl my-3">Drive with Cabby</h4>
            <p>
              Make the most of your time on the road on the platform with the
              largest network of active riders.
            </p>
            <p className="text-blue-500 underline my-6">Visit Cabby Eats</p>
          </div>
          <div className="w-[48%]">
            <img src="/images/earn2.png" className="w-full" alt="" />
            <h4 className="text-xl my-3">Deliver with Cabby</h4>
            <p>
              Make money by delivering food orders that people crave, and other
              items using the Uber Eats app—all while exploring your city.
            </p>
            <p className="text-blue-500 underline my-6">
              Partner with Cabby Eats
            </p>
          </div>
        </div>
        <h3 className="text-3xl font-bold my-8">
          Moving cities forward, together
        </h3>
        <div className="flex justify-between">
          <div className="w-[48%]">
            <img src="/images/move1.png" className="w-full" alt="" />
            <h4 className="text-xl my-3">
              Helping to improve public transportation for all
            </h4>
            <p>
              Cabby is committed to helping cities around the world make public
              transportation more accessible, equitable, and efficient.
            </p>
            <p className="text-blue-500 underline my-6">Visit Cabby Eats</p>
          </div>
          <div className="w-[48%]">
            <img src="/images/move2.png" className="w-full" alt="" />
            <h4 className="text-xl my-3">
              Providing access to care for those in need
            </h4>
            <p>
              We’ve partnered with healthcare organizations to provide their
              members and patients with access to care by offering them flexible
              ride-scheduling options. Healthcare professionals can schedule
              rides for patients and caregivers going to and from the care they
              need, all from a single dashboard.
            </p>
            <p className="text-blue-500 underline my-6">
              Partner with Cabby Eats
            </p>
          </div>
        </div>
        <h3 className="text-3xl font-bold my-8">
          Helping businesses move ahead
        </h3>
        <div className="flex justify-between">
          <div className="w-[48%]">
            <img src="/images/move1.png" className="w-full" alt="" />
            <h4 className="text-xl my-3">Cabby Freight</h4>
            <p>
              Cabby Freight is a free app that matches carriers with shippers.
              Shippers tap a button to instantly book the loads they want to
              haul. And thanks to upfront pricing, carriers always know how much
              they’ll get paid.
            </p>
            <p className="text-blue-500 underline my-6">Visit Cabby Eats</p>
          </div>
          <div className="w-[48%]">
            <img src="/images/move2.png" className="w-full" alt="" />
            <h4 className="text-xl my-3">Cabby for Business</h4>
            <p>
              Whether it’s employee travel or customer rides, Uber for Business
              gives you an easy way to manage your ground transportation needs.
              Built for work, it offers a clear view into employee trip activity
              with automated billing, expensing, and reporting.
            </p>
            <p className="text-blue-500 underline my-6">
              Partner with Cabby Eats
            </p>
          </div>
        </div>
      </div>
      <div className="pt-20">
        <div className="flex justify-between w-1/2 mx-auto">
          <button className="p-6 text-white text-2xl w-72 bg-black rounded-md flex justify-between">
            <p>Signup For Drive</p>
            <img src="/images/arrow.png" className="my-auto" alt="" />
          </button>
          <button className="p-6 text-white text-2xl w-72 bg-black rounded-md flex justify-between">
            <p>Signup For Ride</p>
            <img src="/images/arrow.png" className="my-auto" alt="" />
          </button>
        </div>
        <div className="mt-20">
          The material provided on this web page is intended for informational
          purposes only and may not be applicable in your country, region, or
          city. It is subject to change and may be updated without notice.
        </div>
      </div>
    </div>
  );
};

export default ouroffering;
import Layout from "@/components/Layout";
import React from "react";
import Head from "next/head";

const howtouse = () => {
  return (
    <>
      <Head>
        <title>Cabby | How to Use</title>
        {/* <meta name="description" content="Generated by create next app" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="lg:m-40 m-4 lg:mb-0 sm:my-32 md:my-32 lg:w-1/2">
          <h1 className="text-4xl font-bold">How to use the Cabby app</h1>
          <p className="my-4">
            Our core service is developing technology that connects drivers and
            riders on demand. Here’s how the app works, step by step:
          </p>
          {/* <button className="p-3 rounded-md bg-black text-white w-40 flex justify-between">
            <img src="/images/watch.png" alt="" />
            How To Use
          </button> */}
        </div>
        <div className="lg:p-20 p-4 lg:mx-20 relative">
          <img
            src="/images/steps.png"
            className="absolute lg:top-32 top-12 left-2 lg:left-[40%] lg:h-[150vh] sm:hidden "
            alt=""
          />
          <div className="lg:flex justify-between my-10">
            <div className="lg:w-[30%]">
              <img src="/images/opens-app.jpg" alt="" />
            </div>
            <div className="lg:w-[50%]">
              <p className="text-[#1CB93B]">Step 1</p>
              <h3 className="text-2xl my-3">A Rider Opens The App</h3>
              <p>
                The rider enters their destination into the “Where to?” box;
                reviews each ride option for vehicle size, price, and estimated
                dropoff time; chooses the desired option; then confirms the
                pickup.
              </p>
            </div>
          </div>
          <div className="lg:flex justify-between my-10">
            <div className="lg:w-[30%]">
              <img src="/images/step2.jpg" alt="" />
            </div>
            <div className="lg:w-[50%]">
              <p className="text-[#1CB93B]">Step 2</p>
              <h3 className="text-2xl my-3">
                The Rider is Matched With a Driver
              </h3>
              <p>
                A nearby driver sees and chooses to accept the rider’s ride
                request. The rider is automatically notified when the driver’s
                vehicle is about a minute away.
              </p>
            </div>
          </div>
          <div className="lg:flex justify-between my-10">
            <div className="lg:w-[30%]">
              <img src="/images/step3.jpg" alt="" />
            </div>
            <div className="lg:w-[50%]">
              <p className="text-[#1CB93B]">Step 3</p>
              <h3 className="text-2xl my-3">The Driver Picks Up The Rider</h3>
              <p>
                The driver and the rider verify each other’s names and the
                destination. Then the driver starts the ride.
              </p>
            </div>
          </div>
          <div className="lg:flex justify-between my-10">
            <div className="lg:w-[30%]">
              <img src="/images/step4.jpg" alt="" />
            </div>
            <div className="lg:w-[50%]">
              <p className="text-[#1CB93B]">Step 4</p>
              <h3 className="text-2xl my-3">
                The Driver Takes the Rider to The Destination
              </h3>
              <p>
                The app gives the driver the option to access turn-by-turn
                directions.
              </p>
            </div>
          </div>
          <div className="lg:flex justify-between my-10">
            <div className="lg:w-[30%]">
              <img src="/images/step5.jpg" alt="" />
            </div>
            <div className="lg:w-[50%]">
              <p className="text-[#1CB93B]">Step 5</p>
              <h3 className="text-2xl my-3">
                The Driver and Rider Leave Ratings and Reviews
              </h3>
              <p>
                The rider enters their destination into the “Where to?” box;
                reviews each ride option for vehicle size, price, and estimated
                dropoff time; chooses the desired option; then confirms the
                pickup.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#F3F2F2] lg:py-20 lg:px-40 sm:p-4 md:p-4">
          <h2 className="text-4xl">Download App Now</h2>
          <p>
            Ready to experience Cabby for yourself? Take your first trip as a
            rider, or get on the road to earning as a driver.
          </p>
          <div className="lg:flex justify-between lg:w-1/2 mt-10">
            <button className="p-6 text-white lg:text-2xl text-xl lg:w-72 w-full sm:my-2 md:my-2 bg-black rounded-md flex justify-between">
              <p>Signup For Drive</p>
              <img src="/images/arrow.png" className="my-auto" alt="" />
            </button>
            <button className="p-6 text-white lg:text-2xl text-xl w-full lg:w-72 bg-black sm:my-2 md:my-2 rounded-md flex justify-between">
              <p>Signup For Ride</p>
              <img src="/images/arrow.png" className="my-auto" alt="" />
            </button>
          </div>
        </div>
        <div className="lg:flex justify-between lg:my-20 lg:mx-40 mx-4 my-10">
          <div className="lg:w-[45%] my-auto">
            <h2 className="text-3xl">Ways People Move Around The World</h2>
            <p className="my-6">
              The Cabby app gives you the power to get where you want to go with
              access to different types of rides across more than 10,000 cities.
            </p>
            <button className="p-3 text-white bg-black rounded-md">
              View Ride Option
            </button>
          </div>
          <div className="lg:w-[40%] sm:hidden">
            <img src="/images/app.png" className="" alt="" />
          </div>
        </div>
        {/* <div className="lg:flex justify-between lg:mx-40 mx-4 lg:py-20 py-10">
          <div className="lg:w-[48%]">
            <img src="/images/rider-app.png" className="w-full" alt="" />
            <h4 className="text-xl my-3">Rider App</h4>
            <p>
              Get where you’re going easily and reliably with the tap of a
              button. Choose the ride option that best suits your needs.
            </p>
            <p className="text-blue-500 underline my-6">Visit Cabby Eats</p>
          </div>
          <div className="lg:w-[48%]">
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
        </div> */}
      </Layout>
    </>
  );
};

export default howtouse;

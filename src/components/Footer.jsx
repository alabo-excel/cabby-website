import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-black w-full text-white lg:px-40 p-4 py-10">
      <div className="lg:flex justify-between">
        <Link href={"/"}>
          <img src="/images/logo.png" alt="" />
        </Link>
        <p className="my-auto">Bangladesh Ride Sharing Information</p>
      </div>
      <p className="my-3">Visit Cabby Help Center</p>
      <div className="flex sm:flex-wrap lg:flex-nowrap md:flex-wrap jsutify-between">
        <div className="lg:w-1/2 w-full my-6">
          <h2 className="font-bold text-2xl sm:text-xl my-4">Company</h2>
          <Link href={"/about"}>
            <p className="py-2">About us</p>
          </Link>
          <Link href={"/our-offering"}>
            <p className="py-2">Our Offerings</p>
          </Link>
          <p className="py-2">Newsroom</p>
          <p className="py-2">Investors</p>
          <p className="py-2">Blog</p>
          <p className="py-2">Careers</p>
          <p className="py-2">AI</p>
          <p className="py-2">Gift cards</p>
        </div>
        <div className="lg:w-1/2 w-full my-6">
          <h2 className="font-bold text-2xl  sm:text-xl my-4">Products</h2>
          <Link href={"/how-to-use"}>
            <p className="py-2">Ride</p>
          </Link>
          <p className="py-2">Drive</p>
          <p className="py-2">Driver</p>
          <p className="py-2">Eat</p>
          <p className="py-2">Cabby for Business</p>
          <p className="py-2">Cabby Freight</p>
        </div>
        <div className="lg:w-1/2 w-full my-6">
          <h2 className="font-bold text-2xl  sm:text-xl my-4">
            Global citizenship
          </h2>
          <Link href={"/global-citizenship"}>
            <p className="py-2">Safety</p>
          </Link>
          <Link href={"/global-citizenship"}>
            <p className="py-2">Diversity and Inclusion</p>
          </Link>
        </div>
        <div className="w-32">
          <h2 className="font-bold  sm:text-xl text-2xl my-4">Travel</h2>
          <p className="py-2">Airports</p>
          <p className="py-2">Cities</p>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex w-1/2 justify-between mt-10">
          <img src="/images/icons/Vector-4.png" alt="" />
          <img src="/images/icons/Vector-3.png" alt="" />
          <img src="/images/icons/Vector-2.png" alt="" />
          <img src="/images/icons/Vector-1.png" alt="" />
          <img src="/images/icons/Vector.png" alt="" />
        </div>
        <div className="flex my-auto sm:mt-8">
          <img src="/images/Vector.png" className="h-6 mx-2" alt="" />
          <p>Dhaka</p>
        </div>
      </div>
      <div className="flex my-10">
        <img src="/images/download.png" className="lg:mr-8 mr-1" alt="" />
        <img src="/images/download.png" alt="" />
      </div>
      <div className="flex justify-between ">
        <p>© 2023 Cabby Technologies Inc.</p>
        <div className="flex justify-between w-80">
          <p>Privacy</p>
          <p>Accessibility</p>
          <p>Terms</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

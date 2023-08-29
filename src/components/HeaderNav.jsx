import Link from "next/link";
import React from "react";
import { Dropdown } from "rsuite";

const HeaderNav = () => {
  return (
    <div>
      <div className="lg:flex fixed justify-between top-0 w-full bg-black lg:px-20 py-4 text-white z-10 sm:hidden md:hidden">
        <div className="flex w-96 justify-between">
          <Link href={"/"}>
            <img src="/images/logo.png" alt="" />
          </Link>
          {/* <Dropdown title="Company" >
            <Dropdown.Item>New File</Dropdown.Item>
            <Dropdown.Item>New File with Current Profile</Dropdown.Item>
            <Dropdown.Item>Download As...</Dropdown.Item>
            <Dropdown.Item>Export PDF</Dropdown.Item>
            <Dropdown.Item>Export HTML</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>About</Dropdown.Item>
          </Dropdown> */}
          {/* <p className="my-auto">Safety</p>
          <p className="my-auto">Help</p> */}
        </div>
        <div className="w-[30%] flex justify-between">
          {/* <p className="my-auto">Products</p>
          <p className="my-auto">Login</p> */}
          <Link href={'/about'}>
            <p className="my-2">About Us</p>
          </Link>
          <Link href={'/our-offering'}>
            <p className="my-2">Services</p>
          </Link>

          <Link href={'/how-to-use'}>
            <p className="my-2">How to Use</p>
          </Link>
          <Link href={'/#download'}>
            <button className="bg-white rounded-full p-2 px-6 text-black">
              Get App
            </button>
          </Link>
        </div>
      </div>
      <div className="lg:hidden flex fixed justify-between top-0 w-full bg-black text-white p-4 z-10">
        <Link href={"/"}>
          <img src="/images/logo.png" className="w-20 mt-2 my-auto" alt="" />
        </Link>
        <div className="flex w-1/2 justify-between text-sm">
          <Link href={'/about'}>
            <p className="my-2">About Us</p>
          </Link>
          <button className="bg-white rounded-full p-2 w-20 text-black ">
            Get App
          </button>
          {/* <div className="my-auto">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              color="white"
            >
              <path d="M2 6h20v3H2V6Z" fill="currentColor"></path>,
              <path d="M2 15h20v3H2v-3Z" fill="currentColor"></path>
            </svg>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default HeaderNav;

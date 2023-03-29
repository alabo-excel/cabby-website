import React from "react";

const about = () => {
  return (
    <div>
      <div>
        <img src="/images/about.png" className="w-full h-[90vh]" alt="" />
        <div className="w-80 text-center absolute top-[40%] right-44 text-black text-5xl font-bold">
          About Our Cabby
        </div>
      </div>
      <div className="p-20">
        <h3 className="text-3xl">
          We Make The Way the World <br /> Moves for the better
        </h3>
        <p className="w-1/2 my-3">
          Movement is what we power. It’s our lifeblood. It runs through our
          veins. It’s what gets us out of bed each morning. It pushes us to
          constantly reimagine how we can move better. For you. For all the
          places you want to go. For all the things you want to get. For all the
          ways you want to earn. Across the entire world. In real time. At the
          incredible speed of now.
        </p>
        <button className="flex py-3 mt-10 border-b border-gray justify-between w-80">
          <p> Read Our Full Mission Statement</p>
          <img src="/images/arrow-dwn.png" className="my-auto" alt="" />
        </button>
      </div>
      <div className="p-20 relative">
        <img src="/images/ceo.png" className="w-full" alt="" />
        <div className="absolute text-white top-[30%] left-40 ">
          <h1 className="text-4xl font-bold w-64">A Message From Our CEO</h1>
          <p className="my-5 w-72">
            Read about our team’s commitment to provide everyone on our global
            platform with the technology that can help them move ahead.
          </p>
          <button className="p-3 bg-black rounded-md">Nash Message</button>
        </div>
      </div>
      <div className="px-20">
        <div className="flex justify-between">
          <div className="w-[40%]">
            <img src="/images/sustainability.png" className="w-full" alt="" />
          </div>
          <div className="w-[58%] my-auto">
            <h2 className="text-3xl">Sustainability</h2>
            <p className="my-10">
              Cabby is committing to becoming a fully electric, zero-emission
              platform by 2040, with 100% of rides taking place in zero-emission
              vehicles, on public transit, or with micromobility. It is our
              responsibility as the largest mobility platform in the world to
              more aggressively tackle the challenge of climate change. We will
              do this by offering riders more ways to ride green, helping
              drivers go electric, making transparency a priority and partnering
              with NGOs and the private sector to help expedite a clean and just
              energy transition.
            </p>
            <button className="p-3 text-white bg-black rounded-md">
              Learn More
            </button>
          </div>
        </div>
        <div className="flex justify-between mt-20">
          <div className="w-[40%]">
            <img src="/images/rides.png" className="w-full" alt="" />
          </div>
          <div className="w-[58%] my-auto">
            <h2 className="text-3xl">Rides and Beyond</h2>
            <p className="my-10">
              In addition to helping riders find a way to go from point A to
              point B, we're helping people order food quickly and affordably,
              removing barriers to healthcare, creating new freight-booking
              solutions, and helping companies provide a seamless employee
              travel experience. And always helping drivers and couriers earn.
            </p>
            <button className="p-3 text-white bg-black rounded-md">
              How App Work
            </button>
          </div>
        </div>
      </div>
      <div className=" p-20 flex justify-between">
        <div className="w-[58%] my-auto">
          <h2 className="text-3xl">Sustainability</h2>
          <p className="my-10">
            Cabby is committing to becoming a fully electric, zero-emission
            platform by 2040, with 100% of rides taking place in zero-emission
            vehicles, on public transit, or with micromobility. It is our
            responsibility as the largest mobility platform in the world to more
            aggressively tackle the challenge of climate change. We will do this
            by offering riders more ways to ride green, helping drivers go
            electric, making transparency a priority and partnering with NGOs
            and the private sector to help expedite a clean and just energy
            transition.
          </p>
          <button className="p-3 text-white bg-black rounded-md">
            Learn More
          </button>
        </div>
        <div className="w-[40%]">
          <img src="/images/secure.png" className="w-full" alt="" />
        </div>
      </div>
      <div className="p-20">
        <h2 className="text-3xl font-bold mb-10">Company Information</h2>
        <div className="flex justify-between">
          <div className="w-[32%]">
            <img src="/images/driving.png" className="w-full" alt="" />
            <h4 className="text-xl my-3">Who's Driving Cabby</h4>
            <p>
              We’re building a culture within Cabby that emphasizes doing the
              right thing, period, for riders, drivers, and employees. Find out
              more about the team that’s leading the way.
            </p>
            <p className="text-blue-500 underline my-6">See our leadership</p>
          </div>
          <div className="w-[32%]">
            <img src="/images/diversity.png" className="w-full" alt="" />
            <h4 className="text-xl my-3">Getting Diversity Right</h4>
            <p>
              It’s our goal to create a workplace that is inclusive and reflects
              the diversity of the cities we serve—where everyone can be their
              authentic self, and where that authenticity is celebrated as a
              strength. By creating an environment where people from every
              background can thrive, we’ll make Uber a better company—for our
              employees and our customers.
            </p>
            <p className="text-blue-500 underline my-6">Read about diversity</p>
          </div>
          <div className="w-[32%]">
            <img src="/images/acting.png" className="w-full" alt="" />
            <h4 className="text-xl my-3">Acting With Integrity</h4>
            <p>
              Uber's Ethics & Compliance Program Charter outlines our commitment
              to integrity at the highest levels within the company.
              Transparency is critical to an ethical culture; we achieve this
              through our Integrity Helpline and suite of scalable and effective
              compliance initiatives.
            </p>
            <p className="text-blue-500 underline my-6">Learn More</p>
          </div>
        </div>
      </div>
      <div className="p-20">
        <h2 className="text-3xl font-bold mb-10">Keep Up With The Latest</h2>
        <div className="flex justify-between">
          <div className="w-[30%] text-center">
            <img
              src="/images/icons/relation.png"
              className="mx-auto w-14"
              alt=""
            />
            <h4 className="text-[#1CB93B] text-2xl">Investor relations</h4>
            <p className="text-base my-3">
              Download financial reports, see next-quarter plans, and read about
              our corporate responsibility initiatives.
            </p>
            <div className="text-blue-500 underline mt-6">
              <p>Go to Newsroom</p>
            </div>
          </div>
          <div className="w-[30%] text-center">
            <div className="bg-[#7020C4] w-14 h-14 mx-auto rounded-full p-4">
              <img src="/images/icons/newsroom.png" className="w-12" alt="" />
            </div>
            <h4 className="text-[#7020C4] text-2xl">Newsroom</h4>
            <p className="text-base my-3">
              Get announcements about partnerships, app updates, initiatives,
              and more near you and around the world.
            </p>
            <div className="text-blue-500 underline mt-6">
              <p>Read our posts</p>
            </div>
          </div>
          <div className="w-[30%] text-center">
            <div className="bg-[#D51986] w-14 h-14 mx-auto rounded-full p-4">
              <img src="/images/icons/blog.png" className="w-12" alt="" />
            </div>
            <h4 className="text-[#D51986] text-2xl">Blog</h4>
            <p className="text-base my-3">
              Find new places to explore and learn about Uber products,
              partnerships, and more.
            </p>
            <div className="text-blue-500 underline mt-6">
              <p>Learn more</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F3F2F2] px-20 py-4 flex justify-between">
        <div className="my-auto">
          <h2 className="text-4xl font-bold my-10">
            Come reimagine <br /> with us
          </h2>
          <button className="p-3 rounded-md w-40 bg-black text-white">
            Search Open Roles
          </button>
        </div>
        <img src="/images/world.png" alt="" />
      </div>
    </div>
  );
};

export default about;

import { pricingRef } from "../Navbar/Navbar";

function Pricing() {
  return (
    <div ref={pricingRef} className="py-28 dark:bg-[#111928]">
      <div className=" flex flex-col items-center justify-center gap-4">
        <p className="font-medium tracking-wide text-[#3758f9]">
          Pricing Table
        </p>
        <h1 className="text-3xl lg:text-4xl w-[100%] text-center font-bold dark:text-white">
          Awesome Pricing Plan
        </h1>
        <h2 className="text-sm w-[100%] px-10 sm:w-[480px] text-center text-gray-700 dark:text-gray-400">
          There are many variations of passages of Lorem Ipsum available but the
          majority have suffered alteration in some form.
        </h2>
      </div>

      <div className="mt-16 flex justify-center gap-6 flex-wrap items-center">
        <div className="shadow-2xl dark:bg-[#1f2a37] py-16 rounded-xl dark:text-white w-[80%] sm:w-[46%] md:w-[37%] lg:w-[30%] flex flex-col px-10 gap-10">
          <div className="flex flex-col gap-3">
            <h3 className="font-medium text-xl">Starter</h3>
            <div className="flex gap-2 items-end">
              <span className="font-semibold text-lg">$</span>
              <h2 className="font-bold text-4xl">25.00</h2>
              <span className="text-gray-600 md:text-base sm:text-sm dark:text-gray-400">
                Per Month
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-medium text-lg">Features</h4>
            <div>
              <ul className="text-gray-600 dark:text-gray-400 flex flex-col gap-2 text-md">
                <li>Up to 1 User</li>
                <li>All UI components</li>
                <li>Lifetime access</li>
                <li>Free updates</li>
              </ul>
            </div>
          </div>
          <div>
            <button className="bg-[#3758f9] mt-3 text-white py-2 hover:bg-[#344dcb] font-medium px-6 rounded-md duration-200">
              Purchase Now
            </button>
          </div>
        </div>
        <div className="shadow-2xl dark:bg-[#1f2a37] py-16 rounded-xl dark:text-white w-[80%] sm:w-[46%] md:w-[37%] lg:w-[30%] flex flex-col px-10 gap-10 relative">
          <div className="absolute rounded-tl-md rounded-bl-md top-12 py-2 px-4 text-sm font-semibold -right-9 bg-[#3758f9] text-white -rotate-90">
            Recommended
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="font-medium text-xl">Basic</h3>
            <div className="flex gap-2 items-end">
              <span className="font-semibold text-lg">$</span>
              <h2 className="font-bold text-4xl">59.00</h2>
              <span className="text-gray-600 text-base md:text-base sm:text-sm dark:text-gray-400">
                Per Month
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-medium text-lg">Features</h4>
            <div>
              <ul className="text-gray-600 dark:text-gray-400 flex flex-col gap-2 text-md">
                <li>Up to 1 User</li>
                <li>All UI components</li>
                <li>Lifetime access</li>
                <li>Free updates</li>
              </ul>
            </div>
          </div>
          <div>
            <button className="bg-[#3758f9] mt-3 text-white py-2 hover:bg-[#344dcb] font-medium px-6 rounded-md duration-200">
              Purchase Now
            </button>
          </div>
        </div>
        <div className="shadow-2xl dark:bg-[#1f2a37] py-16 rounded-xl dark:text-white w-[80%] sm:w-[46%] md:w-[37%] lg:w-[30%] flex flex-col px-10 gap-10">
          <div className="flex flex-col gap-3">
            <h3 className="font-medium text-xl">Premium</h3>
            <div className="flex gap-2 items-end">
              <span className="font-semibold text-lg">$</span>
              <h2 className="font-bold text-4xl">99.00</h2>
              <span className="text-gray-600 md:text-base sm:text-sm dark:text-gray-400">
                Per Month
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-medium text-lg">Features</h4>
            <div>
              <ul className="text-gray-600 dark:text-gray-400 flex flex-col gap-2 text-md">
                <li>Up to 1 User</li>
                <li>All UI components</li>
                <li>Lifetime access</li>
                <li>Free updates</li>
              </ul>
            </div>
          </div>
          <div>
            <button className="bg-[#3758f9] mt-3 text-white py-2 hover:bg-[#344dcb] font-medium px-6 rounded-md duration-200">
              Purchase Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;

import { NavLink } from "react-router-dom";
import Pricing from "../Pricing/Pricing";

function PricingRoute() {
  return (
    <div className="mt-44">
      {/* heading start */}
      <div className="flex flex-col gap-3 dark:text-white justify-center items-center mb-10">
        <h1 className="text-3xl font-bold">Pricing Page</h1>
        <p className="text-gray-600 dark:text-gray-400">
          There are many variations of passages of Lorem Ipsum available.
        </p>
        <div className="flex gap-3">
          <NavLink to="/" className="cursor-pointer">
            Home
          </NavLink>{" "}
          <p className="text-gray-600 dark:text-gray-400">/</p>
          <p className="text-gray-600 cursor-pointer dark:text-gray-400">
            Pricings
          </p>
        </div>
      </div>
      <div className="border-b"></div>
      {/* heading end */}

      <Pricing />
    </div>
  );
}

export default PricingRoute;

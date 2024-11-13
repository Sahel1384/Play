import { NavLink } from "react-router-dom";
import About from "../About/About";
import Team from "../Team/Team";

function AboutRoute() {
  return (
    // route for about and team
    <div className="mt-44">
      <div className="flex flex-col gap-3 dark:text-white justify-center items-center mb-10">
        <h1 className="text-3xl font-bold">About Us Page</h1>
        <p className="text-gray-600 dark:text-gray-400">
          There are many variations of passages of Lorem Ipsum available.
        </p>
        <div className="flex gap-3">
          <NavLink to="/" className="cursor-pointer">
            Home
          </NavLink>{" "}
          <p className="text-gray-600 dark:text-gray-400">/</p>
          <p className="text-gray-600 cursor-pointer dark:text-gray-400">
            About Us
          </p>
        </div>
      </div>
      <div className="border-b"></div>

      <About />
      <Team />
    </div>
  );
}

export default AboutRoute;

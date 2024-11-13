import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function SignUp() {
  return (
    <>
      {/* heading start */}
      <div className="mt-44">
        <div className="flex flex-col gap-3 dark:text-white justify-center items-center mb-10">
          <h1 className="text-3xl font-bold">Sign Up Page</h1>
          <p className="text-gray-600 dark:text-gray-400">
            There are many variations of passages of Lorem Ipsum available.
          </p>
          <div className="flex gap-3">
            <NavLink to="/" className="cursor-pointer">
              Home
            </NavLink>{" "}
            <p className="text-gray-600 dark:text-gray-400">/</p>
            <p className="text-gray-600 cursor-pointer dark:text-gray-400">
              Sign Up
            </p>
          </div>
        </div>
        <div className="border-b"></div>
      </div>
      {/* heading end */}

      {/* main sign Up form start */}
      <div className=" h-[700px] bg-[#f4f7ff] dark:bg-[#111928] flex items-center justify-center">
        <div className="w-[100%] sm:w-[480px] dark:text-white pl-14 md:relative md:top-0 dark:bg-[#1f2a37] bg-white rounded-lg py-12 md:py-12 md:h-[570px] shadow-xl">
          <div className="flex justify-center">
            <div className="bg-play1 w-40 bg-contain h-11 bg-no-repeat dark:bg-play2"></div>
          </div>
          <div className="flex flex-col gap-4 mt-8">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="border focus:border-[#3758f9] py-2 px-3 rounded-md w-[90%] outline-none"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Email"
                className="border focus:border-[#3758f9] py-2 px-3 rounded-md w-[90%] outline-none"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Password"
                className="border focus:border-[#3758f9] py-2 px-3 rounded-md w-[90%] outline-none"
              />
            </div>
            <div>
              <input
                type="submit"
                value="Sign Up"
                className="bg-[#3758f9] text-white py-2 px-3 rounded-md w-[90%] outline-none hover:bg-[#394db2] duration-200 cursor-pointer"
              />
            </div>
          </div>
          <div className="flex justify-start items-center gap-5 mt-6">
            <div className="border w-28"></div>
            <p className="text-gray-600 text-sm dark:text-gray-300">
              Connect With
            </p>
            <div className="border w-24"></div>
          </div>
          <div className="flex justify-start items-center gap-5 mt-6">
            <button className="py-3 px-11 rounded-md bg-[#4064ac] text-white">
              <FaFacebookF />{" "}
            </button>
            <button className="py-3 px-11 rounded-md bg-[#1c9cea] text-white">
              <FaTwitter />{" "}
            </button>
            <button className="py-3 px-11 rounded-md bg-[#d64937] text-white">
              <FaGoogle />{" "}
            </button>
          </div>
          <div className="w-[80%] text-center text-sm mt-7 text-gray-600 dark:text-gray-300">
            By creating an account you are agree with our{" "}
            <span className="text-[#3758f9] hover:underline cursor-pointer">
              {" "}
              Privacy{" "}
            </span>
            and{" "}
            <span className="text-[#3758f9] hover:underline cursor-pointer">
              {" "}
              Policy{" "}
            </span>
          </div>
          <div className="w-[80%] text-center text-sm mt-4 text-gray-600 dark:text-gray-300">
            Already have an account?{" "}
            <span className="text-[#3758f9] hover:underline cursor-pointer">
              {" "}
              <NavLink to="/signIn">Sign In </NavLink>
            </span>
          </div>
          <span className="absolute top-1 right-1">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="1.39737"
                cy="38.6026"
                r="1.39737"
                transform="rotate(-90 1.39737 38.6026)"
                fill="#3056D3"
              />
              <circle
                cx="1.39737"
                cy="1.99122"
                r="1.39737"
                transform="rotate(-90 1.39737 1.99122)"
                fill="#3056D3"
              />
              <circle
                cx="13.6943"
                cy="38.6026"
                r="1.39737"
                transform="rotate(-90 13.6943 38.6026)"
                fill="#3056D3"
              />
              <circle
                cx="13.6943"
                cy="1.99122"
                r="1.39737"
                transform="rotate(-90 13.6943 1.99122)"
                fill="#3056D3"
              />
              <circle
                cx="25.9911"
                cy="38.6026"
                r="1.39737"
                transform="rotate(-90 25.9911 38.6026)"
                fill="#3056D3"
              />
              <circle
                cx="25.9911"
                cy="1.99122"
                r="1.39737"
                transform="rotate(-90 25.9911 1.99122)"
                fill="#3056D3"
              />
              <circle
                cx="38.288"
                cy="38.6026"
                r="1.39737"
                transform="rotate(-90 38.288 38.6026)"
                fill="#3056D3"
              />
              <circle
                cx="38.288"
                cy="1.99122"
                r="1.39737"
                transform="rotate(-90 38.288 1.99122)"
                fill="#3056D3"
              />
              <circle
                cx="1.39737"
                cy="26.3057"
                r="1.39737"
                transform="rotate(-90 1.39737 26.3057)"
                fill="#3056D3"
              />
              <circle
                cx="13.6943"
                cy="26.3057"
                r="1.39737"
                transform="rotate(-90 13.6943 26.3057)"
                fill="#3056D3"
              />
              <circle
                cx="25.9911"
                cy="26.3057"
                r="1.39737"
                transform="rotate(-90 25.9911 26.3057)"
                fill="#3056D3"
              />
              <circle
                cx="38.288"
                cy="26.3057"
                r="1.39737"
                transform="rotate(-90 38.288 26.3057)"
                fill="#3056D3"
              />
              <circle
                cx="1.39737"
                cy="14.0086"
                r="1.39737"
                transform="rotate(-90 1.39737 14.0086)"
                fill="#3056D3"
              />
              <circle
                cx="13.6943"
                cy="14.0086"
                r="1.39737"
                transform="rotate(-90 13.6943 14.0086)"
                fill="#3056D3"
              />
              <circle
                cx="25.9911"
                cy="14.0086"
                r="1.39737"
                transform="rotate(-90 25.9911 14.0086)"
                fill="#3056D3"
              />
              <circle
                cx="38.288"
                cy="14.0086"
                r="1.39737"
                transform="rotate(-90 38.288 14.0086)"
                fill="#3056D3"
              />
            </svg>
          </span>
          <span className="absolute left-1 bottom-1">
            <svg
              width="29"
              height="40"
              viewBox="0 0 29 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="2.288"
                cy="25.9912"
                r="1.39737"
                transform="rotate(-90 2.288 25.9912)"
                fill="#3056D3"
              />
              <circle
                cx="14.5849"
                cy="25.9911"
                r="1.39737"
                transform="rotate(-90 14.5849 25.9911)"
                fill="#3056D3"
              />
              <circle
                cx="26.7216"
                cy="25.9911"
                r="1.39737"
                transform="rotate(-90 26.7216 25.9911)"
                fill="#3056D3"
              />
              <circle
                cx="2.288"
                cy="13.6944"
                r="1.39737"
                transform="rotate(-90 2.288 13.6944)"
                fill="#3056D3"
              />
              <circle
                cx="14.5849"
                cy="13.6943"
                r="1.39737"
                transform="rotate(-90 14.5849 13.6943)"
                fill="#3056D3"
              />
              <circle
                cx="26.7216"
                cy="13.6943"
                r="1.39737"
                transform="rotate(-90 26.7216 13.6943)"
                fill="#3056D3"
              />
              <circle
                cx="2.288"
                cy="38.0087"
                r="1.39737"
                transform="rotate(-90 2.288 38.0087)"
                fill="#3056D3"
              />
              <circle
                cx="2.288"
                cy="1.39739"
                r="1.39737"
                transform="rotate(-90 2.288 1.39739)"
                fill="#3056D3"
              />
              <circle
                cx="14.5849"
                cy="38.0089"
                r="1.39737"
                transform="rotate(-90 14.5849 38.0089)"
                fill="#3056D3"
              />
              <circle
                cx="26.7216"
                cy="38.0089"
                r="1.39737"
                transform="rotate(-90 26.7216 38.0089)"
                fill="#3056D3"
              />
              <circle
                cx="14.5849"
                cy="1.39761"
                r="1.39737"
                transform="rotate(-90 14.5849 1.39761)"
                fill="#3056D3"
              />
              <circle
                cx="26.7216"
                cy="1.39761"
                r="1.39737"
                transform="rotate(-90 26.7216 1.39761)"
                fill="#3056D3"
              />
            </svg>
          </span>
        </div>
      </div>
      {/* main sign Up form end */}
    </>
  );
}

export default SignUp;

// imported images start
import about1 from "../../assets/img/about/about-image-01.jpg";
import about2 from "../../assets/img/about/about-image-02.jpg";
// imported images end

// ref for section
import { aboutRef } from "../Navbar/Navbar";

function About() {
  return (
    <>
      {/* main section start */}
      <div ref={aboutRef} className="bg-[#f9fafb] dark:bg-[#1f2a37] py-28">
        <div className="flex justify-center px-5 sm:px-10 flex-col gap-7 lg:flex-row sm:items-center lg:gap-10">
          <div className="flex relative flex-col justify-center items-start gap-6">
            <h1 className="text-2xl sm:text-4xl font-bold w-[100%] sm:w-[70%] sm:mx-auto lg:mx-0 sm:text-center lg:text-start lg:w-[500px] dark:text-white">
              Brilliant Toolkit to Build Nextgen Website Faster.
            </h1>
            <p className="font-base text-sm text-gray-500 w-[100%] sm:w-[70%] sm:mx-auto lg:mx-0 sm:text-center lg:text-start lg:w-[440px] dark:text-gray-300">
              The main ‘thrust&apos; is to focus on educating attendees on how
              to best protect highly vulnerable business applications with
              interactive panel discussions and roundtables led by subject
              matter experts.
            </p>
            <p className="font-base text-sm text-gray-500 w-[100%] sm:w-[70%] sm:mx-auto lg:mx-0 sm:text-center lg:text-start lg:w-[440px] dark:text-gray-300  ">
              The main ‘thrust&apos; is to focus on educating attendees on how
              to best protect highly vulnerable business applications with
              interactive panel.
            </p>
            <button className="font-medium left-10 sm:mx-auto lg:mx-0 text-sm bg-[#3758f9] text-white py-3 px-7 hover:bg-blue-800 duration-200 rounded-md">
              Know More
            </button>
          </div>
          <div className="flex flex-col sm:flex-row gap-5">
            <div className="">
              <img
                src={about1}
                className="h-[440px] w-full md:w-80 lg:w-72 object-cover"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-7">
              <img
                src={about2}
                className="h-[269px] w-auto md:w-80 lg:w-72 object-cover"
                alt=""
              />
              <div className="bg-blue-700 overflow-hidden w-full relative flex flex-col py-5 px-5 gap-1 justify-start">
                <h1 className="text-white font-bold text-5xl">09</h1>
                <h2 className="text-white font-base">We Have</h2>
                <p className="text-white/60 text-sm">Years of experience</p>
                <div className="absolute -top-3 -right-0">
                  {" "}
                  <svg
                    width="106"
                    height="144"
                    viewBox="0 0 106 144"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      opacity="0.1"
                      x="-67"
                      y="47.127"
                      width="113.378"
                      height="131.304"
                      transform="rotate(-42.8643 -67 47.127)"
                      fill="url(#paint0_linear_1416_214)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1416_214"
                        x1="-10.3111"
                        y1="47.127"
                        x2="-10.3111"
                        y2="178.431"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="white" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="absolute -top-3 -left-0">
                  <svg
                    width="130"
                    height="97"
                    viewBox="0 0 130 97"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      opacity="0.1"
                      x="0.86792"
                      y="-6.67725"
                      width="155.563"
                      height="140.614"
                      transform="rotate(-42.8643 0.86792 -6.67725)"
                      fill="url(#paint0_linear_1416_215)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1416_215"
                        x1="78.6495"
                        y1="-6.67725"
                        x2="78.6495"
                        y2="133.937"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="white" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* main section end */}

      {/* What Are You Looking For? section start */}
      <div>
        <div className="flex flex-col items-center justify-center py-28 gap-4 bg-[#3758f9] text-white">
          <h1 className="text-3xl sm:text-4xl font-bold">
            What Are You Looking For?
          </h1>
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Get Started Now
          </h2>
          <div>
            <p className="w-[70%] text-sm sm:text-md font-base text-center mx-auto">
              There are many variations of passages of Lorem Ipsum but the
              majority have suffered in some form.
            </p>
          </div>
          <button className="bg-[#13c296] mt-3 text-white py-2 hover:bg-[#28a586] font-base px-6 rounded-md duration-200">
            Start using Play
          </button>
        </div>
      </div>
      {/* What Are You Looking For? section end */}
    </>
  );
}

export default About;

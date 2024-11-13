import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import team1 from "../../assets/img/team/team-01.png";
import team2 from "../../assets/img/team/team-02.png";
import team3 from "../../assets/img/team/team-03.png";
import team4 from "../../assets/img/team/team-04.png";
import dots from "../../assets/img/team/dotted-shape.svg";
import shape from "../../assets/img/team/shape-2.svg";
import { teamRef } from "../Navbar/Navbar";
function Team() {
  return (
    <div
      ref={teamRef}
      className="relative py-28 bg-[#f9fafb] dark:bg-[#1f2a37]"
    >
      <div className=" flex flex-col items-center justify-center gap-4">
        <p className="font-medium tracking-wide text-[#3758f9]">
          Our Team Members
        </p>
        <h1 className="text-3xl lg:text-4xl w-[100%] text-center font-bold dark:text-white">
          Our Creative Team
        </h1>
        <h2 className="text-sm w-[100%] px-10 sm:w-[480px] text-center text-gray-700 dark:text-gray-400">
          There are many variations of passages of Lorem Ipsum available but the
          majority have suffered alteration in some form.
        </h2>
      </div>

      <div className="px-10 flex-wrap md:flex-nowrap justify-center items-center flex gap-7 mt-16">
        <div className="py-10 group gap-5 px-10 flex flex-col dark:text-white dark:bg-[#111928] justify-center items-center bg-white w-[90%] sm:w-[45%] md:w-[22%] lg:w-[23%] shadow-md rounded-xl">
          <div className="relative z-[20]">
            <img src={team1} className="w-24 z-[10]" alt="" />
            <img
              src={dots}
              className="absolute hidden group-hover:block duration-500 -top-1 -right-1 -z-10"
              alt=""
            />
            <img
              src={shape}
              className="absolute hidden group-hover:block duration-500 -bottom-1 -left-1 -z-10"
              alt=""
            />
          </div>
          <div className="text-center">
            <h2 className="font-semibold lg:text-md">Melissa Tatcher</h2>
            <p className="text-[13px] mt-1 dark:text-gray-400 text-gray-600">
              Marketing Expert
            </p>
          </div>
          <div className="flex gap-4 text-gray-400 items-center justify-center">
            <FaFacebookF className="cursor-pointer hover:text-[#3758f9]" />
            <FaTwitter className="cursor-pointer hover:text-[#3758f9]" />
            <FaInstagram className="cursor-pointer hover:text-[#3758f9]" />
          </div>
        </div>
        <div className="py-10 group gap-5 px-10 flex flex-col dark:text-white dark:bg-[#111928] justify-center items-center bg-white w-[90%] sm:w-[45%] md:w-[22%] lg:w-[23%] shadow-md rounded-xl">
          <div className="relative z-[20]">
            <img src={team2} className="w-24 z-[10]" alt="" />
            <img
              src={dots}
              className="absolute hidden group-hover:block duration-500 -top-1 -right-1 -z-10"
              alt=""
            />
            <img
              src={shape}
              className="absolute hidden group-hover:block duration-500 -bottom-1 -left-1 -z-10"
              alt=""
            />
          </div>
          <div className="text-center">
            <h2 className="font-semibold text-md">Melissa Tatcher</h2>
            <p className="text-[13px] mt-1 dark:text-gray-400 text-gray-600">
              Marketing Expert
            </p>
          </div>
          <div className="flex gap-4 text-gray-400 items-center justify-center">
            <FaFacebookF className="cursor-pointer hover:text-[#3758f9]" />
            <FaTwitter className="cursor-pointer hover:text-[#3758f9]" />
            <FaInstagram className="cursor-pointer hover:text-[#3758f9]" />
          </div>
        </div>
        <div className="py-10 group gap-5 px-10 flex flex-col dark:text-white dark:bg-[#111928] justify-center items-center bg-white w-[90%] sm:w-[45%] md:w-[22%] lg:w-[23%] shadow-md rounded-xl">
          <div className="relative z-[20]">
            <img src={team3} className="w-24 z-[10]" alt="" />
            <img
              src={dots}
              className="absolute hidden group-hover:block duration-500 -top-1 -right-1 -z-10"
              alt=""
            />
            <img
              src={shape}
              className="absolute hidden group-hover:block duration-500 -bottom-1 -left-1 -z-10"
              alt=""
            />
          </div>
          <div className="text-center">
            <h2 className="font-semibold text-md">Melissa Tatcher</h2>
            <p className="text-[13px] mt-1 dark:text-gray-400 text-gray-600">
              Marketing Expert
            </p>
          </div>
          <div className="flex gap-4 text-gray-400 items-center justify-center">
            <FaFacebookF className="cursor-pointer hover:text-[#3758f9]" />
            <FaTwitter className="cursor-pointer hover:text-[#3758f9]" />
            <FaInstagram className="cursor-pointer hover:text-[#3758f9]" />
          </div>
        </div>
        <div className="py-10 group gap-5 px-10 flex flex-col dark:text-white dark:bg-[#111928] justify-center items-center bg-white w-[90%] sm:w-[45%] md:w-[22%] lg:w-[23%] shadow-md rounded-xl">
          <div className="relative z-[20]">
            <img src={team4} className="w-24 z-[10]" alt="" />
            <img
              src={dots}
              className="absolute hidden group-hover:block duration-500 -top-1 -right-1 -z-10"
              alt=""
            />
            <img
              src={shape}
              className="absolute hidden group-hover:block duration-500 -bottom-1 -left-1 -z-10"
              alt=""
            />
          </div>
          <div className="text-center">
            <h2 className="font-semibold text-md">Melissa Tatcher</h2>
            <p className="text-[13px] mt-1 dark:text-gray-400 text-gray-600">
              Marketing Expert
            </p>
          </div>
          <div className="flex gap-4 text-gray-400 items-center justify-center">
            <FaFacebookF className="cursor-pointer hover:text-[#3758f9]" />
            <FaTwitter className="cursor-pointer hover:text-[#3758f9]" />
            <FaInstagram className="cursor-pointer hover:text-[#3758f9]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;

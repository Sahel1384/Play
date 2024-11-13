import { NavLink } from "react-router-dom";
import { FaCalendar, FaComment, FaEye } from "react-icons/fa";

// imported images start
import author from "../../assets/img/blog/author-01.png";

import ar1 from "../../assets/img/blog/article-author-01.png";
import ar2 from "../../assets/img/blog/article-author-02.png";
import ar3 from "../../assets/img/blog/article-author-03.png";
import ar4 from "../../assets/img/blog/article-author-04.png";

import blog1 from "../../assets/img/blog/blog-01.jpg";
import blog2 from "../../assets/img/blog/blog-02.jpg";
import blog3 from "../../assets/img/blog/blog-03.jpg";
// imported images end

function Blog2() {
  return (
    <div className="mt-44 ">
      {/* heading start */}
      <div className="flex flex-col gap-3 dark:text-white justify-center items-center mb-10">
        <h1 className="text-3xl font-bold">Blog Details</h1>
        <p className="text-gray-600 dark:text-gray-400">
          There are many variations of passages of Lorem Ipsum available.
        </p>
        <div className="flex gap-3">
          <NavLink to="/" className="cursor-pointer">
            Home
          </NavLink>{" "}
          <p className="text-gray-600 dark:text-gray-400">/</p>
          <p className="text-gray-600 cursor-pointer dark:text-gray-400">
            Blog Details
          </p>
        </div>
      </div>
      <div className="border-b"></div>
      {/* heading end */}

      {/* main section image start */}
      <div className="flex justify-center">
        <div className="relative w-[90%] py-5 gap-5 flex justify-start h-96 items-end px-10 mt-20 bg-details">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-3">
                <img src={author} alt="" />
                <p className="text-white text-sm">By Samuyl Joshi</p>
              </div>
              <div className="flex items-center text-white">
                <FaCalendar />
                26 Feb 2023
              </div>
            </div>
            <div className="flex gap-3 items-center text-white">
              <div className="flex gap-3 items-center text-white">
                <FaComment className="text-white" />
                09
              </div>
              <div className="flex gap-3 items-center text-white">
                <FaEye className="text-white" />
                35
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* main section image end */}

      {/* blog details start */}
      <div className="px-16 flex flex-wrap lg:flex-nowrap  items-center justify-center gap-10 mt-16">
        <div className="flex flex-col gap-6 w-[100%] lg:w-[66%] dark:text-white">
          <div className="flex flex-col gap-6">
            <h1 className="text-3xl font-bold">
              Facing a challenge is kind of a turn-on for an easy rider
            </h1>
            <p className="text-gray-600 text-sm dark:text-gray-400">
              There&apos;s a time and place for everything… including asking for
              reviews. For instance: you should not asking for a review on your
              checkout page. The sole purpose of this page is to guide your
              customer to complete their purchase, and this means that the page
              should be as minimalist and pared-down possible. You don&apos;t
              want to have any unnecessary elements or Call To Actions.
            </p>
            <p className="text-gray-600 text-sm dark:text-gray-400">
              Thereapos;s a time and place for everything… including asking for
              reviews. For instance: you should not asking for a review on your
              checkout page. The sole purpose of this page is to guide your
              customer to complete their purchase, and this means that the page
              should be as minimalist and pared-down possible. You donapos;t
              want to have any unnecessary elements or Call To Actions.
            </p>
            <h1 className="text-3xl font-bold">Sea no quidam vulputate</h1>
            <p className="text-gray-600 text-sm dark:text-gray-400">
              At quo cetero fastidii. Usu ex ornatus corpora sententiae, vocibus
              deleniti ut nec. Ut enim eripuit eligendi est, in iracundia
              signiferumque quo. Sed virtute suavitate suscipiantur ea, dolor
              this can eloquentiam ei pro. Suas adversarium interpretaris eu
              sit, eum viris impedit ne. Erant appareat corrumpit ei vel.
            </p>
            <div className="flex flex-col justify-center items-center rounded-sm py-9 px-32 gap-1 bg-[#f5f6ff]">
              <div>
                <span className="mb-[14px] text-[#3758f9] flex justify-center text-primary">
                  <svg
                    width="46"
                    height="46"
                    viewBox="0 0 46 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current"
                  >
                    <path d="M13.7995 35.5781C12.937 35.5781 12.1464 35.075 11.8589 34.2844L9.48702 28.5344C6.82765 28.1031 4.45577 26.7375 2.9464 24.6531C1.36515 22.5687 0.862021 19.9812 1.5089 17.4656C2.51515 13.3687 6.75577 10.2781 11.4276 10.35C14.7339 10.4219 17.4651 11.7875 19.262 14.2312C20.987 16.675 21.4183 19.9812 20.412 23C19.4776 25.7312 18.2558 28.4625 17.1058 31.1219C16.6745 32.2 16.1714 33.2781 15.7401 34.2844C15.4526 35.075 14.662 35.5781 13.7995 35.5781ZM11.2839 13.5844C8.1214 13.5844 5.2464 15.5969 4.59952 18.2562C4.24015 19.8375 4.52765 21.4187 5.5339 22.7125C6.6839 24.2937 8.62452 25.3 10.7089 25.4437L11.7151 25.5156L13.7995 30.5469C13.8714 30.3312 14.0151 30.0437 14.087 29.8281C15.237 27.2406 16.387 24.5812 17.2495 21.9219C17.9683 19.9094 17.6808 17.6812 16.5308 16.1C15.3808 14.5187 13.5839 13.6562 11.3558 13.5844C11.3558 13.5844 11.3558 13.5844 11.2839 13.5844Z" />
                    <path d="M37.5905 35.65C36.728 35.65 35.9374 35.1469 35.6499 34.3563L33.278 28.6063C30.6187 28.175 28.2468 26.8094 26.7374 24.725C25.1562 22.6406 24.653 20.0531 25.2999 17.5375C26.3062 13.4406 30.5468 10.35 35.2187 10.4219C38.5249 10.4938 41.2562 11.8594 42.9812 14.3031C44.7062 16.7469 45.1374 20.0531 44.1312 23.0719C43.1968 25.8031 41.9749 28.5344 40.8249 31.1938C40.3937 32.2719 39.8905 33.35 39.4593 34.3563C39.2437 35.1469 38.453 35.65 37.5905 35.65ZM35.0749 13.5844C31.9124 13.5844 29.0374 15.5969 28.3905 18.2563C28.0312 19.8375 28.3187 21.4188 29.3249 22.7844C30.4749 24.3656 32.4155 25.3719 34.4999 25.5156L35.5062 25.5875L37.5905 30.6188C37.6624 30.4031 37.8062 30.1156 37.878 29.9C39.028 27.3125 40.178 24.6531 41.0405 21.9938C41.7593 19.9813 41.4718 17.7531 40.3218 16.1C39.1718 14.5188 37.3749 13.6563 35.1468 13.5844C35.1468 13.5844 35.1468 13.5844 35.0749 13.5844Z" />
                  </svg>
                </span>
              </div>
              <div className="text-sm italic text-center">
                A spring of truth shall flow from it: like a new star it shall
                scatter the darkness of ignorance, and cause a light heretofore
                unknown to shine amongst men.
              </div>
              <div className="text-xs text-gray-600 italic mt-1">
                “Andrio Domeco”
              </div>
            </div>
            <h1 className="text-3xl font-bold">What is it with your ideas?</h1>
            <p className="text-gray-600 text-sm dark:text-gray-400">
              At quo cetero fastidii. Usu ex ornatus corpora sententiae, vocibus
              deleniti ut nec. Ut enim eripuit eligendi est, in iracundia
              signiferumque quo. Sed virtute suavitate suscipiantur ea, dolor
              this can eloquentiam ei pro. Suas adversarium interpretaris eu
              sit, eum viris impedit ne. Erant appareat corrumpit ei vel.
            </p>
            <p className="text-gray-600 text-sm dark:text-gray-400">
              At quo cetero fastidii. Usu ex ornatus corpora sententiae, vocibus
              deleniti ut nec. Ut enim eripuit eligendi est, in iracundia
              signiferumque quo. Sed virtute suavitate suscipiantur ea, dolor
              this can eloquentiam ei pro. Suas adversarium interpretaris eu
              sit, eum viris impedit ne. Erant appareat corrumpit ei vel.
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-5">
            <div className="w-[80vw] flex items-center justify-center flex-col lg:w-[350px] dark:text-white pl-1 md:relative md:top-0 bg-[#3758f9] text-white rounded-md py-12 md:py-12 md:h-[330px] shadow-xl">
              <h1 className="text-white font-bold text-2xl">
                Join our newsletter!
              </h1>
              <div className="w-[80%] text-center text-sm mt-2 text-gray-200 dark:text-gray-300">
                Enter your email to receive our latest newsletter.
              </div>
              <div className="flex flex-col gap-4 mt-8">
                <div>
                  <input
                    type="text"
                    placeholder="Your email address"
                    className="outline-none text-center bg-[#dedada29] py-2 px-3 rounded-md w-[40vw] lg:w-[21vw]"
                  />
                </div>

                <div>
                  <input
                    type="submit"
                    value="Subscribe Now"
                    className="bg-[#13c296] text-sm text-white py-2 px-3 rounded-md w-[40vw] lg:w-[21vw] outline-none hover:bg-[#2ab491] duration-200 cursor-pointer"
                  />
                </div>
              </div>

              <div className=" text-center text-sm mt-4 text-gray-200 dark:text-gray-300">
                Don&apos;t worry, we don&apos;t spam
              </div>
            </div>
            <div className="flex flex-col gap-3 dark:text-white">
              <h1 className="text-2xl font-semibold">Popular Articles</h1>
              <div className="w-24 h-[1px] bg-[#3758f9]"></div>
            </div>
            <div className="flex flex-row flex-wrap gap-7 lg:gap-3 lg:flex-col dark:text-gray-200">
              <div className="flex gap-4 w-[100%] sm:w-[45%] lg:w-[350px] border-b pb-5">
                <div>
                  <img src={ar1} className="w-10 sm:w-24" alt="" />
                </div>
                <div>
                  <h1 className="font-semibold cursor-pointer hover:text-[#3758f9]">
                    image Create engaging online courses your student…
                  </h1>
                  <p className="text-xs text-gray-600">Glomiya Lucy</p>
                </div>
              </div>
              <div className="flex gap-4 w-[100%] sm:w-[45%] lg:w-[350px] border-b pb-5">
                <div>
                  <img src={ar2} className="w-10 sm:w-24" alt="" />
                </div>
                <div>
                  <h1 className="font-semibold cursor-pointer hover:text-[#3758f9]">
                    The ultimate formula for launching online course
                  </h1>
                  <p className="text-xs text-gray-600">Andrio jeson</p>
                </div>
              </div>
              <div className="flex gap-4 w-[100%] sm:w-[45%] lg:w-[350px] border-b pb-5">
                <div>
                  <img src={ar3} className="w-10 sm:w-24" alt="" />
                </div>
                <div>
                  <h1 className="font-semibold cursor-pointer hover:text-[#3758f9]">
                    50 Best web design tips & tricks that will help you
                  </h1>
                  <p className="text-xs text-gray-600">Samoyel Dayno</p>
                </div>
              </div>
              <div className="flex gap-4 w-[100%] sm:w-[45%] lg:w-[350px] ">
                <div>
                  <img src={ar4} className="w-10 sm:w-24" alt="" />
                </div>
                <div>
                  <h1 className="font-semibold cursor-pointer hover:text-[#3758f9]">
                    The 8 best landing page builders, reviewed
                  </h1>
                  <p className="text-xs text-gray-600">Andrio Glori</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* blog details end */}

      {/* blog components start */}
      <div className="mt-14 mb-10 dark:text-white">
        <div className="flex flex-col px-14 gap-3">
          <h1 className="text-3xl font-semibold">Related Articles</h1>
          <div className="w-24 h-[1px] bg-[#3758f9]"></div>
        </div>
        <div className="mt-10 justify-center items-center flex-wrap md:flex-nowrap px-12 flex gap-8">
          <div className="sm:w-[40%] md:w-[400px] flex flex-col gap-5 group">
            <div className="overflow-hidden rounded-md">
              <img
                src={blog1}
                className="object-cover w-full h-auto group-hover:rotate-[5deg] group-hover:scale-125 duration-300 ease-in-out"
                alt=""
              />
            </div>
            <div>
              <button className="bg-[#3758f9] text-white px-3 text-sm py-1 rounded-md">
                Dec 22, 2023
              </button>
            </div>
            <div>
              <h1 className="text-2xl md:text-xl lg:text-2xl font-semibold hover:text-[#3758f9] cursor-pointer">
                Meet AutoManage, the best AI management tools
              </h1>
            </div>
            <div>
              <p className="text-gray-500 dark:text-gray-400 text-sm md:w-[90%] lg:w-[70%]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
          <div className="sm:w-[40%] md:w-[400px] flex flex-col gap-5 group">
            <div className="overflow-hidden rounded-md">
              <img
                src={blog2}
                className="object-cover w-full h-auto group-hover:rotate-[5deg] group-hover:scale-125 duration-300 ease-in-out"
                alt=""
              />
            </div>
            <div>
              <button className="bg-[#3758f9] text-white px-3 text-sm py-1 rounded-md">
                Mar 15, 2023
              </button>
            </div>
            <div>
              <h1 className="text-2xl md:text-xl lg:text-2xl font-semibold hover:text-[#3758f9] cursor-pointer">
                How to earn more money as a wellness coach
              </h1>
            </div>
            <div>
              <p className="text-gray-500 dark:text-gray-400 text-sm md:w-[90%] lg:w-[70%]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
          <div className="sm:w-[40%] md:w-[400px] flex flex-col gap-5 group">
            <div className="overflow-hidden rounded-md">
              <img
                src={blog3}
                className="object-cover w-full h-auto group-hover:rotate-[5deg] group-hover:scale-125 duration-300 ease-in-out"
                alt=""
              />
            </div>
            <div>
              <button className="bg-[#3758f9] text-white px-3 text-sm py-1 rounded-md">
                Jan 05, 2023
              </button>
            </div>
            <div>
              <h1 className="text-2xl md:text-xl lg:text-2xl font-semibold hover:text-[#3758f9] cursor-pointer">
                The no-fuss guide to upselling and cross selling
              </h1>
            </div>
            <div>
              <p className="text-gray-500 dark:text-gray-400 text-sm md:w-[90%] lg:w-[70%]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* blog components end */}
    </div>
  );
}

export default Blog2;

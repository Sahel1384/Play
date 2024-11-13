// import Theme from "../Theme/Theme";

import { contactRef } from "../Navbar/Navbar";

function Contact() {
  return (
    <div
      ref={contactRef}
      className="mb-[700px] sm:mb-[630px] md:mb-[480px] relative"
    >
      {/* main section start */}
      <div className="flex h-[690px] sm:h-auto items-center justify-start sm:py-72 md:py-52 px-5 md:px-0 bg-[#e9f9ff] dark:bg-[#0b1131] dark:text-white">
        <div className="absolute top-44 flex sm:justify-start md:justify-end flex-col md:px-4 lg:px-12 gap-4">
          <p className="text-md font-medium">CONTACT US</p>
          <h1 className="text-2xl sm:text-3xl font-bold w-[100%] md:w-[60%]">
            Let&apos;s talk about your problem.
          </h1>
        </div>
        <div className="flex flex-col gap-7 sm:flex-row md:flex-col md:items-start sm:bottom-0 absolute top-[300px] md:top-[480px] lg:top-[520px] md:gap-7 lg:flex-row pb-10  lg:items-center justify-start md:px-4 lg:px-10 lg:gap-4">
          <div className="flex gap-5 items-start">
            <div>
              <svg
                width="26"
                height="33"
                viewBox="0 0 29 35"
                className="fill-current text-[#3758f9]"
              >
                <path d="M14.5 0.710938C6.89844 0.710938 0.664062 6.72656 0.664062 14.0547C0.664062 19.9062 9.03125 29.5859 12.6406 33.5234C13.1328 34.0703 13.7891 34.3437 14.5 34.3437C15.2109 34.3437 15.8672 34.0703 16.3594 33.5234C19.9688 29.6406 28.3359 19.9062 28.3359 14.0547C28.3359 6.67188 22.1016 0.710938 14.5 0.710938ZM14.9375 32.2109C14.6641 32.4844 14.2812 32.4844 14.0625 32.2109C11.3828 29.3125 2.57812 19.3594 2.57812 14.0547C2.57812 7.71094 7.9375 2.625 14.5 2.625C21.0625 2.625 26.4219 7.76562 26.4219 14.0547C26.4219 19.3594 17.6172 29.2578 14.9375 32.2109Z" />
                <path d="M14.5 8.58594C11.2734 8.58594 8.59375 11.2109 8.59375 14.4922C8.59375 17.7188 11.2187 20.3984 14.5 20.3984C17.7812 20.3984 20.4062 17.7734 20.4062 14.4922C20.4062 11.2109 17.7266 8.58594 14.5 8.58594ZM14.5 18.4297C12.3125 18.4297 10.5078 16.625 10.5078 14.4375C10.5078 12.25 12.3125 10.4453 14.5 10.4453C16.6875 10.4453 18.4922 12.25 18.4922 14.4375C18.4922 16.625 16.6875 18.4297 14.5 18.4297Z" />
              </svg>
            </div>
            <div className="flex flex-col gap-3 items-start">
              <h1 className="text-lg font-medium">Our Location</h1>
              <p className="text-gray-600 dark:text-gray-400 text-sm w-[70%]">
                401 Broadway, 24th Floor, Orchard Cloud View, London{" "}
              </p>
            </div>
          </div>
          <div className="flex gap-5 items-start">
            <div>
              <svg
                width="34"
                height="25"
                viewBox="0 0 34 25"
                className="fill-current text-[#3758f9]"
              >
                <path d="M30.5156 0.960938H3.17188C1.42188 0.960938 0 2.38281 0 4.13281V20.9219C0 22.6719 1.42188 24.0938 3.17188 24.0938H30.5156C32.2656 24.0938 33.6875 22.6719 33.6875 20.9219V4.13281C33.6875 2.38281 32.2656 0.960938 30.5156 0.960938ZM30.5156 2.875C30.7891 2.875 31.0078 2.92969 31.2266 3.09375L17.6094 11.3516C17.1172 11.625 16.5703 11.625 16.0781 11.3516L2.46094 3.09375C2.67969 2.98438 2.89844 2.875 3.17188 2.875H30.5156ZM30.5156 22.125H3.17188C2.51562 22.125 1.91406 21.5781 1.91406 20.8672V5.00781L15.0391 12.9922C15.5859 13.3203 16.1875 13.4844 16.7891 13.4844C17.3906 13.4844 17.9922 13.3203 18.5391 12.9922L31.6641 5.00781V20.8672C31.7734 21.5781 31.1719 22.125 30.5156 22.125Z" />
              </svg>
            </div>
            <div className="flex flex-col gap-3 items-start">
              <h1 className="text-lg font-medium">How Can We Help?</h1>
              <div>
                <p className="text-gray-600 dark:text-gray-400 text-sm w-[70%]">
                  info@yourdomain.com
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm w-[70%]">
                  contact@yourdomain.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* main section end */}

      {/* form  start*/}
      <div className="w-[90%] -bottom-[400px] dark:text-white sm:-bottom-[400px] right-5 absolute md:w-[40%] lg:w-[30%] pl-14 md:absolute md:top-28 md:right-10 dark:bg-[#1f2a37] bg-white rounded-lg py-12 md:py-0 md:h-[570px] flex flex-col gap-4 items-start justify-center shadow-xl">
        <h1 className="text-2xl font-semibold">Send us a Message</h1>
        <div className="mt-2 flex flex-col">
          <label htmlFor="" className="text-sm text-gray-500">
            Full Name*
          </label>
          <input
            type="text"
            className="border-b text-sm py-3 outline-none bg-transparent focus:border-[#3758f9] w-[60vw] md:w-[20vw]"
            placeholder="Moh Sahel"
          />
        </div>
        <div className="mt-2 flex flex-col">
          <label htmlFor="" className="text-sm text-gray-500">
            Email*
          </label>
          <input
            type="text"
            className="border-b text-sm py-3 outline-none bg-transparent focus:border-[#3758f9] w-[60vw] md:w-[20vw]"
            placeholder="sahel@gmail.com"
          />
        </div>
        <div className="mt-2 flex flex-col">
          <label htmlFor="" className="text-sm text-gray-500">
            Phone*
          </label>
          <input
            type="text"
            className="border-b text-sm py-3 outline-none bg-transparent focus:border-[#3758f9] w-[60vw] md:w-[20vw]"
            placeholder="078 000 6092"
          />
        </div>
        <div className="mt-2 flex flex-col">
          <label htmlFor="" className="text-sm text-gray-500">
            Message*
          </label>
          <input
            type="text"
            className="border-b text-sm py-3 outline-none bg-transparent focus:border-[#3758f9] w-[60vw] md:w-[20vw]"
            placeholder="Type your message here"
          />
        </div>
        <div>
          <input
            type="submit"
            value="Send"
            className="bg-[#3758f9] text-white py-2 px-10 rounded-md mt-4 hover:bg-[#394db2] duration-200 cursor-pointer"
          />
        </div>
      </div>
      {/* form  end*/}

      {/* images start */}
      <div className="relative -bottom-[480px] sm:bottom-0">
        <div className="absolute sm:top-[480px] md:top-[350px] flex flex-wrap lg:flex-nowrap w-full justify-center gap-10 px-10">
          <div className="bg-brand1 dark:bg-brand2 w-[140px] h-10 bg-contain bg-no-repeat"></div>
          <div className="bg-brand3 dark:bg-brand4 w-[140px] h-10 bg-contain bg-no-repeat"></div>
          <div className="bg-brand5 dark:bg-brand6 w-[140px] h-10 bg-contain bg-no-repeat"></div>
          <div className="bg-brand7 dark:bg-brand8 w-[140px] h-10 bg-contain bg-no-repeat"></div>
          <div className="bg-brand9 dark:bg-brand10 w-[140px] h-10 bg-contain bg-no-repeat"></div>
        </div>
      </div>
      {/* images end */}
    </div>
  );
}

export default Contact;

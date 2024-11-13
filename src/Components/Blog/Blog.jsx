import blog1 from "../../assets/img/blog/blog-01.jpg";
import blog2 from "../../assets/img/blog/blog-02.jpg";
import blog3 from "../../assets/img/blog/blog-03.jpg";
function Blog() {
  return (
    <div className="relative py-28 dark:bg-[#111928] dark:text-white">
      {/* heading start */}
      <div className=" flex flex-col items-center justify-center gap-4">
        <p className="font-medium tracking-wide text-[#3758f9]">Our Blogs</p>
        <h1 className="text-3xl lg:text-4xl w-[100%] text-center font-bold dark:text-white">
          Our Recent News
        </h1>
        <h2 className="text-sm w-[100%] px-10 sm:w-[480px] text-center text-gray-700 dark:text-gray-400">
          There are many variations of passages of Lorem Ipsum available but the
          majority have suffered alteration in some form.
        </h2>
      </div>
      {/* heading end */}

      {/* images and description for blog page start */}
      <div className="mt-16 justify-center items-center flex-wrap md:flex-nowrap px-12 flex gap-8">
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
      {/* images and description for blog page end */}
    </div>
  );
}

export default Blog;

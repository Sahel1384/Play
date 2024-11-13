import author1 from "../../assets/img/testimonials/author-01.jpg";
import author2 from "../../assets/img/testimonials/author-02.jpg";
import author3 from "../../assets/img/testimonials/author-03.jpg";
import star from "../../assets/img/testimonials/icon-star.svg";

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

function Testimonials() {
  return (
    <div className="py-28 bg-[#f9fafb] dark:bg-[#1f2a37]">
      <div className=" flex flex-col items-center justify-center gap-4">
        <p className="font-medium tracking-wide text-[#3758f9]">Testimonials</p>
        <h1 className="text-3xl lg:text-4xl w-[100%] text-center font-bold dark:text-white">
          What our Clients Say
        </h1>
        <h2 className="text-sm w-[100%] px-10 sm:w-[480px] text-center text-gray-700 dark:text-gray-400">
          There are many variations of passages of Lorem Ipsum available but the
          majority have suffered alteration in some form.
        </h2>
      </div>

      <div className="flex gap-5 px-10 items-center justify-center flex-wrap md:flex-nowrap mt-16">
        <div className="bg-white dark:text-white dark:bg-[#111928] w-full sm:w-[45%] lg:max-w-sm px-8 rounded-xl py-7 flex flex-col gap-5 shadow-md">
          <div className="flex gap-1">
            <img src={star} className="w-4" alt="" />
            <img src={star} className="w-4" alt="" />
            <img src={star} className="w-4" alt="" />
            <img src={star} className="w-4" alt="" />
            <img src={star} className="w-4" alt="" />
          </div>
          <div>
            <p className="text-sm w-[93%] font-semibolds dark:text-gray-400 text-gray-500">
              “Our members are so impressed. It&apos;s intuitive. It&apos;s
              clean. It&apos;s distraction free. If you&apos;re building a
              community.’’
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div>
              <img src={author1} className="w-10" alt="" />
            </div>
            <div className="cursor-pointer">
              <h1 className="text-sm font-semibold">Sabo Masties</h1>
              <p className="text-[12px] text-gray-500">Founder @ Rolex</p>
            </div>
          </div>
        </div>
        <div className="bg-white dark:text-white dark:bg-[#111928] w-full sm:w-[45%] lg:max-w-sm px-8 rounded-xl py-7 flex flex-col gap-5 shadow-md">
          <div className="flex gap-1">
            <img src={star} className="w-4" alt="" />
            <img src={star} className="w-4" alt="" />
            <img src={star} className="w-4" alt="" />
            <img src={star} className="w-4" alt="" />
            <img src={star} className="w-4" alt="" />
          </div>
          <div>
            <p className="text-sm w-[93%] font-semibolds dark:text-gray-400 text-gray-500">
              “Our members are so impressed. It&apos;s intuitive. It&apos;s
              clean. It&apos;s distraction free. If you&apos;re building a
              community.’’
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div>
              <img src={author2} className="w-10" alt="" />
            </div>
            <div className="cursor-pointer">
              <h1 className="text-sm font-semibold">Moh Sahel</h1>
              <p className="text-[12px] text-gray-500">Founder @ Rolex</p>
            </div>
          </div>
        </div>
        <div className="bg-white dark:text-white dark:bg-[#111928] w-full sm:w-[45%] lg:max-w-sm px-8 rounded-xl py-7 flex flex-col gap-5 shadow-md">
          <div className="flex gap-1">
            <img src={star} className="w-4" alt="" />
            <img src={star} className="w-4" alt="" />
            <img src={star} className="w-4" alt="" />
            <img src={star} className="w-4" alt="" />
            <img src={star} className="w-4" alt="" />
          </div>
          <div>
            <p className="text-sm w-[93%] font-semibolds dark:text-gray-400 text-gray-500">
              “Our members are so impressed. It&apos;s intuitive. It&apos;s
              clean. It&apos;s distraction free. If you&apos;re building a
              community.’’
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div>
              <img src={author3} className="w-10" alt="" />
            </div>
            <div className="cursor-pointer">
              <h1 className="text-sm font-semibold">Shahidullah</h1>
              <p className="text-[12px] text-gray-500">Founder @ Rolex</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import img1 from '../../../../public/popular teacher/1.jpg'
import img2 from '../../../../public/popular teacher/2.jpg'
import img3 from '../../../../public/popular teacher/3.jpg'
import img4 from '../../../../public/popular teacher/4.jpg'
import img5 from '../../../../public/popular teacher/5.jpg'
import img6 from '../../../../public/popular teacher/6.jpg'
import img7 from '../../../../public/popular teacher/7.jpg'
import img8 from '../../../../public/popular teacher/8.jpg'


// import required modules
import { FreeMode, Pagination } from "swiper";

const SliderTeacher = () => {
  return (
    <div className="mt-10">
      <h1 className="text-center mt-20 text-2xl md:text-5xl font-bold mb-10">--Popular Instructors--</h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="bg-pink-100 hover:bg-pink-300 rounded py-5">
          <div className="mx-auto">
            <img className="mx-auto rounded-full w-36 h-36" src={img1}></img>
            <h2 className="text-center text-3xl font-bold mt-2">John Doe</h2>
            <p className="text-center text-lg mt-2 text-[#cc304f]">professor, Harvard University</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-pink-100 hover:bg-pink-300 rounded py-5">
        <div className="mx-auto">
            <img className="mx-auto rounded-full w-36 h-36" src={img2}></img>
            <h2 className="text-center text-3xl font-bold mt-2">John Doe</h2>
            <p className="text-center text-lg mt-2 text-[#cc304f]">professor, Harvard University</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-pink-100 hover:bg-pink-300 rounded py-5">
        <div className="mx-auto">
            <img className="mx-auto rounded-full w-36 h-36" src={img3}></img>
            <h2 className="text-center text-3xl font-bold mt-2">John Doe</h2>
            <p className="text-center text-lg mt-2 text-[#cc304f]">professor, Harvard University</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-pink-100 hover:bg-pink-300 rounded py-5">
        <div className="mx-auto">
            <img className="mx-auto rounded-full w-36 h-36" src={img4}></img>
            <h2 className="text-center text-3xl font-bold mt-2">John Doe</h2>
            <p className="text-center text-lg mt-2 text-[#cc304f]">professor, Harvard University</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-pink-100 hover:bg-pink-300 rounded py-5">
        <div className="mx-auto">
            <img className="mx-auto rounded-full w-36 h-36" src={img5}></img>
            <h2 className="text-center text-3xl font-bold mt-2">John Doe</h2>
            <p className="text-center text-lg mt-2 text-[#cc304f]">professor, Harvard University</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-pink-100 hover:bg-pink-300 rounded py-5">
        <div className="mx-auto">
            <img className="mx-auto rounded-full w-36 h-36" src={img6}></img>
            <h2 className="text-center text-3xl font-bold mt-2">John Doe</h2>
            <p className="text-center text-lg mt-2 text-[#cc304f]">professor, Harvard University</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-pink-100 hover:bg-pink-300 rounded py-5">
        <div className="mx-auto">
            <img className="mx-auto rounded-full w-36 h-36" src={img7}></img>
            <h2 className="text-center text-3xl font-bold mt-2">John Doe</h2>
            <p className="text-center text-lg mt-2 text-[#cc304f]">professor, Harvard University</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-pink-100 hover:bg-pink-300 rounded py-5"><div className="mx-auto">
            <img className="mx-auto rounded-full w-36 h-36" src={img8}></img>
            <h2 className="text-center text-3xl font-bold mt-2">John Doe</h2>
            <p className="text-center text-lg mt-2 text-[#cc304f]">professor, Harvard University</p>
          </div></SwiperSlide>
        <SwiperSlide className="bg-pink-100 hover:bg-pink-300 rounded py-5"><div className="mx-auto">
            <img className="mx-auto rounded-full w-36 h-36" src={img1}></img>
            <h2 className="text-center text-3xl font-bold mt-2">John Doe</h2>
            <p className="text-center text-lg mt-2 text-[#cc304f]">professor, Harvard University</p>
          </div></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SliderTeacher;
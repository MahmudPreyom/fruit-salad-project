/* eslint-disable react/no-unescaped-entities */
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import p1 from "../../assets/Image Placeholder.png"
import p2 from "../../assets/Image Placeholder2.png"
import p3 from "../../assets/Image Placeholder3.png"

// import './styles.css';

const PeopleComents = () => {
    return (
        <div>
            <Swiper
                slidesPerView={2}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><div className="card bg-base-100 shadow-xl">
                    <div className="card-body relative">
                        <img className="w-[90px] h-[90px] absolute -inset-1" src={p1} alt="" />
                        <div className="mt-20 space-y-2">
                            <h2 className="card-title">Selena Gomz</h2>
                            <p>22 Years</p>
                            <p>The salad is fresh!!! Don't ask about the sauce again, it's really delicious, it's going to be routine. I recommend this salad to all of you guys! because they really take care of the quality.</p>
                        </div>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide><div className="card bg-base-100 shadow-xl">
                    <div className="card-body relative">
                        <img className="w-[90px] h-[90px] absolute -inset-1" src={p2} alt="" />
                        <div className="mt-20 space-y-2">
                        <h2 className="card-title">David Ken</h2>
                        <p>24 Years</p>
                        <p>The salad is fresh!!! Don't ask about the sauce again, it's really delicious, it's going to be routine. I recommend this salad to all of you guys! because they really take care of the quality.</p>
                        </div>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide><div className="card bg-base-100 shadow-xl">
                    <div className="card-body relative">
                        <img className="w-[90px] h-[90px] absolute -inset-1" src={p3} alt="" />
                        <div className="mt-20 space-y-2">
                        <h2 className="card-title">Jennifer Sina</h2>
                        <p>21 Years</p>
                        <p>The salad is fresh!!! Don't ask about the sauce again, it's really delicious, it's going to be routine. I recommend this salad to all of you guys! because they really take care of the quality.</p>
                        </div>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide><div className="card bg-base-100 shadow-xl">
                    <div className="card-body relative">
                        <img className="w-[90px] h-[90px] absolute -inset-1" src={p2} alt="" />
                        <div className="mt-20 space-y-2">
                        <h2 className="card-title">Selena Gomz</h2>
                        <p>22 Years</p>
                        <p>The salad is fresh!!! Don't ask about the sauce again, it's really delicious, it's going to be routine. I recommend this salad to all of you guys! because they really take care of the quality.</p>
                        </div>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide><div className="card bg-base-100 shadow-xl">
                    <div className="card-body  relative">
                        <img className="w-[90px] h-[90px] absolute -inset-1" src={p1} alt="" />
                        <div className="mt-20 space-y-2">
                        <h2 className="card-title">David Ken</h2>
                        <p>24 Years</p>
                        <p>The salad is fresh!!! Don't ask about the sauce again, it's really delicious, it's going to be routine. I recommend this salad to all of you guys! because they really take care of the quality.</p>
                        </div>
                    </div>
                </div></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default PeopleComents;
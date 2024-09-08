/* eslint-disable react/no-unescaped-entities */
import { FaStar } from "react-icons/fa";
import img1 from "../../../assets/Illustration.png"
import img2 from "../../../assets/ya.png"
import img3 from "../../../assets/Group 8431.png"
import love from "../../../assets/animation.png"
import Counter from "../Counter/NCounter";

const Banner = () => {
    return (
        <div>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="relative" style={{
                    backgroundImage: "url(https://i.ibb.co.com/n6wFpdr/Group-8441.png)",
                }}>
                    <div className='box up-down md:ml-80 lg:ml-80 ml-56'>
                        <img src={love} alt="" />
                    </div>
                        <img className="md:w-[660px] lg:w-[660px] md:h-[745px] lg:h-[745px]" src={img1} alt="" />
                        <div className="rounded-full w-[288px] h-[70px] bg-slate-50 p-1 flex justify-start absolute md:bottom-24 lg:bottom-24 bottom-0 md:-left-10 lg:-left-10 left-0">
                            <img className="w-[60px] h-[60px]" src={img2} alt="" />
                            <div className="md:flex lg:flex grid gap-28">
                                <div className="w-40">
                                    <p className="font-bold">Our Happy Customer</p>
                                    <small className="flex gap-2"><FaStar className="text-yellow-400 mt-1" /> 4.9 <span>(1.989 Reviews)</span></small>
                                </div>
                                <div className="w-[160px] h-[185px] rounded-3xl bg-slate-50 p-5 md:-mt-0 lg-mt-0 md:ml-0 lg:ml-0 -mt-96 ml-28">
                                    <p>Daily Calories</p>
                                    <p className="font-bold">123 Cal</p>
                                    <img className="mx-auto mt-8" src={img3} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <button className="p-3 mb-5 font-light bg-orange-100 rounded-full text-orange-500">#1  Best Healthy Salad</button>
                        <h1 className="text-5xl font-bold"><span className="text-orange-500">Skip</span> The Diet,
                            Just Eat Healthy
                            With Jez Salad</h1>
                        <p className="py-6">
                            Imagine you don't need a diet because we provide
                            healthy and delicious food for you!
                        </p>
                        <button className="btn btn-warning rounded-full text-white">Order Food</button>
                        <div className="flex gap-5 mt-10">
                            <p className="font-bold"><Counter className="grid" number={5000} title="+" /><span className="font-normal">Customer</span></p>
                            <p className="font-bold"><Counter className="grid" number={8000} title="+" /><span className="font-normal">Delivery</span></p>
                            <p className="font-bold"><Counter className="grid" number={1000} title="+" /><span className="font-normal">Ratings</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
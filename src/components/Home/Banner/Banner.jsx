/* eslint-disable react/no-unescaped-entities */
import { FaStar } from "react-icons/fa";
import img1 from "../../../assets/Illustration.png"
import img2 from "../../../assets/ya.png"

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="relative">
                        <img className="w-[660px] h-[745px]" src={img1} alt="" />
                        <div className="rounded-full w-[288px] h-[70px] bg-slate-50 p-1 flex justify-start absolute bottom-32 -left-10">
                            <img className="w-[60px] h-[60px]" src={img2} alt="" />
                            <div>
                            <p className="font-bold">Our Happy Customer</p>
                            <small className="flex gap-2"><FaStar className="text-yellow-400 mt-1"/> 4.9 <span>(1.989 Reviews)</span></small>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold"><span className="text-orange-500">Skip</span> The Diet,
                            Just Eat Healthy
                            With Jez Salad</h1>
                        <p className="py-6">
                            Imagine you don't need a diet because we provide
                            healthy and delicious food for you!
                        </p>
                        <button className="btn btn-warning rounded-full text-white">Order Food</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
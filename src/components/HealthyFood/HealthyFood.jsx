import { FaArrowRight } from "react-icons/fa";

const HealthyFood = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 md:w-[1170px] mx-auto">

            {/* 1 */}
            <div className="card bg-slate-50 hover:bg-base-100 w-[364px] h-[465px] hover:shadow-xl">
                <div className="card-body space-y-16">
                    <img className="w-[120px] h-[120px]" src="https://i.ibb.co.com/svZnNKP/Icon3.png" alt="" />
                    <div className="card-actions justify-start space-y-5">
                        <h2 className="card-title font-bold">Own fruit orchard</h2>
                        <p>Langsung dari Kebun Sendiri yang
                            tersebar di setiap provinsi yang
                            memiliki cabang toko Jez Salad.</p>
                        <button className="btn btn-outline hover:btn-warning rounded-full flex">Learn more <FaArrowRight /></button>
                    </div>
                </div>
            </div>

            {/* 2 */}
            <div className="card bg-slate-50 hover:bg-base-100 w-[364px] h-[465px] hover:shadow-xl">
                <div className="card-body space-y-16">
                    <img className="w-[120px] h-[120px]" src="https://i.ibb.co.com/wc8d1Vg/Icon2.png" alt="" />
                    <div className="card-actions justify-start space-y-5">
                        <h2 className="card-title font-bold">#1 Healthy Fruit Salad</h2>
                        <p>The pioneer of healthy fruit salads that
                            are delicious & suitable for all people
                            with the best quality assurance.</p>
                        <button className="btn btn-outline hover:btn-warning rounded-full flex">Learn more <FaArrowRight /></button>
                    </div>
                </div>
            </div>

            {/* 3 */}
            <div className="card bg-slate-50 hover:bg-base-100 w-[364px] h-[465px] hover:shadow-xl">
                <div className="card-body space-y-16">
                    <img className="w-[120px] h-[120px]" src="https://i.ibb.co.com/jhzLnVr/Icon.png" alt="" />
                    <div className="card-actions justify-start space-y-5">
                        <h2 className="card-title font-bold">100 Top Brand</h2>
                        <p>We are one of the best brands in the <br />Food and Beverage sector <br />in Indonesia.</p>
                        <button className="btn btn-outline hover:btn-warning rounded-full flex space-y-5">Learn more <FaArrowRight /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HealthyFood;
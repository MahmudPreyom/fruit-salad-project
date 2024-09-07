

const Subscribe = () => {
    return (
        <div className="mb-20">
            <div
                className="hero w-full md:w-[1170px] md:h-[552px] lg:w-[1170px] lg:h-[552px] mx-auto rounded-3xl bg-orange-50"
                style={{
                    backgroundImage: "url(https://i.ibb.co.com/n6wFpdr/Group-8441.png)",
                }}>

                <div className="hero-content text-center">
                    <div className="space-y-14">
                        <p className="mb-5 text-orange-500 font-semibold">Our Subscribe</p>
                        <h4 className="mb-5 text-4xl font-bold">
                            Subscribe To Get The Latest<br />Promo from Jez Salad
                        </h4>
                        <p>We recommended you to subscribe to our promo program,<br />drop your email below to get daily update about us</p>
                        <label className="input input-bordered rounded-full flex items-center gap-2">
                            <input type="text" className="grow" placeholder="Enter your email address" />
                            <span className="badge badge-warning p-5 text-white -mr-3">Optional</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;
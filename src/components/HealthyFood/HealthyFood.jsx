
const HealthyFood = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 w-[1170px] mx-auto">

            {/* 1 */}
            <div className="card bg-base-100 w-96 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Own fruit orchard</h2>
                    <p>Langsung dari Kebun Sendiri yang
                        tersebar di setiap provinsi yang
                        memiliki cabang toko Jez Salad.</p>
                    <div className="card-actions justify-start">
                        <button className="btn btn-outline hover:btn-warning rounded-full">Learn more</button>
                    </div>
                </div>
            </div>

            {/* 2 */}
            <div className="card bg-base-100 w-96 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">#1 Healthy Fruit Salad</h2>
                    <p>The pioneer of healthy fruit salads that
                        are delicious & suitable for all people
                        with the best quality assurance.</p>
                    <div className="card-actions justify-start">
                        <button className="btn btn-outline hover:btn-warning rounded-full">Learn more</button>
                    </div>
                </div>
            </div>

            {/* 3 */}
            <div className="card bg-base-100 w-96 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">100 Top Brand</h2>
                    <p>We are one of the best brands in the
                        Food and Beverage sector
                        in Indonesia.</p>
                    <div className="card-actions justify-start">
                        <button className="btn btn-outline hover:btn-warning rounded-full">Learn more</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HealthyFood;
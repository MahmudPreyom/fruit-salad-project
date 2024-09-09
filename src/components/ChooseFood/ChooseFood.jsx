import HealthyFood from "../HealthyFood/HealthyFood";

const ChooseFood = () => {
    return (
        <div className="space-y-20 mt-16">
            <div className="md:flex md:justify-between lg:flex lg:justify-between grid grid-cols-1 mx-auto md:w-[1165px] lg:w-[1100px] p-3">
                <h4 className="font-semibold text-4xl md:-ml-9 lg:-ml-9">WHY CHOOSE US<br />FOR <span className="text-orange-500">YOUR HEALTHY FOOD</span></h4>
                <p>We continue to consistently choose and<br />maintain the quality of the fruit served, so that<br />it remains fresh and nutritious when you eat it.</p>
            </div>
            <HealthyFood/>
        </div>
    );
};

export default ChooseFood;